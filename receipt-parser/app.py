from fastapi import FastAPI, UploadFile, File
import uvicorn

from model import model, processor

import torch
import json
import re
from qwen_vl_utils import process_vision_info
from PIL import Image
import io
import datetime
from transformers import TextStreamer

app = FastAPI()

@app.post('/parser')
async def parse_receipt(file: UploadFile = File(...)):
	content = await file.read()
	image = Image.open(io.BytesIO(content))

	messages = [
		{
			"role": "user",
			"content": [
				{"type": "image", "image": image},
				{
					"type": "text",
					"text": (
						"Identify the final 'Total Due' or 'Amount Paid' on this receipt. "
						"Crucial: Ignore any fields labeled 'Savings', 'You Saved', 'Discount', or 'Total Savings'. "
						"Return ONLY a JSON object: {'parsed_amount': float}"
					)
				},
			],
		}
	]

	text = processor.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
	image_inputs, _ = process_vision_info(messages) # type: ignore

	inputs = processor(
		text=[text],
		images=image_inputs,
		padding=True,
		return_tensors="pt"
  ).to(model.device)

	print("Starting inference...")
	start = datetime.datetime.now()
	with torch.no_grad():
		streamer = TextStreamer(processor.tokenizer, skip_prompt=True, skip_special_tokens=True)
		generated_ids = model.generate(**inputs, max_new_tokens=50, streamer=streamer)
	end = datetime.datetime.now()
	elapsed = end - start
	print(f"Finished in {(elapsed.seconds + elapsed.microseconds / 1e6):.2f} seconds")

	generated_ids_trimmed = [out_ids[len(in_ids):] for in_ids, out_ids in zip(inputs.input_ids, generated_ids)]
	output_text = processor.batch_decode(generated_ids_trimmed, skip_special_tokens=True)[0]

	json_match = re.search(r"(\{.*\})", output_text, re.DOTALL)
	return json.loads(json_match.group(1)) if json_match else {"error": "No JSON found"}

if __name__ == "__main__":
	uvicorn.run(app, host="0.0.0.0", port=8000)

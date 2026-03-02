import torch
from transformers import Qwen2_5_VLForConditionalGeneration, AutoProcessor, BitsAndBytesConfig

MODEL_ID = "Qwen/Qwen2.5-VL-3B-Instruct"

# 4-bit loading
bnb_config = BitsAndBytesConfig(
	load_in_4bit=True,
	bnb_4bit_use_double_quant=True,
	bnb_4bit_quant_type="nf4",
	bnb_4bit_compute_dtype=torch.bfloat16,
	# bnb_4bit_compute_dtype=torch.float16,
)

print(f"Loading {MODEL_ID} in 4-bit mode...")
model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
	MODEL_ID,
	quantization_config=bnb_config,
	device_map="auto",
	trust_remote_code=True
)

max_pixels = 720 * 1280 * 2
processor = AutoProcessor.from_pretrained(MODEL_ID, max_pixels=max_pixels)

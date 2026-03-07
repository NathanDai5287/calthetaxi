import os
import time
import io
import re
import json
import datetime

from dotenv import load_dotenv
load_dotenv()

import boto3
import psycopg2
import torch
from PIL import Image
from qwen_vl_utils import process_vision_info
from transformers import TextStreamer

from model import model, processor

POLL_INTERVAL = 30  # seconds

s3 = boto3.client(
	's3',
	endpoint_url=os.environ['R2_ENDPOINT'],
	aws_access_key_id=os.environ['R2_ACCESS_KEY'],
	aws_secret_access_key=os.environ['R2_SECRET_KEY'],
)
BUCKET = os.environ['R2_BUCKET']


def parse_image(image: Image.Image) -> float | None:
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
	elapsed = (datetime.datetime.now() - start).total_seconds()
	print(f"Finished in {elapsed:.2f} seconds")

	generated_ids_trimmed = [out_ids[len(in_ids):] for in_ids, out_ids in zip(inputs.input_ids, generated_ids)]
	output_text = processor.batch_decode(generated_ids_trimmed, skip_special_tokens=True)[0]

	match = re.search(r"(\{.*\})", output_text, re.DOTALL)
	if not match:
		return None
	return json.loads(match.group(1)).get('parsed_amount')


def connect():
	return psycopg2.connect(os.environ['DATABASE_URL'])


def process_job(job_id, reimbursement_id):
	# Fetch receipt info then close before the long inference
	conn = connect()
	try:
		with conn.cursor() as cur:
			cur.execute("SELECT receipt_key, amount FROM reimbursements WHERE id = %s", (reimbursement_id,))
			receipt_key, claimed_amount = cur.fetchone()
	finally:
		conn.close()

	obj = s3.get_object(Bucket=BUCKET, Key=receipt_key)
	image = Image.open(io.BytesIO(obj['Body'].read()))
	parsed_amount = parse_image(image)

	# Fresh connection to write results
	conn = connect()
	try:
		if parsed_amount is None:
			raise ValueError("Model did not return a parsed_amount")

		amount_matches = abs(float(parsed_amount) - float(claimed_amount)) < 0.01

		with conn.cursor() as cur:
			cur.execute(
				"""
				UPDATE receipt_parses
				SET status = 'PARSED', parsed_amount = %s, amount_matches = %s
				WHERE id = %s
				""",
				(parsed_amount, amount_matches, job_id)
			)
		conn.commit()
		print(f"Job {job_id} done: parsed_amount={parsed_amount}, matches={amount_matches}")

	except Exception as e:
		print(f"Job {job_id} failed: {e}")
		with conn.cursor() as cur:
			cur.execute("UPDATE receipt_parses SET status = 'FAILED' WHERE id = %s", (job_id,))
		conn.commit()
	finally:
		conn.close()


def poll() -> bool:
	conn = connect()
	try:
		with conn.cursor() as cur:
			cur.execute(
				"""
				UPDATE receipt_parses
				SET status = 'PARSING'
				WHERE id = (
					SELECT id FROM receipt_parses
					WHERE status = 'PENDING'
					LIMIT 1
					FOR UPDATE SKIP LOCKED
				)
				RETURNING id, reimbursement_id
				"""
			)
			row = cur.fetchone()
		conn.commit()
	finally:
		conn.close()

	if not row:
		return False

	job_id, reimbursement_id = row
	print(f"Claimed job {job_id} for reimbursement {reimbursement_id}")
	process_job(job_id, reimbursement_id)
	return True


if __name__ == '__main__':
	print("Worker started, polling every 30 seconds...")

	while True:
		try:
			found = poll()
			if not found:
				time.sleep(POLL_INTERVAL)
		except Exception as e:
			print(f"Poll error: {e}")
			time.sleep(POLL_INTERVAL)

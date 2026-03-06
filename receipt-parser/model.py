import torch
from transformers import Qwen2_5_VLForConditionalGeneration, AutoProcessor, QuantoConfig

# Uncomment for GPU (requires: pip install bitsandbytes accelerate)
# from transformers import BitsAndBytesConfig

MODEL_ID = "Qwen/Qwen2.5-VL-3B-Instruct"

# --- GPU: 4-bit quantization (uncomment block below, comment out CPU block) ---
# bnb_config = BitsAndBytesConfig(
# 	load_in_4bit=True,
# 	bnb_4bit_use_double_quant=True,
# 	bnb_4bit_quant_type="nf4",
# 	bnb_4bit_compute_dtype=torch.bfloat16,
# )
# print(f"Loading {MODEL_ID} in 4-bit mode...")
# model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
# 	MODEL_ID,
# 	quantization_config=bnb_config,
# 	device_map="auto",
# 	trust_remote_code=True
# )

# --- CPU: 8-bit quantization via optimum-quanto ---
# To reduce memory further at the cost of more accuracy loss, use weights="int4"
quantization_config = QuantoConfig(weights="int4", modules_to_not_convert=["model.visual"])
print(f"Loading {MODEL_ID} with int4 quantization (excluding visual encoder) on CPU...")
model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
	MODEL_ID,
	quantization_config=quantization_config,
	device_map="cpu",
	trust_remote_code=True
)

max_pixels = 720 * 1280 * 2
processor = AutoProcessor.from_pretrained(MODEL_ID, max_pixels=max_pixels)

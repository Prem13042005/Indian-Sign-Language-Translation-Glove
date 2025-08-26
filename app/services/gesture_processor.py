import joblib
import json
from ..utils import preprocessor, ml_inference, tts, logger

# Load pre-trained model
model = joblib.load("../../data/models/current_model.joblib")

def process(data: dict, language: str):
    try:
        # Preprocess raw sensor data
        preprocessed_data = preprocessor.preprocess_data(data)
        # Recognize gesture
        gesture = ml_inference.recognize_gesture(preprocessed_data, model)
        # Convert to speech
        tts.text_to_speech(gesture, language)
        logger.log_info(f"Recognized and spoken: {gesture}")
        return gesture
    except Exception as e:
        logger.log_error(f"Processing failed: {e}")
        raise
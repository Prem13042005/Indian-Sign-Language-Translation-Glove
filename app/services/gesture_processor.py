import joblib
import json
import bluetooth
import numpy as np
from ..utils import preprocessor, ml_inference, tts, logger

# Load pre-trained model
model = joblib.load("../../data/models/current_model.joblib")

def receive_bluetooth_data(device_mac):
    sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
    sock.connect((device_mac, 1))  # Adjust channel based on hardware
    while True:
        data = sock.recv(1024).decode('utf-8')
        if data:
            yield json.loads(data)
    sock.close()

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
from ..utils import tts

def generate_speech(text: str, language: str):
    tts.text_to_speech(text, language)
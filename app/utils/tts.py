from gtts import gTTS
import os
from googletrans import Translator

translator = Translator()

def text_to_speech(text: str, language: str = "en"):
    if language != "en":
        text = translator.translate(text, dest=language).text
    tts = gTTS(text=text, lang=language)
    tts.save("output.mp3")
    os.system("mpg321 output.mp3")  # Use appropriate player for your OS (e.g., 'afplay' on macOS)
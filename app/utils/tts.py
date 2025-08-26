from gtts import gTTS
import os
from googletrans import Translator
from playsound import playsound  # Install with `pip install playsound`

translator = Translator()

def text_to_speech(text: str, language: str = "en"):
    if language != "en":
        text = translator.translate(text, dest=language).text
    tts = gTTS(text=text, lang=language)
    tts.save("output.mp3")
    playsound("output.mp3")  # Works on Windows
    os.remove("output.mp3")  # Clean up
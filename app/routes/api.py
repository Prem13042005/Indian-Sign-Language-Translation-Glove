from flask import request, jsonify, render_template
from ..services import gesture_processor
from ..utils import logger

@app.route('/process_gesture', methods=['POST'])
def process_gesture():
    try:
        data = request.get_json()  # Expect JSON from Bluetooth or frontend
        language = request.args.get('language', 'en')  # Default to English
        logger.log_info(f"Received data: {data}")
        gesture = gesture_processor.process(data, language)
        return jsonify({"recognized": gesture})
    except Exception as e:
        logger.log_error(f"Error processing gesture: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/')
def index():
    return render_template('index.html')
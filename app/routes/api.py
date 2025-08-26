from flask import app, request, jsonify
from ..services import gesture_processor
from ..utils import logger

@app.route('/process_gesture', methods=['POST'])
def process_gesture():
    try:
        data = request.json  # Expect JSON data from glove
        if not data:
            return jsonify({"error": "No data provided"}), 400
        logger.log_info(f"Received data: {data}")
        language = request.args.get('language', 'en')  # Default to English
        gesture = gesture_processor.process(data, language)
        return jsonify({"recognized": gesture})
    except Exception as e:
        logger.log_error(f"Error processing gesture: {e}")
        return jsonify({"error": str(e)}), 500
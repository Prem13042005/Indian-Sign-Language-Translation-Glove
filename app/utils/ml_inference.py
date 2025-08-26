import numpy as np

def recognize_gesture(preprocessed_data: np.ndarray, model):
    prediction = model.predict(preprocessed_data)[0]
    return prediction
import numpy as np
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

def preprocess_data(raw_data: dict):
    features = np.array(list(raw_data.values())).reshape(1, -1)
    return scaler.fit_transform(features)  # Fit on first use; save scaler if needed
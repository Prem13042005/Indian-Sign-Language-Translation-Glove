import joblib, numpy as np, json

model = joblib.load("models/current_model.joblib")
with open("models/feature_meta.json") as f:
    feat_meta = json.load(f)

def make_features(frames):
    last = frames[-1]
    f = last["flex"]
    imu = [last["imu"]["roll"], last["imu"]["pitch"], last["imu"]["yaw"]]
    return np.array(f + imu).reshape(1, -1)

def predict(frames):
    feats = make_features(frames)
    proba = model.predict_proba(feats)[0]
    idx = int(np.argmax(proba))
    return {
        "label": model.classes_[idx],
        "confidence": float(proba[idx]),
        "alt_labels": sorted(
            [(lbl, float(p)) for lbl, p in zip(model.classes_, proba)], key=lambda x: -x[1]
        )[:3]
    }

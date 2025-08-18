from flask import Blueprint, request, jsonify
from app.models.db import db, Sample, Inference
import time

api_bp = Blueprint("api", __name__)

@api_bp.route("/ingest", methods=["POST"])
def ingest():
    data = request.get_json()
    sample = Sample(
        user_uid=data["user_id"],
        label=data.get("label"),
        ts=data["ts"],
        flex1=data["flex"][0], flex2=data["flex"][1], flex3=data["flex"][2],
        flex4=data["flex"][3], flex5=data["flex"][4],
        roll=data["imu"]["roll"], pitch=data["imu"]["pitch"], yaw=data["imu"]["yaw"]
    )
    db.session.add(sample)
    db.session.commit()
    return jsonify({"msg": "saved"}), 201

@api_bp.route("/infer", methods=["POST"])
def infer():
    from app.services.model_svc import predict
    frames = request.get_json()["frames"]
    result = predict(frames)
    inf = Inference(
        user_uid="prem001",
        ts=int(time.time()*1000),
        pred_label=result["label"],
        confidence=result["confidence"]
    )
    db.session.add(inf)
    db.session.commit()
    return jsonify(result)

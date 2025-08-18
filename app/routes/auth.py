from flask import Blueprint, request, jsonify
from app.models.db import db, User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    u = User(user_uid=data["user_uid"], name=data["name"])
    db.session.add(u)
    db.session.commit()
    return jsonify({"msg": "user created"}), 201

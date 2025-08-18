from flask import Flask
from app.config import Config
from app.models.db import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # init DB
    db.init_app(app)

    with app.app_context():
        db.create_all()   # creates tables if not exist

    # import routes
    from app.routes.api import api_bp
    from app.routes.auth import auth_bp

    app.register_blueprint(api_bp, url_prefix="/api")
    app.register_blueprint(auth_bp, url_prefix="/auth")

    return app

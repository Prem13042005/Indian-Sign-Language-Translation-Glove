import os

class Config:
    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://isl_user:isl_password@localhost/isl_glove_db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")

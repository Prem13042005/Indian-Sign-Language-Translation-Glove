from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Example table for storing translated signs
class Translation(db.Model):
    __tablename__ = "translations"

    id = db.Column(db.Integer, primary_key=True)
    gesture = db.Column(db.String(100), nullable=False)
    translated_text = db.Column(db.String(255), nullable=False)
    language = db.Column(db.String(50), default="English")

    def __repr__(self):
        return f"<Translation {self.gesture} -> {self.translated_text}>"

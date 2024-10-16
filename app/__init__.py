from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__, static_folder='../client/build/static')
    CORS(app)

    with app.app_context():
        from .routes.auth import auth_bp
        from .routes.board import board_bp
        from .routes.static_files import static_bp

        app.register_blueprint(auth_bp)
        app.register_blueprint(board_bp)
        app.register_blueprint(static_bp)

    return app
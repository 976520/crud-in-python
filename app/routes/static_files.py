from flask import Blueprint, send_from_directory, abort

static_bp = Blueprint('static_files', __name__)

@static_bp.route('/')
def index():
    return send_from_directory('client/public', 'index.html')

@static_bp.route('/manifest.json')
def manifest():
    return send_from_directory('static', 'manifest.json')

@static_bp.route('/<path:path>')
def serve_static_files(path):
    try:
        return send_from_directory('client/build/static', path)
    except FileNotFoundError:
        abort(404)

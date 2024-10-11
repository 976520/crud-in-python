from flask import Flask, jsonify, request, send_from_directory  
from flask_cors import CORS  
from werkzeug.security import check_password_hash, generate_password_hash 

app = Flask(__name__, static_folder='client/build/static')
CORS(app)  

board = []

@app.route('/')
def index():
    return send_from_directory('client/public', 'index.html')  

@app.route('/manifest.json')
def manifest():
    return send_from_directory('static', 'manifest.json')  

@app.route('/api/board', methods=['GET'])
def get_board():
    return jsonify(board)  

@app.route('/api/add', methods=['POST'])
def add_board_entry():
    title = request.json.get('title')
    context = request.json.get('context')
    board.append([title, context])  
    return jsonify(success=True), 201  

@app.route('/api/delete', methods=['DELETE'])
def delete_board_entry():
    title = request.json.get('title')
    global board
    board = [item for item in board if item[0] != title] 
    return jsonify(success=True), 200

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

users = {
    "user@example.com": generate_password_hash("password123") 
}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email in users and check_password_hash(users[email], password):
        return jsonify({"success": True, "message": "로그인 성공"}), 200
    else:
        return jsonify({"success": False, "message": "로그인 실패"}), 401

if __name__ == '__main__':
    app.run(debug=True, port=3002)
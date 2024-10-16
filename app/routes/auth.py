from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash

auth_bp = Blueprint('auth', __name__)

users = {
    "user@example.com": generate_password_hash("password123")
}

@auth_bp.route('/api/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email in users and check_password_hash(users[email], password):
        return jsonify({"success": True, "message": "로그인 성공"}), 200
    return jsonify({"success": False, "message": "로그인 실패"}), 401

@auth_bp.route('/api/signup', methods=['POST'])  
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email in users:  
        return jsonify({"success": False, "message": "사용자가 이미 존재합니다."}), 400

    users[email] = generate_password_hash(password) 
    return jsonify({"success": True, "message": "회원가입 성공"}), 201

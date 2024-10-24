from flask import Blueprint, request, jsonify

board_bp = Blueprint('board', __name__)

board = []

@board_bp.route('/api/board', methods=['GET'])
def get_board():
    return jsonify(board)

@board_bp.route('/api/add', methods=['POST'])
def add_board_entry():
    data = request.json
    board.append([data.get('title'), data.get('context'), data.get('writer')])
    return jsonify(success=True), 201

@board_bp.route('/api/delete', methods=['DELETE'])
def delete_board_entry():
    title = request.json.get('title')
    global board
    board = [item for item in board if item[0] != title]
    return jsonify(success=True), 200

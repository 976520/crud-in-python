from flask import Blueprint, request, jsonify

board_bp = Blueprint('board', __name__)

board = []

@board_bp.route('/api/board', methods=['GET'])
def get_board():
    return jsonify(board)

@board_bp.route('/api/add', methods=['POST'])
def add_board_entry():
    data = request.json
    board.append({
        'title': data.get('title'),
        'context': data.get('context'),
        'writer': data.get('writer') 
    })
    return jsonify(success=True), 201

@board_bp.route('/api/delete', methods=['DELETE'])
def delete_board_entry():
    title = request.json.get('title')
    global board
    new_board = []
    for item in board:
        if item['title'] != title:
            new_board.append(item)
    board = new_board
    return jsonify(success=True), 200

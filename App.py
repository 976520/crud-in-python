from flask import Flask, jsonify, request, send_from_directory  
from flask_cors import CORS  
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
def add():
    board.append([request.json['title'], request.json['context']])  
    return jsonify(success=True), 201  

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
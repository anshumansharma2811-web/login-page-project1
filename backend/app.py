from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__, static_folder="../")
CORS(app)

client = MongoClient("mongodb+srv://admin:admin1234@cluster0.lz21b6v.mongodb.net/loginDB?retryWrites=true&w=majority")
db = client["loginDB"]
collection = db["users"]

@app.route('/')
def home():
    return send_from_directory('../', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('../', path)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    user = collection.find_one({
        "username": data['username'],
        "password": data['password']
    })

    if user:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False})

if __name__ == "__main__":
    print("✅ MongoDB Connected Successfully")
    app.run(debug=True)
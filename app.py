from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify({
        "message" : True,
        "update" : 1.9,
    })

if __name__ == "__main__":
    app.run()
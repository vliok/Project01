from flask import Flask, render_template, jsonify
from utils import cars

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("main.html")

@app.route("/data/")
def data():
    ret = cars.get_cars(test=False)
    return jsonify(ret)

if __name__ == '__main__':
    app.run(debug = False, host='0.0.0.0')

from flask import Flask, render_template, jsonify
from utils import cars

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("main.html")

@app.route("/data/")
def data():
    formatted = {
        2009: dict(),
        2010: dict(),
        2011: dict(),
        2012: dict()
    }

    for year in xrange(2009, 2013):
        for car in cars.get_cars_by_year(year, test=False):
            make = car['Identification']['Make']
            if make not in formatted[year]:
                formatted[year][make] = car

    return jsonify(formatted)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')

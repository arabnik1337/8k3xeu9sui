import random
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home_page():
    return '<h1>Homepage</h1>' + '<a href="/random">рандом </a>' + '<a href="/ai">не рандом </a>' + '<a href="/secret">точне не секрет</a>'

@app.route("/random")
def rand_numb():
    return f'<p>{random.randint(0, 10)}<p>'

@app.route("/ai")
def ai():
    return render_template("index.html") + '<a href="/">дом</a>'

@app.route("/secret")
def secret():
    return render_template("secret.html")

app.run(debug=True)
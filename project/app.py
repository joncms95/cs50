import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request
from flask_session import Session

# Configure application
app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
# db = SQL("sqlite:///finance.db")


@app.route("/")
def index():
    """Setup Page"""
    return render_template("index.html")


@ app.route("/links", methods=["GET", "POST"])
def links():
    """Buy shares of stock"""
    if request.method == "GET":
        return redirect("/")

    blue_team = request.form.get("blue_team")
    red_team = request.form.get("red_team")
    match_name = request.form.get("match_name")

    blue_team = blue_team if blue_team is not None else "Team 1"
    red_team = red_team if red_team is not None else "Team 2"
    match_name = match_name if match_name is not None else (
        f"{blue_team} vs {red_team}")

    return render_template("/links.html", blue=blue_team, red=red_team, match=match_name)

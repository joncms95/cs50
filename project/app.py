import uuid
import time
import datetime

from flask import Flask, redirect, render_template, request, abort
from flask_pymongo import PyMongo

# Configure application
app = Flask(__name__)

# Configure database
app.config["MONGO_URI"] = "mongodb://localhost:27017/mlbbBanPick"
mongo = PyMongo(app, uuidRepresentation="standard")


@app.route("/")
def index():
    """Create Page"""
    return render_template("index.html")


@app.route("/links", methods=["GET", "POST"])
def links():
    """Links Page"""
    if request.method == "GET":
        return redirect("/")

    blue_team = request.form.get("blue_team")
    red_team = request.form.get("red_team")

    blue_team = blue_team if blue_team != "" else "Team 1"
    red_team = red_team if red_team != "" else "Team 2"

    draft_id = uuid.uuid4()
    # this is a unique UUID to determine that a person with this auth_id is on the blue team
    blue_auth_id = uuid.uuid4()
    # this is a unique UUID to determine that a person with this auth_id is on the red team
    red_auth_id = uuid.uuid4()

    mongo.db.drafts.insert_one(
        {
            "createdAt": datetime.datetime.utcnow(),
            "_id": draft_id,
            "blue_auth_id": blue_auth_id,
            "red_auth_id": red_auth_id,
            "blue_ready": False,
            "red_ready": False,
            "draft_state": {
                "blueTeam": blue_team,
                "redTeam": red_team,
                "currentTurn": "",
                "currentIndex": 0,
                "selectionState": [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
                "selectedHeroes": {},
            },
        }
    )
    return render_template("/links.html", blue=blue_auth_id, red=red_auth_id, draft=draft_id)


@app.route("/draft")
def draft():
    """Draft Page"""
    draft_id = request.args.get("draft")
    if draft_id is None:
        return redirect("/")

    try:
        if mongo.db.drafts.find_one({"_id": uuid.UUID(draft_id)}):
            return render_template("/draft.html")
        abort(404)
    except:
        abort(400)


@app.route("/readystate", methods=["POST"])
def update_ready_state():
    draft_id = request.json["draftId"]
    identity = request.json["identity"]

    update_to = {}
    if identity == "blue":
        update_to["blue_ready"] = True

    if identity == "red":
        update_to["red_ready"] = True

    draft_db = mongo.db.drafts.find_one_and_update(
        {"_id": uuid.UUID(draft_id)},
        {"$set": update_to},
        return_document=True
    )

    if draft_db:
        draft_state = draft_db["draft_state"]
        if draft_state["currentIndex"] != 0 and draft_state["currentIndex"] != 21:
            turn_start_ts = draft_db["turn_start_ts"]
            draft_state["timer"] = int((turn_start_ts - time.time()) * 1000)
        return {
            "blueAuthId": draft_db["blue_auth_id"],
            "redAuthId": draft_db["red_auth_id"],
            "blueReady": draft_db["blue_ready"],
            "redReady": draft_db["red_ready"],
            "draftState": draft_db["draft_state"]
        }
    else:
        abort(404)


@app.route("/draftstate", methods=["GET"])
def get_draft_state():
    draft_id = request.args.get("draft")
    if draft_id is None:
        abort(400)

    # Retrieve record from database
    draft_db = mongo.db.drafts.find_one({"_id": uuid.UUID(draft_id)})
    if draft_db:
        draft_state = draft_db["draft_state"]
        if draft_state["currentIndex"] != 0 and draft_state["currentIndex"] != 21:
            turn_start_ts = draft_db["turn_start_ts"]
            draft_state["timer"] = int((turn_start_ts - time.time()) * 1000)
        return {
            "blueAuthId": draft_db["blue_auth_id"],
            "redAuthId": draft_db["red_auth_id"],
            "blueReady": draft_db["blue_ready"],
            "redReady": draft_db["red_ready"],
            "draftState": draft_db["draft_state"]
        }
    else:
        abort(404)


@app.route("/draftstate", methods=["POST"])
def update_draft_state():
    draft_id = request.json["draftId"]
    draft_state = request.json["draftState"]
    new_turn = request.json["newTurn"]

    update_to = {"draft_state": draft_state}
    if new_turn is True:
        update_to["turn_start_ts"] = time.time() + 50

    result = mongo.db.drafts.update_one(
        {"_id": uuid.UUID(draft_id)},
        {"$set": update_to},
    )

    # check if any documents were actually modified
    if result.acknowledged > 0:
        # return a successful response
        return {"status": "success", "message": f"Draft with draft_id {draft_id} was updated"}, 200
    else:
        abort(400)


if __name__ == "__main__":
    app.run()

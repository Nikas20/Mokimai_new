import json
def save_users(users):
    with open("data/data.json", "r") as file:
        existing = json.load(file)

    existing.append(users)

    with open("data/data.json", "w") as file:
        json.dump(existing, file, indent=4)
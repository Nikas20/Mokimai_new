from fastapi import FastAPI, Request, Response

app = FastAPI()

@app.get("/")
def get_item(limit=None, offset=None):
    if limit is not None:
        limit = int(limit)
    if offset is not None:
        offset = int(offset)
    return {"limit": limit, "offset": offset}

@app.get("/")
def get_items(limit=None, offset=None):

    data = [
        {"name": "Rokas"},
        {"name": "Petras"},
    ]

    if limit is not None:
        limit = int(limit)
        data = data[:limit]
    if offset is not None:
        offset = int(offset)
        data = data[offset:]



    return data[0]

@app.get("/items/{category}")
def list_category_items(category, limit=None):
    limit = int(limit)
    return {"category": category, "limit": limit}

@app.post("/")
def create_items(request: Request, response: Response):
    return ["Item1", "Item2"]

@app.put("/")
def replace_items():
    return { "status": "items replaced" }

@app.patch("/")
def update_items():
    return { "status": "items update" }

@app.delete("/")
def delete_items():
    return { "status": "items deleted" }

@app.get("/{item_id}")
def get_item(item_id):
    item_id = int(item_id)
    return {"item_id": item_id}

@app.get("/users/{user_id}/posts/{post_id}")
def get_item(user_id, post_id):
    user_id = int(user_id)
    post_id = int(post_id)
    return {"user_id": user_id, "post_id": post_id}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)
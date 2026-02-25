from fastapi import FastAPI, Request, Response

app = FastAPI()

@app.get("/")
def health():

    data = [
        {"name": "Pel"},
        {"name": "Men"},
        {"name": "Mew"},
    ]

    return data[0]


@app.post("/")
def create_items(request: Request, response: Response):
    return["Item1", "Item2"]

@app.put("/")
def replace_tems():
    return {"status": "items replace"}

@app.patch("/")
def update_itemse():
    return {"status": "items update"}

@app.delete("/")
def delete_items():
    return {"status": "items deleted"}

@app.get("/{item_id}")
def get_item(item_id: int):
    return {"item_id": item_id}

@app.get("/pagination")
def get_item(limit=None, offset=None):
    if limit is not None:
        limit = int(limit)
    if offset is not None:
        offset = int(offset)
    
    return {"limit": limit, "offset": offset}


@app.get("/items/{category}")
def list_category_items(category, limit=None):
    limit = int(limit)
    return {"category": category, "limit": limit}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List, Dict
import json
import aiofiles

class BookCreate(BaseModel):
    title: str
    author: str
    year: int
    genre: str
    pages: int
    price: float
    available: bool = True

class BookUpdated(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    year: Optional[int] = None
    genre: Optional[str] = None
    pages: Optional[int] = None
    price: Optional[float] = None
    available: Optional[bool] = None

app = FastAPI()

@app.get("/sync-json")
def sync_json():
    # Read JSON (blocking)
    with open("books.json", "r") as f:
        data = json.load(f)

    # Update JSON
    max_id = max(book["id"] for book in data)
    mew_book_id = max_id + 1

    # Write JSON (blocking)
    with open("books.json", "w") as f:
        json.dump(data, f)

    return data
 
BOOKS_FILE = "books.json"

@app.post("/books", status_code=201)
async def create_book(book: BookCreate) -> Dict:

    try:
       async with aiofiles.open(BOOKS_FILE, "r") as f:
            content = await f.read()
            if content.strip():
                books = json.loads(content)
            else:
                books = []
    except FileNotFoundError:
        books = []

    next_id = max([book["id"] for book in books], default=0) + 1

    new_book: Dict = {
        "id": next_id,
        "title": book.title,
        "author": book.author,
        "year": book.year,
        "genre": book.genre,
        "pages": book.pages,
        "price": book.price,
        "available": book.available,
    }

    books.append(new_book)
    async with aiofiles.open(BOOKS_FILE, "w") as f:
        await f.write(json.dumps(books, indent=4))

    return new_book

# @app.post("/books", status_code=201)
# def create_book(book: BookCreate) -> Dict:

#     try:
#         with open(BOOKS_FILE, "r") as f:
#             books = json.load(f)
#     except FileNotFoundError:
#         books = []

#     next_id = max([book["id"] for book in books], default=0) + 1

#     new_book: Dict = {
#         "id": next_id,
#         "title": book.title,
#         "author": book.author,
#         "year": book.year,
#         "genre": book.genre,
#         "pages": book.pages,
#         "price": book.price,
#         "available": book.available,
#     }

#     books.append(new_book)
#     with open(BOOKS_FILE, "w") as f:
#         json.dump(books, f, indent=4)

#     return new_book


@app.get("/books/{book_id}")
def get_book(book_id) -> Dict:
    for book in books:
        if book["id"] == int(book_id):
            return book
    raise HTTPException(status_code=404, detail="Book not found")

@app.delete("/books/{book_id}", status_code=204)
def delete_book(book_id):
    for index, book in enumerate(books):
        if book["id"] == int(book_id):
            books.pop(index)
            return None

@app.put("/books/{book_id}")
def update_book(book_id, updated: BookUpdated) -> Dict:
    for book in books:
        if book["id"] == int(book_id):
            if updated.title is not None:
                book["title"] = updated.title
            if updated.author is not None:
                book["author"] = updated.author
            if updated.year is not None:
                book["year"] = updated.year
            if updated.genre is not None:
                book["genre"] = updated.genre
            if updated.pages is not None:
                book["pages"] = updated.pages
            if updated.price is not None:
                book["price"] = updated.price
            if updated.available is not None:
                book["available"] = updated.available
            return book


@app.get("/books")
def list_books(search=None, genre=None, available=None, sort=None):
    result = books
    if search is not None:
        search_book = search.lower()
        result = [
            book for book in result
            if search_book in book["title"].lower()
            or search_book in book["author"].lower()
        ]
    
    if genre is not None:
        result = [book_sorting for book_sorting in result if book_sorting["genre"] == genre]

    
    if available is not None:
        result = [book_sorting for book_sorting in result if book_sorting["available"] == available]


    if sort is not None:
        if sort not in ["id", "title", "author", "year", "genre", "available"]:
            raise HTTPException (status_code=400, detail="Invalid sort field") 
        result = sorted(result, key=lambda book_sorting: book_sorting [sort])

    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True)
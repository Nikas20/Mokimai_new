# books = [
#     {
#         "id": 1,
#         "title": "Sample Book Title",
#         "author": "John Doe",
#         "year": 2023,
#         "genre": "Fiction",
#         "pages": 320,
#         "price": 19.99,
#         "available": True
#     },
#     {
#         "id": 2,
#         "title": "The Hidden Path",
#         "author": "Jane Smith",
#         "year": 2021,
#         "genre": "Mystery",
#         "pages": 280,
#         "price": 14.99,
#         "available": True
#     },
#     {
#         "id": 3,
#         "title": "Adventures in Coding",
#         "author": "Alice Johnson",
#         "year": 2022,
#         "genre": "Technology",
#         "pages": 450,
#         "price": 29.99,
#         "available": False
#     },
#     {
#         "id": 4,
#         "title": "Gardening 101",
#         "author": "Bob Green",
#         "year": 2020,
#         "genre": "Non-Fiction",
#         "pages": 200,
#         "price": 12.99,
#         "available": True
#     },
#     {
#         "id": 5,
#         "title": "Space Odyssey",
#         "author": "Clara Moon",
#         "year": 2019,
#         "genre": "Science Fiction",
#         "pages": 380,
#         "price": 24.99,
#         "available": False
#     }
# ]

# next_id = 1


# class BookCreate(BaseModel):
#     title: str
#     author: str
#     year: int
#     genre: str
#     pages: int
#     price: float
#     available: bool = True

# class BookUpdated(BaseModel):
#     title: str | None = None
#     author: str | None = None
#     year: int | None = None
#     genre: str | None = None
#     pages: int | None = None
#     price: float | None = None
#     available: bool | None = None

# app = FastAPI()


# @app.post("/books")
# def create_book(book: BookCreate):
#     global next_id

#     new_book = {
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
#     next_id += 1

#     return new_book

# @app.get("/books/{book_id}")
# def get_book(book_id):
#     for book in books:
#         if book["id"] == int(book_id):
#             return book
#     raise HTTPException()

# @app.delete("/books/{book_id}", status_code=204)
# def get_book(book_id):
#     for index, book in enumerate(books):
#         if book["id"] == int(book_id):
#             books.pop(index)
#             return None

# @app.put("/books/{book_id}")
# def update_book(book_id, updated: BookUpdated):
#     for book in books:
#         if book["id"] == int(book_id):
#             if updated.title is not None:
#                 book["title"] = updated.title
#             if updated.author is not None:
#                 book["author"] = updated.author
#             if updated.year is not None:
#                 book["year"] = updated.year
#             if updated.genre is not None:
#                 book["genre"] = updated.genre
#             if updated.pages is not None:
#                 book["pages"] = updated.pages
#             if updated.price is not None:
#                 book["price"] = updated.price
#             if updated.available is not None:
#                 book["available"] = updated.available
#             return book


# @app.get("/books")
# def list_books(search=None, genre=None, available=None, sort=None):
#     result = books
#     if search is not None:
#         search_book = search.lower()
#         result = [
#             book for book in result
#             if search_book in book["title"].lower()
#             or search_book in book["author"].lower()
#         ]

#     if genre is not None:
#         result = [book_sorting for book_sorting in result if book_sorting["genre"] == genre]


#     if available is not None:
#         result = [book_sorting for book_sorting in result if book_sorting["available"] == available]


#     if sort is not None:
#         if sort not in ["id", "title", "author", "year", "genre", "available"]:
#             raise HTTPException (status_code=400, detail="Invalid sort field")
#         result = sorted(result, key=lambda book_sorting: book_sorting [sort])

#     return result

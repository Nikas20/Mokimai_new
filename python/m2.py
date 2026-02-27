# users = [
#     {"id": 1, "nikname": "Tom", "age": 24, "password": "2424"},
#     {"id": 2, "nikname": "Bob", "age": 21, "password": "2424"},
#     {"id": 3, "nikname": "Wow", "age": 44, "password": "2424"},
# ]

# next_id = len(users) + 1


# class UserCreate(BaseModel):
#     nikname: str
#     age: int
#     password: str


# class UserUpdated(BaseModel):
#     nikname: str | None = None
#     age: int | None = None
#     password: str | None = None


# app = FastAPI()


# @app.post("/")
# def create_user(user: UserCreate):
#     global next_id

#     new_user = {
#         "id": next_id,
#         "nikname": user.nikname,
#         "age": user.age,
#         "password": user.password,
#     }

#     users.append(new_user)
#     next_id += 1

#     return new_user

# @app.delete("/{user_id}", status_code=204)
# def delete_user(user_id):
#     for index, user in enumerate(users):
#         if user["id"] == int(user_id):
#             users.pop(index)
#             return None
        
# @app.put("/{user_id}")
# def update_book(book_id, updated: UserUpdated):
#     for user in users:
#         if user["id"] == int(book_id):
#             if updated.nikname is not None:
#                 user["nikname"] = updated.nikname
#             if updated.age is not None:
#                 user["age"] = updated.age
#             if updated.password is not None:
#                 user["password"] = updated.password
 
#             return user

# @app.get("/{user_id}")
# def get_user(user_id):
#     for user in users:
#         if user["id"] == int(user_id):
#            return user

# @app.get("/")
# def list_user(search = None, nikname = None):
#     result = users

#     if search is not None:
#         search_user = search.lower()
#         result = [
#             user for user in result
#             if search_user in user["title"].lower()]
        
#     if nikname is not None:
#         result = [user_sorting for user_sorting in result if user_sorting["nikname"] == nikname]

#     if sort is not None:
#         if sort not in ["id", "title", "author", "year", "genre", "available"]:
#             raise HTTPException (status_code=400, detail="Invalid sort field")
#         result = sorted(result, key=lambda user_sorting: user_sorting [sort])
        
#     return result
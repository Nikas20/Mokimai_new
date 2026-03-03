    
# async def main():
#     # 1) create async session
#     async with AsyncSessionLocal() as db:
#         # 2) start transaction
#         async with db.begin():
#             # 3) create ORM object
#             book = Book(
#                 title="Clean Code",
#                 author="Robert C. Martin",
#                 year=2008,
#                 genre="Programming",
#                 pages=464,
#                 price=39.99,
#                 in_stock=True,
#             )
#             # 4) stage object for insertion
#             db.add(book)
        
#         # 5) transaction committed automatically after db.begin() block
#         print("Inserted book with id:", book.id)
        
#         # 6) execute query
#         result = await db.execute(select(Book))
        
#         # 7) extract ORM objects
#         books = result.scalars().all()
#         print("Books in DB:", [(book.author) for book in books])



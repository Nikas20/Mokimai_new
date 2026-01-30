# # count = 0

# # while count < 5:
# #     count += 1
# #     print(count)

# books = [
#     {
#         "id": "B001",
#         "title": "The Hobbit",
#         "author": "J R R Tolkien",
#         "category": "Fantasy",
#         "available": 3,
#         "total": 5
#     },
#     {
#         "id": "B002",
#         "title": "Clean Code",
#         "author": "Robert C Martin",
#         "category": "Programming",
#         "available": 0,
#         "total": 2
#     },
#     {
#         "id": "B003",
#         "title": "The Alchemist",
#         "author": "Paulo Coelho",
#         "category": "Fiction",
#         "available": 4,
#         "total": 4
#     },
#     {
#         "id": "B004",
#         "title": "Dune",
#         "author": "Frank Herbert",
#         "category": "Sci Fi",
#         "available": 2,
#         "total": 3
#     },
#     {
#         "id": "B005",
#         "title": "1984",
#         "author": "George Orwell",
#         "category": "Dystopian",
#         "available": 5,
#         "total": 5
#     }
# ]


# print(f"{'ID':<6}{'Title':<20}{'Author':<20}{'Category':<13}{'Available':<12}{'Total':<6}")
# print("-" * 75)

# # for book in books:
# #     print(
# #         f"{book['id']:<6}"
# #         f"{book['title']:<20}"
# #         f"{book['author']:<20}"
# #         f"{book['category']:<13}"
# #         f"{book['available']:<12}"
# #         f"{book['total']:<6}"
# #     )

# # TODO (NEW in 1.2): wrap the program in a while loop so it keeps running
# # TODO (NEW in 1.2): print a menu with one option:
# # 1. Show all books
# # TODO (NEW in 1.2): ask the user to choose an option
# # TODO (NEW in 1.2): if the option is 1, show the book list
# def show_all(books):
#     i = 0
#     while True:
#      if i >= len(books):
#       break
#      else:
#         print(
#         f"{books[i]['id']:<6}"
#         f"{books[i]['title']:<20}"
#         f"{books[i]['author']:<20}"
#         f"{books[i]['category']:<13}"
#         f"{books[i]['available']:<12}"
#         f"{books[i]['total']:<6}"
#     )
#         i = i + 1

# print("Menu")
# option = int(input("Show All (1): "))

# if option == 1:
#   show_all(books)
# else:
#   print("Not have anothe options")




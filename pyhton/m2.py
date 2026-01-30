# users = [
#     {"name": "Alice", "role": "admin"},
#     {"name": "Bob", "role": "editor"},
#     {"name": "Charlie", "role": "viewer"}
# ]

# def find_admin(users):
#     for user in users:
#         if (user["role"] == "admin"):
#             return user
#         else:
#             return None
# print(find_admin(users))



# records = [
#     {"name": "Alice", "email":"alice@example.com"},
#     {"name": "Tom", "email":""},
# #     {"name": "Ben", "email":"ben@example.com"}
# # ]

# # for record in records:
# #     if not record["email"]:
# #         continue
# #     print(record["name"])



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

# for book in books:
#     print(
#         f"{book['id']:<6}"
#         f"{book['title']:<20}"
#         f"{book['author']:<20}"
#         f"{book['category']:<13}"
#         f"{book['available']:<12}"
#         f"{book['total']:<6}"
#     )

# TODO (NEW in 1.2): wrap the program in a while loop so it keeps running
# TODO (NEW in 1.2): print a menu with options:
# 1. Show all books
# 2. Exit
# TODO (NEW in 1.2): ask the user to choose an option
# TODO (NEW in 1.2): if option is 1, show the book list
# # TODO (NEW in 1.2): if option is 2, exit the loop

# while True:
#     print("Menu")
#     print("1.Show All books")

#     choise = int(input("Chose an option: "))

#     if choise == 1:
#         print("\n")
#         print(f"{'ID':<6}{'Title':<20}{'Author':<20}{'Category':<13}{'Available':<12}{'Total':<6}")
#         print("-" * 75)

#         for book in books:
#                     print(
#                         f"{book['id']:<6}"
#                         f"{book['title']:<20}"
#                         f"{book['author']:<20}"
#                         f"{book['category']:<13}"
#                         f"{book['available']:<12}"
#                         f"{book['total']:<6}"
#                     )

#     elif choise == 2:
#         break



books = [
    {
        "id": "B001",
        "title": "The Hobbit",
        "author": "J R R Tolkien",
        "category": "Fantasy",
        "available": 3,
        "total": 5
    },
    {
        "id": "B002",
        "title": "Clean Code",
        "author": "Robert C Martin",
        "category": "Programming",
        "available": 0,
        "total": 2
    },
    {
        "id": "B003",
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "category": "Fiction",
        "available": 4,
        "total": 4
    },
    {
        "id": "B004",
        "title": "Dune",
        "author": "Frank Herbert",
        "category": "Sci Fi",
        "available": 2,
        "total": 3
    },
    {
        "id": "B005",
        "title": "1984",
        "author": "George Orwell",
        "category": "Dystopian",
        "available": 5,
        "total": 5
    }
]

while True:
    print("\nLibrary Menu")
    print("1. Show all books")
    print("2. Exit\n")

    choice = int(input("Choose an option: "))

    if choice == 1:
        print()
        print(f"{'ID':<6}{'Title':<20}{'Author':<20}{'Category':<13}{'Available':<12}{'Total':<6}")
        print("-" * 75)

        for book in books:
            print(
                f"{book['id']:<6}"
                f"{book['title']:<20}"
                f"{book['author']:<20}"
                f"{book['category']:<13}"
                f"{book['available']:<12}"
                f"{book['total']:<6}"
            )
    
    elif choice == 2:
        # TODO: print table title ("Available Books")
        print("Available Books")
        # TODO: print table header
        # TODO: print a separator line under the header
        print()
        print(f"{'ID':<6}{'Title':<20}{'Author':<20}{'Category':<13}{'Available':<12}{'Total':<6}")
        print("-" * 75)
        # TODO: use a for loop to go through all books
            # TODO: if available copies are 0
                # TODO: skip this book using continue
        for book in books:
            if book["available"] == 0:
                continue
            print(
                f"{book['id']:<6}"
                f"{book['title']:<20}"
                f"{book['author']:<20}"
                f"{book['category']:<13}"
                f"{book['available']:<12}"
                f"{book['total']:<6}"
            )
            # TODO: print book data only if available copies are greater than 0
        
        # TODO: ensure output formatting is readable and aligned
        pass

    elif choice == 3:
        print("Program ended")
        break

    else:
        print("Error: Invalid menu option. Choose between 1 or 2")
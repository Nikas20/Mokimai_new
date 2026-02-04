# # pipline = [
# #     {"step":"load"},
# #     {"step": "process"}
# # ]

# # pipline.insert(1, {"step":"validate"})
# # print(pipline)



# # monday_logs = [
# #     {"event": "login"},
# #     {"event": "view_page"}
# # ]
# # tuesday_logs = [
# #     {"event": "download"},
# #     {"event": "logout"}
# # ]
# # monday_logs.extend(tuesday_logs)
# # print(monday_logs)

# # Library Management System
# # This program will be expanded step by step

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

# def print_section(section_title, *lines):
#     print(f"\n{section_title}")
#     for line in lines:
#         print(line)

# def print_kv(**data):
#     print(*[f"{key}={data[key]}" for key in data], sep=" | ")

# def print_table_header():
#     print(
#         f"{'ID':<6}"
#         f"{'Title':<20}"
#         f"{'Author':<20}"
#         f"{'Category':<13}"
#         f"{'Available':<12}"
#         f"{'Total':<6}"
#     )
#     print("-" * 75)

# def print_book_row(book):
#     print(
#         f"{book['id']:<6}"
#         f"{book['title']:<20}"
#         f"{book['author']:<20}"
#         f"{book['category']:<13}"
#         f"{book['available']:<12}"
#         f"{book['total']:<6}"
#     )

# def show_all_books(book_list):
#     print()
#     print_table_header()
#     for book in book_list:
#         print_book_row(book)

# def show_available_books(book_list):
#     print()
#     print_table_header()
#     for book in book_list:
#         if book["available"] > 0:
#             print_book_row(book)

# def borrow_book(
#     book_list, /, *,
#     success_message="You borrowed:",
#     out_of_stock_message="Sorry, this book is out of stock",
#     not_found_message="Error: Book ID not found"
# ):
#     book_id = input("Enter Book ID to borrow: ")

#     for book in book_list:
#         if book["id"] == book_id:
#             if book["available"] > 0:
#                 book["available"] -= 1
#                 print(f"{success_message} {book['title']}")
#                 print_kv(book_id=book_id, action="borrow", status="success")
#             else:
#                 print(out_of_stock_message)
#                 print_kv(book_id=book_id, action="borrow", status="out_of_stock")
#             return

#     print(not_found_message)
#     print_kv(book_id=book_id, action="borrow", status="not_found")

# def search_books(book_list):
#     print_section(
#         "Search Menu",
#         "1. Search by ID",
#         "2. Search by Title",
#         "3. Search by Author",
#         "4. Search by Category",
#         "5. Search Anywhere"
#     )

#     option = int(input("Choose an option: "))
#     search_text = input("Enter search text: ")

#     if option == 1:
#         fields = ["id"]
#     elif option == 2:
#         fields = ["title"]
#     elif option == 3:
#         fields = ["author"]
#     elif option == 4:
#         fields = ["category"]
#     elif option == 5:
#         fields = ["id", "title", "author", "category"]
#     else:
#         print("Invalid option.")
#         return

#     found = False
#     print("/n")
#     print_table_header()

#     for book in book_list:
#         for field in fields:
#             if search_text in book[field]:
#                 print_book_row(book)
#                 found = True
#                 break

#     if not found:
#         print("No matching books found.")

# def add_book(book_list):
#     book_id = input("Enter book ID: ")
#     title = input("Enter title: ")
#     author = input("Enter author: ")
#     category = input("Enter category: ")
#     total = int(input("Enter total copies: "))
#     available = int(input("Enter available copies: "))

#     new_book = {
#         "id": book_id,
#         "title": title,
#         "author": author,
#         "category": category,
#         "available": available,
#         "total": total
#     }

#     book_list.append(new_book)
#     print("Book added successfully")

# def bulk_add_books(book_list):

#     new_books = [
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
#     book_list.extend(new_books)
#     print("Books added successfully")
#     return book_list

# def print_main_menu(title="\nLibrary Menu", *, show_exit=True):
#     print(title)
#     print("\nLibrary Menu")
#     print("1. Show all books")
#     print("2. Show available books")
#     print("3. Borrow book")
#     print("4. Search books")
#     print("5. Add book")
#     print("6. Bulk add books")
#     if show_exit:
#         print("6. Exit\n")


# running = True

# while running:
#     print_main_menu()
#     choice = int(input("Choose an option: "))

#     match choice:
#         case 1:
#             show_all_books(books)
#         case 2:
#             show_available_books(books)
#         case 3:
#             borrow_book(books)
#         case 4:
#             search_books(books)
#         case 5:
#             add_book(books)
#         case 6:
#             bulk_add_books(books)
#             pass
#         case 7:
#             print("Program ended.")
#             running = False
#         case _:
#             print("Invalid menu choice.")



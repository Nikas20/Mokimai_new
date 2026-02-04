# # # dataset = [
# # #     {"id": 1, "valid": True},
# # #     {"id": 2, "valid": False},
# # #     {"id": 3, "valid": True},
# # #     {"id": 4, "valid": False},
# # # ]
# # # 
# # # dataset.remove({"id": 3, "valid": True})
# # # print(dataset)

# # # dataset = [
# # #     {"task_name": "download_file"},
# # #     {"task_name": "process_data"},
# # #     {"task_name": "send_email"}
# # # ]

# # # # while dataset:
# # # #     task = dataset.pop(0)
# # # #     print(task["task_name"])

# # # last_event = dataset.pop(0)
# # # print(last_event)
# # # print(dataset)

# # event_log = []

# # event_log.append({"event": "app_started"})
# # event_log.append({"event": "user_logged_in"})

# # event_log.clear()

# # event_log.append({"event": "user_updated_profile"})
# # event_log.append({"event": "user_logged_in"})

# # print(event_log)

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

# def print_table_header(
#     id_width=6,
#     title_width=20,
#     author_width=20,
#     category_width=13,
#     available_width=12,
#     total_width=6
# ):
#     print(
#         f"{'ID':<{id_width}}"
#         f"{'Title':<{title_width}}"
#         f"{'Author':<{author_width}}"
#         f"{'Category':<{category_width}}"
#         f"{'Available':<{available_width}}"
#         f"{'Total':<{total_width}}"
#     )
#     print("-" * 75)

# def print_book_row(
#     book, /, *,
#     id_width=6,
#     title_width=20,
#     author_width=20,
#     category_width=13,
#     available_width=12,
#     total_width=6
# ):
#     print(
#         f"{book['id']:<{id_width}}"
#         f"{book['title']:<{title_width}}"
#         f"{book['author']:<{author_width}}"
#         f"{book['category']:<{category_width}}"
#         f"{book['available']:<{available_width}}"
#         f"{book['total']:<{total_width}}"
#     )

# def show_all_books(book_list, /, **formatting):
#     print("\n")
#     print_table_header(**formatting)
#     for book in book_list:
#         print_book_row(book, **formatting)

# def show_available_books(book_list, /, **formatting):
#     print()
#     print_table_header(**formatting)
#     for book in book_list:
#         if book["available"] > 0:
#             print_book_row(book, **formatting)

# def borrow_book(
#     book_list, /, *,
#     success_message="You borrowed:",
#     out_of_stock_message="Sorry, this book is out of stock.",
#     not_found_message="Error: Book ID not found."
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

# def search_books(book_list, /, *search_fields, **formatting):
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
#         fields = list(search_fields) if search_fields else ["id", "title", "author", "category"]
#     else:
#         print("Invalid option.")
#         return

#     found = False
#     print()
#     print_table_header(**formatting)

#     for book in book_list:
#         match_found = False
#         for field in fields:
#             if search_text in book[field]:
#                 match_found = True
#                 break

#         if match_found:
#             found = True
#             print_book_row(book, **formatting)

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
#         {
#             "id": "B006",
#             "title": "Harry Potter",
#             "author": "J K Rowling",
#             "category": "Fantasy",
#             "available": 6,
#             "total": 6
#         },
#         {
#             "id": "B007",
#             "title": "The Pragmatic Programmer",
#             "author": "Andrew Hunt",
#             "category": "Programming",
#             "available": 3,
#             "total": 3
#         },
#         {
#             "id": "B008",
#             "title": "The Little Prince",
#             "author": "Antoine de Saint-Exupéry",
#             "category": "Fiction",
#             "available": 4,
#             "total": 4
#         }
#     ]

#     book_list.extend(new_books)
#     print("Books added successfully")


# def remove_book(book_list):
#     # TODO: ask the user to enter a Book ID
#     book_id = input("Write book id: ")
#     # TODO: loop through the books list
#     for book in book_list:
#         # TODO: if the Book ID matches
#         if book["id"] == book_id:
#             # TODO: remove the book using remove()
#             book_list.remove(book)
#             # TODO: print "Book removed successfully"
#             print("Book removed successfully")
#             # TODO: stop searching
#             return
#     print("Book not found")
#     # TODO: if no book was found, print "Book not found"

# def print_main_menu(title="\nLibrary Menu", *, show_exit=True):
#     print(title)
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

#     # match choice:
#     #     case 1:
#     # show_all_books(books)
#     #     case 2:
#     #         show_available_books(books)
#     #     case 3:
#     #         borrow_book(books)
#     #     case 4:
#     #         search_books(books)
#     #     case 5:
#     add_book(books)
#     show_all_books(books)
#     remove_book(books)
#     show_all_books(books)
#     #     case 6:
#     #         # TODO: call bulk_add_books(books)
#     #         pass
#     #     case 7:
#     #         print("Program ended.")
#     #         running = False
#     #     case _:
#     #         print("Invalid menu choice.")

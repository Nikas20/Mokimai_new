# Library Management System
# This program will be expanded step by step

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


def print_table_header():
    print(f"{'ID':<6}{'Title':<20}{'Author':<20}{'Category':<13}{'Available':<12}{'Total':<6}")
    print("-" * 75)


def print_book_row(book):
    print(
        f"{book['id']:<6}"
        f"{book['title']:<20}"
        f"{book['author']:<20}"
        f"{book['category']:<13}"
        f"{book['available']:<12}"
        f"{book['total']:<6}"
    )


def show_all_books(book_list):
    print()
    print_table_header()

    for book in book_list:
        print_book_row(book)


def show_available_books(book_list):
    print()
    print_table_header()

    for book in book_list:
        if book["available"] == 0:
            continue
        print_book_row(book)


def borrow_book(book_list):
    book_id = input("Enter Book ID to borrow: ")

    found = False

    for book in book_list:
        if book["id"] == book_id:
            found = True

            if book["available"] > 0:
                book["available"] = book["available"] - 1
                print("Borrow successful.")
            else:
                print("Out of stock. No copies available.")

            break

    if found == False:
        print("Book not found.")

def search_books(book_list):
    print("\nSearch Menu")
    print("1. Search by ID")
    print("2. Search by Title")
    print("3. Search by Author")
    print("4. Search by Category")
    print("5. Search Anywhere (ID, Title, Author, Category)\n")

    option = input("Choose search option: ")
    query = input("Enter search text: ")

    if option == "1":
        fields = ["id"]
    elif option == "2":
        fields = ["title"]
    elif option == "3":
        fields = ["author"]
    elif option == "4":
        fields = ["category"]
    elif option == "5":
        fields = ["id", "title", "author", "category"]
    else:
        print("Error: Invalid search option.")
        return

    found_any = False

    print("\n")
    print_table_header()

    for book in book_list:
        matched = False

        for field in fields:
            if query in book[field]:
                matched = True
                break

        if matched == True:
            found_any = True
            print_book_row(book)

    if found_any == False:
        print("No matching books found.")

def print_main_menu():
    # TODO: print a blank line before the menu
    # TODO: print "Library Menu" title
    # TODO: print option 1: Show all books
    # TODO: print option 2: Show available books
    # TODO: print option 3: Borrow book
    # TODO: print option 4: Search books
    # TODO: print option 5: Exit
    pass

running = True

while running:
    # TODO: call the function that prints the main menu
    choice = input("Choose an option: ")

    # TODO: replace the if/elif menu logic with match-case
    # TODO: handle options 1-5 using match-case
    # TODO: use case _ for invalid input

    match choice:
        case "1":
            # TODO: call show_all_books(books)
            pass
        case "2":
            # TODO: call show_available_books(books)
            pass
        case "3":
            # TODO: call borrow_book(books)
            pass
        case "4":
            # TODO: call search_books(books)
            pass
        case "5":
            # TODO: print "Program ended"
            # TODO: set running = False
            pass
        case _:
            # TODO: print error message for invalid menu option
            pass

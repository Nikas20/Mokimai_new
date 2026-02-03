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

def print_kv(**data):
    print([f"{key}={data[key]}" for key in data], sep=" | ")

def print_section(title, *lines):
    print(f"\n{title}")
    for line in lines:
        print(line)


def print_table_header(
        id_width=6, 
        title_width=20, 
        author_width=20, 
        category_width=13, 
        available_width=12, 
        total_width=6
    ):
    print(f"{'ID':<{id_width}}{'Title':<{title_width}}{'Author':<{author_width}}{'Category':<{category_width}}{'Available':<{available_width}}{'Total':<{total_width}}")
    print("-" * 75)


def print_book_row(
        book, 
        /, 
        *,
        id_width=6, 
        title_width=20, 
        author_width=20, 
        category_width=13, 
        available_width=12, 
        total_width=6
        ):
    print(
        f"{book['id']:<{id_width}}"
        f"{book['title']:<{title_width}}"
        f"{book['author']:<{author_width}}"
        f"{book['category']:<{category_width}}"
        f"{book['available']:<{available_width}}"
        f"{book['total']:<{total_width}}"
    )


def show_all_books(book_list, /, **formatting):
    print("\n")
    print_table_header(**formatting)

    for book in book_list:
        print_book_row(book, **formatting)


def show_available_books(book_list, /, **formatting):
    print("\n")
    print_table_header(**formatting)

    for book in book_list:
        if book["available"] > 0:
            print_book_row(book, **formatting)


def borrow_book(
        book_list,
        /, 
        *,
        success_message = "Borrow successful",
        out_of_stock_message = "Out of stock. No copies available",
        not_found_message = "Book not found"
    ):
    book_id = input("Enter Book ID to borrow: ")

    for book in book_list:
        if book["id"] == book_id:

            if book["available"] > 0:
                book["available"] = book["available"] - 1
                print(f"{success_message} {book['title']}")
                print_kv(book_id=book_id, action="borrow", status="success")
            else:
                print(out_of_stock_message)
                print_kv(book_id=book_id, action="borrow", status="out_of_stock")
            return

    print(not_found_message)
    print_kv(book_id=book_id, action="borrow", status="not_found")

def search_books(book_list, /, *search_fields, **formatting):
    print_section(
        "Search Menu"
        "1. Search by ID"
        "2. Search by Title"
        "3. Search by Author"
        "4. Search by Category"
        "5. Search Anywhere"
    )

    option = input("Choose search option: ")
    search_text = input("Enter search text: ")

    if option == "1":
        fields = ["id"]
    elif option == "2":
        fields = ["title"]
    elif option == "3":
        fields = ["author"]
    elif option == "4":
        fields = ["category"]
    elif option == "5":
        fields = list(search_fields) if search_fields else ["id", "title", "author", "category"]
    else:
        print("Error: Invalid search option.")
        return

    found = False
    print("\n")
    print_table_header(**formatting)

    for book in book_list:
        match_found = False
        for field in fields:
            if search_text in book[field]:
                match_found = True
                break

        if match_found:
            found = True
            print_book_row(book, **formatting)

    if not found:
        print("No matching books found")

def print_main_menu(title="\nLibrary Menu", *, show_exit=True):
    print(title)
    print("Library Menu")
    print("1: Show all books")
    print("2: Show available books")
    print("3: Borrow book")
    print("4: Search books")
    print("5: Exit")
    if show_exit:
        print("5. Exit\n")

running = True

while running:
    print_main_menu()
    choice = int(input("Choose an option: "))

    match choice:
        case 1:
            show_all_books(books)
        case 2:
            show_available_books(books)
        case 3:
            borrow_book(books)
        case 4:
            search_books(books)
        case 5:
            print("Program ended")
            running = False
        case _:
            print("Error. Please try again.")
 
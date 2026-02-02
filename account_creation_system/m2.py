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
                book["available"] -= 1
                print(f"You borrowed: {book['title']}")
            else:
                print("Sorry, this book is out of stock")
            break

    if found == False:
        print("Error: Book ID not found")

def search_books(book_list):
    # TODO: print search menu
    print("1. Search by ID")
    print("2. Search by Title")
    print("3. Search by Author")
    print("4. Search by Category")
    print("5. Search Anywhere")

    # TODO: ask user to choose search option
    choose = int(input("Choose search option:"))
    # TODO: ask user to enter search text
    text = input("Enter search text: ")
    # TODO: based on option, define list of fields to search
    # Example:
    # fields = ["id"] or ["title"] or ["author"] or ["category"]
    # or ["id", "title", "author", "category"]
    fields_to_search = []
    if choose == 1:
        fields_to_search = ["id"]
    elif choose == 2:
        fields_to_search = ["title"]
    elif choose == 3:
        fields_to_search = ["author"]
    elif choose == 4:
        fields_to_search = ["category"]
    elif choose == 5:
        fields_to_search = ["id", "title", "author", "category"]
    else:
        print("Error: Invalid search option")
        return
    # TODO: create found_any = False
    found_any = False
    # TODO: print table header

    # TODO: loop through all books
        # TODO: loop through selected fields (nested loop)
            # TODO: if search text matches field value
                # TODO: print book row
                # TODO: set found_any = True
                # TODO: break
    pass


while True:
    print("\nLibrary Menu")
    print("1. Show all books")
    print("2. Show available books")
    print("3. Borrow book")
    print("4. Exit\n")

    choice = int(input("Choose an option: "))

    if choice == 1:
        show_all_books(books)

    elif choice == 2:
        show_available_books(books)

    elif choice == 3:
        borrow_book(books)

    elif choice == 4:
        search_books(books)
        pass

    elif choice == 5:
        print("Program ended")
        break

    else:
        print("Error: Invalid menu option")

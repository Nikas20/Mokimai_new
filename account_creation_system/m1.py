# # # This program registers users
# # # It will be expanded step by step

# # def get_user_input():
# #     print("Welcome to the User Registration System v2")
# #     print("Follow the steps below to create your account.")

# #     username = input("Enter username: ")
# #     email = input("Enter email: ")
# #     password = input("Enter password: ")
# #     age = int(input("Enter your age: "))
# #     terms_input = input("Do you accept the terms? (yes/no): ")

# #     return username, email, password, age, terms_input


# # def validate_age(age):
# #     return age >= 18


# # def validate_password(password):
# #     return len(password) >= 8


# # def validate_terms(terms_input):
# #     return terms_input == "yes"

# # def register_user():
# #     username, email, password, age, terms_input = get_user_input()

# #     is_adult = validate_age(age)
# #     is_password_valid = validate_password(password)
# #     has_accepted_terms = validate_terms(terms_input)

# #     if not is_adult:
# #         print("Error: You must be at least 18 years old.")
# #         return None
# #     elif not is_password_valid:
# #         print("Error: Password must be at least 8 characters long.")
# #         return None
# #     elif not has_accepted_terms:
# #         print("Error: You must accept the terms and conditions.")
# #         return None
# #     else:
# #         print("Registration successful")
# #         return {
# #             "username": username,
# #             "email": email,
# #             "age": age
# #         }
# # def show_users(users):
# #     # TODO: if there are no users, print "No users registered."
# #     # TODO: otherwise, print all usernames (one per line)
# #     if len(users) == 0:
# #         print("No users registered.")
# #     else:
# #         for user in users:
# #             print(f"{user["username"]}")


# # def show_statistics(users):
# #     # TODO: if there are no users, print "No users registered."
# #     if len(users) == 0:
# #         print("No users registered.")
# #     # TODO: otherwise, print the number of successful registrations using len(users)
# #     else:
# #         print(f"Successful registrations: {len(users)}")

# # users = []
# # running = True

# # print("=== MENU ===")

# # while running:
# #     choose = int(input("Choose an option (1-4): "))

# #     match choose:
        
# #         case 1:
# #             user = register_user()
# #             if user is not None:
# #                 users.append(user)
# #         case 2:
# #             show_users(users)
# #         case 3:
# #             show_statistics(users)
# #         case 4:
# #             break
    





# # # TODO: create a boolean variable to control the program loop (running = True)

# # # TODO: start a while loop that runs while the program is active

# #     # TODO: print menu title ("=== MENU ===")

# #     # TODO: print menu options
# #     # 1. Register new user
# #     # 2. Show registered users
# #     # 3. Show final statistics
# #     # 4. Exit

# #     # TODO: ask the user to choose a menu option using input()

# #     # TODO: use match-case to handle menu choices

# #         # TODO: case "1"
# #             # TODO: call register_user()
# #             # TODO: if user is not None, add user to users list using concatenation

# #         # TODO: case "2"
# #             # TODO: call show_users(users)

# #         # TODO: case "3"
# #             # TODO: call show_statistics(users)

# #         # TODO: case "4"
# #             # TODO: print exit message
# #             # TODO: stop the while loop by setting running = False

# #         # TODO: case _
# #             # TODO: print invalid option message

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

# def print_table_header():
#     print(f"{'ID':<6}{'Title':<20}{'Author':<20}{'Category':<13}{'Available':<12}{'Total':<6}")
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
#     print("\n")
#     print_table_header()

#     for book in book_list:
#         print_book_row(book)

# def show_available_books(book_list):
#     print()
#     print_table_header()

#     for book in book_list:
#         if book["available"] == 0:
#             continue
#         print_book_row(book)

# def borrow_book(book_list):
#     # TODO: ask the user to enter a Book ID
#     book_id = int(input("Enter Book ID: "))
#     found = False

#     for book in book_list:
#         if book["id"] == book_id:
#             found = True

#             if book["available"] > 0:
#                 book["available"] -= 1
#                 print(f"You borrowed: {book['title']}")
#             else:
#                 print("Book is out of stock")
#             break
#     # TODO: create a variable t track if the book was found

#     # TODO: loop through the books using a for loop

#         # TODO: if the book ID matches

#             # TODO: if available copies are greater than 0
#                 # TODO: decrease available copies by 1
#                 # TODO: print success message

#             # TODO: else
#                 # TODO: print out-of-stock message

#             # TODO: stop searching using break

#     # TODO: if the book was not found, print "Book not found."

#     pass

# while True:
#     print("\nLibrary Menu")
#     print("1. Show all books")
#     print("2. Show available books")
#     print("3. Exit\n")

#     choice = int(input("Choose an option: "))

#     if choice == 1:
#         show_all_books(books)
#     elif choice == 2:
#         show_available_books(books)
#     elif choice == 3:
#         # TODO: call borrow_book(books)
#         pass
#     elif choice == 4:
#         print("Program ended")
#         break
#     else:
#         print("Error: Invalid menu option.")



# This program registers users
# It will be expanded step by step

def get_user_input():
    print("Welcome to the User Registration System v2")
    print("Follow the steps below to create your account.")

    username = input("Enter username: ")
    email = input("Enter email: ")
    password = input("Enter password: ")
    age = int(input("Enter your age: "))
    terms_input = input("Do you accept the terms? (yes/no): ")

    return username, email, password, age, terms_input


def validate_age(age):
    return age >= 18


def validate_password(password):
    return len(password) >= 8


def validate_terms(terms_input):
    return terms_input == "yes"


def register_user():
    username, email, password, age, terms_input = get_user_input()

    is_adult = validate_age(age)
    is_password_valid = validate_password(password)
    has_accepted_terms = validate_terms(terms_input)

    if not is_adult:
        print("Error: You must be at least 18 years old.")
        return None
    elif not is_password_valid:
        print("Error: Password must be at least 8 characters long.")
        return None
    elif not has_accepted_terms:
        print("Error: You must accept the terms and conditions.")
        return None
    else:
        print("Registration successful")
        return {"username": username, "email": email, "age": age}


def show_users_table(users):

    print("\n=== REGISTERED USERS ===")
    if len(users) == 0:
        print("No users registered.")
    else:
        print(f"{'Username':<15} | {'Email':<25} | {'Age':<5} | {'Status'}")
        print("-" * 55)
        for user in users:
            print(user["username"])


def search_user_by_username(users):
    # TODO: print section title ()
    print("=== SEARCH USER ===")
    # TODO: if there are no users
    if len(users) == 0:
        print("No users registered.")
        return

    search_name = input("Enter username to search: ")

    found = False

    for user in users:
        if user["username"] != search_name:
            continue
        
        print(f"Username: {user['username']}")
        print(f"Email: {user['email']}")
        print(f"Age: {user['age']}")
        found = True
        break

    if not found:
        print("User not found")

    # TODO: ask for username to search

    # TODO: create found = False

    # TODO: loop through users
        # TODO: if username does not match, continue
        # TODO: if username matches
            # TODO: print user details (username, email, age)
            # TODO: set found = True
            # TODO: break

    # TODO: if found is False, print "User not found."

    pass


def show_statistics(users):
    print("\n=== FINAL STATISTICS ===")
    if len(users) == 0:
        print("No users registered.")
    else:
        print("Successful registrations:", len(users))
        
        # TODO: add age statistics:
        youngest = min(ages) 
        oldest = max(ages) 
        average = ages 


users = []
running = True

while running:
    print("\n=== MENU ===")
    print("1. Register new user")
    print("2. Show registered users")
    print("3. Show final statistics")
    print("4. Search user by username")
    print("5. Exit")

    choice = int(input("Choose an option (1-4): "))

    match choice:
        case 1:
            user = register_user()
            if user is not None:
                users = users + [user]
        case 2:
            show_users_table(users)
        case 3:
            show_statistics(users)
        case 4:
            search_user_by_username(users)
        case 5:
            print("Exiting program.")
            running = False
        case _:
            print("Invalid option. Please choose 1-4.")

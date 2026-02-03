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
        return

    print(f"{'Username':<15} {'Email':<25} {'Age':>5} {'Status':>8}")
    print("-" * 55)

    for user in users:
        status = "Adult" if user["age"] >= 18 else "Minor"
        print(f"{user['username']:<15} {user['email']:<25} {user['age']:>5} {status:>8}")


def search_user_by_username(users):
    print("\n=== SEARCH USER ===")

    if len(users) == 0:
        print("No users registered.")
        return

    search_name = input("Enter username to search: ")

    found = False

    for user in users:
        if user["username"] != search_name:
            continue

        print("User found:")
        print(f"Username: {user['username']}")
        print(f"Email: {user['email']}")
        print(f"Age: {user['age']}")
        found = True
        break

    if not found:
        print("User not found.")


def show_statistics(users):
    print("\n=== USER STATISTICS ===")

    if len(users) == 0:
        print("No users registered.")
        return

    ages = [user["age"] for user in users]

    youngest = min(ages)
    oldest = max(ages)
    average = sum(ages) / len(ages)

    print("Successful registrations:", len(users))
    print("Youngest age:", youngest)
    print("Oldest age:", oldest)
    print("Average age:", round(average, 1))

def show_usernames(users):
    print("=== USERNAMES ===")
    if len(users) == 0:
        print("No users registered.")
        return

    usernames = [user["username"] for user in users]

    print(usernames)



users = []
running = True

while running:
    print("\n=== MENU ===")
    print("1. Register new user")
    print("2. Show users table")
    print("3. Search user by username")
    print("4. Show statistics")
    print("5. Show usernames")
    print("6. Exit")

    choice = int(input("Choose an option (1-6): "))

    match choice:
        case 1:
            user = register_user()
            if user is not None:
                users = users + [user]
        case 2:
            show_users_table(users)
        case 3:
            search_user_by_username(users)
        case 4:
            show_statistics(users)
        case 5:
            show_usernames(users)
        case 6:
            print("Exiting program.")
            running = False
        case _:
            print("Invalid option. Please choose 1-6.")
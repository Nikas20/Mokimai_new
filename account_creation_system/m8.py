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
    normalized = terms_input.strip().lower()
    return normalized.startswith("y")


def extract_domain(email):
    if email.count("@") != 1:
        return None

    parts = email.split("@")
    domain = parts[1]
    return domain


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
    print("\n=== USERNAMES ===")

    if len(users) == 0:
        print("No users registered.")
        return

    usernames = [user["username"] for user in users]

    for name in usernames:
        print(name)


def show_domain_report(users):
    print("\n=== EMAIL DOMAIN REPORT ===")

    if len(users) == 0:
        print("No users registered.")
        return

    domain_counts = {}

    for user in users:
        domain = extract_domain(user["email"])

        if domain is None:
            continue

        if domain in domain_counts:
            domain_counts[domain] = domain_counts[domain] + 1
        else:
            domain_counts[domain] = 1

    for domain in domain_counts:
        print(domain + ":", domain_counts[domain])


users = []
running = True

# TODO: create a dictionary that maps menu numbers to functions

actions = {
    1: register_user,
    2: show_users_table,
    3: search_user_by_username,
    4: show_statistics,
    5: show_usernames,
    6: show_domain_report
}

while running:
    print("\n=== MENU ===")
    print("1. Register new user")
    print("2. Show users table")
    print("3. Search user by username")
    print("4. Show statistics")
    print("5. Show usernames")
    print("6. Show email domain report")
    print("7. Exit")

    choice = int(input("Choose an option (1-6): "))

    if choice == 7:
        print("Goodbye!")
        break

    action = actions.get(choice)

    if action is not True:
        print("invalid option message")

    if choice == "1":
        new_user = register_user()
    
    if new_user is not None:
        users.append(new_user)
        print("Registration successful")


    # TODO: else
        # TODO: call the selected function with users as argument
    else:
        action(users)

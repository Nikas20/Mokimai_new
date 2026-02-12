# This program registers users
# It will be expanded step by step




users = []
running = True
runner = make_runner(users)



while running:
    print("\n=== MENU ===")
    print("1. Register new user")
    print("2. Show users table")
    print("3. Search user by username")
    print("4. Show statistics")
    print("5. Show usernames")
    print("6. Show email domain report")
    print("7. Show adult users")
    print("8. Show user emails")
    print("9. Show users sorted by age")
    print("10. Exit")

    choice = int(input("Choose an option (1-9): "))

    if choice == 10:
        print("Exiting program.")
        running = False
        continue

    action = actions.get(choice)

    if action is None:
        print("Invalid option. Please choose 1-9")
        continue

    runner(action)

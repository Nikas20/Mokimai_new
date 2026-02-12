from core import *
from reports import extract_domain
def show_users_table(users):
    print("\n=== REGISTERED USERS ===")

    if len(users) == 0:
        print("No users registered")
        return

    print(f"{'Username':<15} {'Email':<25} {'Age':>5} {'Status':>8}")
    print("-" * 55)

    for user in users:
        status = "Adult" if is_adult(user) else "Minor"
        print(f"{user['username']:<15} {user['email']:<25} {user['age']:>5} {status:>8}")


def show_statistics(users):
    print("\n=== USER STATISTICS ===")

    if len(users) == 0:
        print("No users registered")
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
        print("No users registered")
        return

    usernames = [user["username"] for user in users]

    for name in usernames:
        print(name)

def show_domain_report(users):
    print("\n=== EMAIL DOMAIN REPORT ===")

    if len(users) == 0:
        print("No users registered")
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

def show_adults(users):
    print("\n=== ADULT USERS ===")

    if len(users) == 0:
        print("No users registered.")
        return

    adults = list(filter(is_adult, users))

    if len(adults) == 0:
        print("No adult users found.")
        return

    show_users_table(adults)

def show_emails(users):
    print("\n=== USER EMAILS ===")

    if len(users) == 0:
        print("No users registered.")
        return

    # map used here
    emails = list(map(lambda user: user["email"], users))

    for email in emails:
        print(email)


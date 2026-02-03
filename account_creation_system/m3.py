# cinema_seats = [
#     ["A1", "A2"],
#     ["B1", "B2"],
#     ["C1", "C2"]
# ]

# for row in cinema_seats:
#     for seat in row:
#         print(seat)

# role_premmision = {
# "admin": ["read", "delete"],
# "view": ["read"]
# }

# for role, permissions in role_premmision.items():
#     for permission in permissions:
#         print(role, "can", permission)

# routes = [("A", 1, "orht")]


# for stop, position in routes:
#         print(stop)

# max_attepts = 3
# retries_per_attept = 2
# for attempts in range(max_attepts):
#     print(attempts + 1)
#     for retry in range(retries_per_attept):
#         print(attempts, retry)



# for _ in range(2):
#     for _ in range(5):
#         print("Hello")



# orders = [
# {"id": "ORD-1001", "status": "shipped"},
# {"id": "ORD-1002", "status": "pending"},
# {"id": "ORD-1003", "status": "shipped"}
# ]

# shipped_order_ids = [
# order["id"] for order in orders if order["status"] == "shipped"
# ]

users = [
{'name': 'Example1', 'active': True, 'role': 'admin', 'last_login': 45},
{'name': 'Example2', 'active': False, 'role': 'editor', 'last_login': 10},
{'name': 'Example3', 'active': True, 'role': 'user', 'last_login': 60}
]

result = []

for user in users:
    if not user["active"]:
        continue
    if user["role"] != "admin":
        continue

    if user["last_login"] <= 30:
        continue

    result = result + [user]
# # # # TODO: store bus stop names in a tuple
# # # stops = (
# # #     "Central Station",
# # #     "University",
# # #     "Shopping Mall",
# # #     "Hospital",
# # #     "Airport"
# # # )

# # # # TODO: store distances (km from start) in a tuple
# # # distances = (
# # #     0.0,
# # #     2.5,
# # #     4.0,
# # #     7.0,
# # #     15.0
# # # )

# # # # TODO: store current buses on the route in a list
# # # buses = []

# # # # TODO: print title ("Bus Route Data")
# # # print("Bus Route Data")
# # # # TODO: print stops label
# # # print("Stops:")
# # # # TODO: print stops tuple
# # # print(stops)

# # # # TODO: print distances label
# # # print("Distances (km from start):")
# # # # TODO: print distances tuple
# # # print(distances)
# # # # TODO: print active buses label
# # # print("Active buses:")
# # # # TODO: print buses list
# # # print(buses)

# # # name = input("Enter your name: ")
# # # print(f"Welcome, {name}\n")

# # # item1_name = "Burger"
# # # item1_price = 8.50

# # # item2_name = "Pizza"
# # # item2_price = 10.00

# # # item3_name = "Cola"
# # # item3_price = 2.50

# # # print(f"{'Item':<20}{'Price':>10}")
# # # print("-" * 27)
# # # print(f"1. {item1_name:<17}{item1_price:>10.2f}")
# # # print(f"2. {item2_name:<17}{item2_price:>10.2f}")
# # # print(f"3. {item3_name:<17}{item3_price:>10.2f}")
# # # print()

# # # choice = int(input("Choose an item (1-3): "))

# # # if choice == 1:
# # #     print(f"You selected: {item1_name} (€{item1_price:.2f})")
# # # elif choice == 2:
# # #     print(f"You selected: {item2_name} (€{item2_price:.2f})")
# # # elif choice == 3:
# # #     print(f"You selected: {item3_name} (€{item3_price:.2f})")
# # # else:
# # #     print("Error: Invalid menu choice.")

# # # Replace individual item variables with a dictionary
# # # Store menu items in the dictionary using item numbers as keys
# # # Access item data using dict[key]
# # #
# # # Structure:
# # menu = [
# #     {"name": "Burger", "price": 8.50},
# #     {"name": "Pizza", "price": 10.00},
# #     {"name": "Cola", "price": 2.50}
# # ]

# # # TODO:
# # # Update the menu printing code to use values from the list of dictionaries

# # name = input("Enter your name: ")
# # print(f"Welcome, {name}\n")

# # print(f"{'Item':<20}{'Price':>10}")
# # print("-" * 27)
# # print(f"1. {menu[0]["name"]:<17}{menu[0]["price"]:>10.2f}")
# # print(f"2. {menu[1]["name"]:<17}{menu[1]["price"]:>10.2f}")
# # print(f"3. {menu[2]["name"]:<17}{menu[2]["price"]:>10.2f}")
# # print()

# # choice = int(input("Choose an item (1-3): "))

# # if choice == 1:
# #     print(f"You selected: {menu[0]["name"]} (€{menu[0]["price"]:.2f})")
# # elif choice == 2:
# #     print(f"You selected: {menu[1]["name"]} (€{menu[1]["price"]:.2f})")
# # elif choice == 3:
# #     print(f"You selected: {menu[2]["name"]} (€{menu[2]["price"]:.2f})")
# # else:
# #     print("Error: Invalid menu choice.")

# # # TODO:
# # # Update the item selection logic to
# # # - retrieve the selected item from the list
# # # - print the item name and price
# # # - print an error message if the choice is invalid

# # cities = ["Vilnius", "Amsterdam", "Jurbarkas"]

# # print("Vilnius" in cities)

# # TODO: store valid receipt categories in a list
# categories = [
#     "Food & Groceries",
#     "Electronics",
#     "Clothing",
#     "Household items",
#     "Entertainment",
#     "Transportation",
#     "Health & Beauty",
#     "Other"
# ]

# # TODO: ask the user to enter an item category
# check = input("Enter item category: ")
# # TODO: check if the category is in the categories list using in / not in
# is_in_category = check in categories
# # TODO: if the category is in the categories list, print "Category accepted."
# if is_in_category: 
#     print("Category accepted.")
# else:
#     print("Error: Category not supported.")
# # TODO: if the category is not in the categories list, print "Error: Category not supported."

categories = [
    "Food & Groceries",
    "Electronics",
    "Clothing",
    "Household items",
    "Entertainment",
    "Transportation",
    "Health & Beauty",
    "Other"
]

category = input("Enter item category: ")

if category in categories:
    print("Category accepted.")
else:
    print("Error: Category not supported.")

store_name= None
store_name = input("Enter store name: ")
if store_name is not None:
    print("Store name accepted.")
elif store_name == "":
    print("Error: Store name cannot be empty.")
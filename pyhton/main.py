# # # categories = [
# # #     "Food & Groceries",
# # #     "Electronics",
# # #     "Clothing",
# # #     "Household items",
# # #     "Entertainment",
# # #     "Transportation",
# # #     "Health & Beauty",
# # #     "Other"
# # # ]

# # # category = input("Enter item category: ")

# # # if category in categories:
# # #     print("Category accepted.")
# # # elif category not in categories:
# # #     print("Error: Category not supported.")

# # # store_name = None

# # # store_name = input("Enter store name: ")

# # # if store_name is not None:
# # #     print("Error: Store name not set.")
# # # elif store_name == "":
# # #     print("Store name accepted.")

# # # # TODO: ask the user to enter the total number of items on the receipt
# # # total_item_count = input("Enter total item count: ")
# # # # TODO: convert the input to an integer using int()
# # # total_item_count_int = int(total_item_count)
# # # # TODO: check if the item count is 0
# # # # TODO: if the item count is 0, print "Error: Receipt must contain at least one item."
# # # if total_item_count_int == 0:
# # #     print("Error: Receipt must contain at least one item.")

# # # # TODO: check if the item count is less than 0
# # # # TODO: if the item count is less than 0, print "Error: Item count cannot be negative."

# # # elif total_item_count_int < 0:
# # #     print("Error: Item count cannot be negative.")

# # # # TODO: if the item count is greater than 0, print "Item count accepted."

# # # else:
# # #     print("Item count accepted.")


    
# # books = [
# #     {
# #         "id": "B001",
# #         "title": "The Hobbit",
# #         "author": "J R R Tolkien",
# #         "category": "Fantasy",
# #         "available": 3,
# #         "total": 5
# #     },
# #     {
# #         "id": "B002",
# #         "title": "Clean Code",
# #         "author": "Robert C Martin",
# #         "category": "Programming",
# #         "available": 0,
# #         "total": 2
# #     },
# #     {
# #         "id": "B003",
# #         "title": "The Alchemist",
# #         "author": "Paulo Coelho",
# #         "category": "Fiction",
# #         "available": 4,
# #         "total": 4
# #     },
# #     {
# #         "id": "B004",
# #         "title": "Dune",
# #         "author": "Frank Herbert",
# #         "category": "Sci Fi",
# #         "available": 2,
# #         "total": 3
# #     },
# #     {
# #         "id": "B005",
# #         "title": "1984",
# #         "author": "George Orwell",
# #         "category": "Dystopian",
# #         "available": 5,
# #         "total": 5
# #     }
# # ]


# # # TODO: print table header
# # # Example:
# # # ID | Title | Author | Category | Available | Total
# # print(f"{'ID':<7} {'Title':<18} {'Author':<17}  {'Category':<13}  {'Available':<13}  {'Total':<1}")

# # # TODO: use a for loop to print all books in table format
# # # TODO: each row must show one book with all its values
# # for book in books:
# #     print(f"{book['id']:<7} {book['title']:<18} {book['author']:<17} {book['category']:<13} {book['available']:<13} {book['total']:<1}")


# # # TODO: make sure output formatting is readable and aligned



# stops = (
#     "Central Station",
#     "University",
#     "Shopping Mall",
#     "Hospital",
#     "Airport"
# )

# distances = (
#     0.0,
#     2.5,
#     4.0,
#     7.0,
#     15.0
# )

# buses = []

# print(f"Bus Route Data")

# print(f"\nStops:")
# print(f"{stops}")

# print(f"\nDistances (km from start):")
# print(f"{distances}")

# print(f"\nActive buses:")
# print(f"{buses}")

# # TODO: print title ("Bus Route Overview")
# print("Bus Route Overview")
# # TODO: print table header
# # Example:
# #  Stop Name           Distance (km)
# # ------------------------------------
# print(f"{'Stop Name':<20} {'Distance (km)':<15}")
# print(f"{'':-<36}"")

# # TODO: use a for loop with range() and len() to iterate over all stops
# for i in range(len(stops)):
#     print(f"{stops[i]:<20} {distances[i]:>15.1f}")
# # TODO: use indexing to access the stop name and distance from the tuples

# # TODO: print each stop number, stop name, and distance on one line

# # TODO: use f-strings with padding and alignment for formatting




# # # # # def greet(name, language="en"):
# # # # #     if language == "en":
# # # # #         return f"Hello, {name}"
# # # # #     return f"Hi, {name}"

# # # # # print(greet("Example1")) # Hello, Example1
# # # # # print(greet("Example1", "lt")) # Hi, Example1


# # # # # def add_item(item, lst=[]):
# # # # #     lst.append(item)
# # # # #     return lst

# # # # # print(add_item(1))
# # # # # print(add_item(2))


# # # # # my_list = ["apple", "banana"]

# # # # # def process_data(data, verbose, reverse, encoding):

# # # # #     print(data, verbose, reverse, encoding)


# # # # # process_data(data=my_list, verbose=True, reverse=False, encoding="ascii")



# # # # def greet(name, *, greeting="Hello"):
# # # #     print(f"{greeting}, {name}!")

# # # # # Valid call (uses keyword arguments)
# # # # greet(name="Example", greeting="Hi")
# # # # greet(name="Bob") # Uses the default for 'greeting'
# # # # # Invalid call (tries to use positional arguments)
# # # # greet("Example")
# # # # # TypeError: greet() takes 0 positional arguments but 1 was given



def function(positional_only, /, positional_or_keyword, *, keyword_only):
#1. Left of / (Positional-Only) - Parameters that must be passed by position.
#2. Between / and * (Positional-or-Keyword) - Parameters that can be passed either by position or by keyword. This is the defau
#3. Right of * (Keyword-Only): Parameters that must be passed by keyword.   
    pass
def order(item, /, quantity=1, *, discount = 0):
    total = quantity * 10 * (1 - discount)
    print(f"Item {item}, {total}")

order("Burger", 3, discount=0.2)




# # # def example_function(a, b, *args, **kwargs):
# # #     print(f"a: {a}, type: {type(a)}") # a: 1, type: <class 'int'>
# # #     print(f"b: {b}, type: {type(b)}") # b: 2, type: <class 'int'>
# # #     print(f"args: {args}, type: {type(args)}") # args: (3, 4, 5), type: <class 'tu
# # #     print(f"kwargs: {kwargs}, type: {type(kwargs)}") # kwargs: {'x': 10, 'y': 20),

# # # example_function(1, 2, 3, 4, 5, x=10, y=20)


# # # def sum_numbers(*numbers):
# # #     total = sum(numbers)
# # #     return total

# # # print(sum_numbers(1,2,3,4,5,6))

# # def connect_to_server(host, port, **options):
# #     print(f"Connect to {host}:{port}")
# #     for key, value in options.items():
# #         print(f"Option {key} = {value}")

# # connect_to_server("localhost", 8080, ssl=True)



# # def process_items(*args):
# #     print(args)
# #     items = list(args)
# #     items.append()



# user_dict = {
#     "name": "Example",
#     "age": 25,
#     "city": "Siauliai",
# }

# def create_profile(name, age, city):
#     print(f"{name} is {age} years old, from {city}")

# create_profile(user_dict["name"], user_dict["age"], user_dict["city"])



def logger(message, *values, **metadata):
    print(f"LOG: {message}")
    if values:
        print(values)
    if metadata:
        for key, value in metadata.items():
            print(f"{key}: {value}")

logger("Error", 45.6, source="Random", severity="HIGH")

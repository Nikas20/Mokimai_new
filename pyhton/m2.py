# def log_execution(original_function):
#     def wrapped_function(*args, **kwargs):
#         print("Start")
#         result = original_function(*args, **kwargs)
#         print("End")
#         return result

#     return wrapped_function

# @log_execution
# def process(value):
#     print("Processing", value)
#     return value * 2

# @log_execution
# def combine(a, b):
#     print("Combibing values")
#     return a + b

# result1 = process(20)
# print("Result:", result1)

# result2 = combine(3, 5)
# print("Result:", result2)
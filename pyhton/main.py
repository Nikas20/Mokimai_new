# def log_execution(original_function):
#     def wrapped_function():
#         print("Start")
#         original_function()
#         print("End")

#     return wrapped_function

# # load_data = log_execution(load_data)
# # save_data = log_execution(save_data)

# @log_execution
# def load_data():
#     print("Loading data")

# load_data()

class Person:
    populiation = 0
    def __init__(self, name):
        self.name = name
        Person.populiation += 1
    
    # @classmethod
    # def get_populiation(cls, extra_info):
    #     print(cls.populiation, extra_info)

# person1 = Person("Tom")
# person2 = Person("Toam")

# Person.get_populiation("We are cat")    


#     @staticmethod
#     def is_adult(age):
#         return age >= 18

# print(Person.is_adult(20))


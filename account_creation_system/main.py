# # # # # # Ivesti i console eilute "Welcome to the User Registration System v2"
# # # # # print("Welcome to the User Registration System v2")
# # # # # # Ivesti i console eilute "Please follow the instructions to register."
# # # # # print("Please follow the instructions to register.")

# # # # # print("You entered")
# # # # # username = "Nikas"
# # # # # email = "test@gmail.com"

# # # # # print(username)
# # # # # print(email)


# # # # # number = 20
# # # # # negative_number = -number

# # # # # print(number)
# # # # # print(negative_number)

# # # # # result = 9 ** 2
# # # # # print(result)

# # # # # # TODO: store engine power in a variable
# # # # # power = 120
# # # # # # TODO: store vehicle mass in a variable
# # # # # mass = 1350
# # # # # # TODO: calculate the power-to-weight ratio
# # # # # power_to_weigh = power / (mass / 1000)
# # # # # # TODO: print engine power
# # # # # print(power)
# # # # # # TODO: print vehicle mass
# # # # # print(mass)
# # # # # # TODO: print power-to-weight ratio
# # # # # print(power_to_weigh)


# # # # # example = input("Enter some text: ")

# # # # # print(example)

# # # # # power_kw = float(input("Write power kw: ")) 
# # # # # mass_kg = float(input("Write mass kg: "))

# # # # # kg_per_ton = 1000

# # # # # p2w = power_kw / (mass_kg / kg_per_ton)

# # # # # print("Power:", power_kw, "kW")
# # # # # print("Mass:", mass_kg, "kg")
# # # # # print("Power-to-weight:", p2w, "kW/ton")

# # # # # # TODO: define a constant for kilograms per ton

# # # # # # TODO: update the power-to-weight calculation
# # # # # # Use the constant instead of the number 1000


# # # # # # TODO: ask the user for a username
# # # # # username = input("Enter username: ")
# # # # # # TODO: ask the user for an email
# # # # # email = input("Enter email: ")
# # # # # # TODO: print the entered values using f-strings and escape characters
# # # # # print(f"You entered :\n username: {username} \n email: {email}")

# # # # # age = int(input("Enter your age: "))
# # # # # terms = input("Do you accept the terms? (yes/no): ")

# # # # # print(f"You output :\n age: {age} \n accepted terms: {terms}")

# # # # # example = input("True or faalse: ")

# # # # # is true = example == "yes"

# # # # # age = int(input("Enter your age: "))
# # # # # password = len(input("Enter password: "))
# # # # # accepted_terms = input("Do you accept the terms? (yes/no): ")

# # # # # is_adult = age >= 18
# # # # # is_password_valid = password >= 8
# # # # # has_accept = accepted_terms == "yes"

# # # # # print(is_adult)
# # # # # print(is_password_valid)
# # # # # print(has_accept)

# # # # # age = 15
# # # # # user_count = 8

# # # # # if (age >= 18) and (user_count >= 8):
# # # # #     print("Are must be at least 18 years old")
# # # # # elif (age >= 16)  and (user_count <= 8):
# # # # #     print("For this place you to young")
# # # # # else: print("You must be with the family to go there")


# # # # # print("Welcome to the User Registration System v2")
# # # # # print("Follow the steps below to create your account.")

# # # # # username = input("Enter username: ")
# # # # # email = input("Enter email: ")
# # # # # password = input("Enter password: ")

# # # # # print("\nYou entered:")
# # # # # print(f"Username: {username}")
# # # # # print(f"Email: {email}")

# # # # # age = int(input("Enter your age: "))
# # # # # password = len(input("Enter password: "))
# # # # # terms_input = input("Do you accept the terms? (yes/no): ")

# # # # # print(f"\nAge: {age}")
# # # # # print(f"Accepted terms: {terms_input}")

# # # # # is_adult = age >= 18
# # # # # is_password_valid = len(password) >= 8
# # # # # has_accepted_terms = terms_input == "yes"

# # # # # # TODO: show validation messages
# # # # # if  age >= 18 and len(password) >= 8 and terms_input == "yes":
# # # # #     print("Registration successful")
# # # # # elif  len(password) >= 8 and terms_input == "yes":
# # # # #     print("You must be at least 18 years old")
# # # # # elif age >= 18 and terms_input == "yes":
# # # # #     print("Password must be at least 8 characters long.")
# # # # # elif age >= 18 and len(password) >= 8:
# # # # #     print("You must accept the terms and conditions.")
# # # # # else:
# # # # #     print("2 or more not corect")


# # # # # power_kw_input = input("Enter engine power (kW): ")
# # # # # mass_kg_input = input("Enter vehicle mass (kg): ")

# # # # # power_kw = float(power_kw_input)
# # # # # mass_kg = float(mass_kg_input)

# # # # # p2w = power_kw / (mass_kg / 1000)

# # # # # print(f"Power: {power_kw} kW")
# # # # # print(f"Mass: {mass_kg} kg")
# # # # # print(f"Power-to-weight: {round(p2w)} kW/ton")

# # # # # power_kw_input = input("Enter engine power (kW): ")
# # # # # mass_kg_input = input("Enter vehicle mass (kg): ")

# # # # # power_kw = float(power_kw_input)
# # # # # mass_kg = float(mass_kg_input)

# # # # # p2w = power_kw / (mass_kg / 1000)

# # # # # p2w_rounded = round(p2w, 1)

# # # # # print(f"Power: {power_kw} kW")
# # # # # print(f"Mass: {mass_kg} kg")
# # # # # print(f"Power-to-weight: {p2w_rounded} kW/ton")

# # # # # value = 3.11111185

# # # # # print(f"({value:,.2f})")

# # # # # ratio = 0.75
# # # # # print(f"{ratio:,.0%}")

# # # # # restaurant_name = "Python Bistro"

# # # # # item1_name = "Burger"
# # # # # item1_price = 8.50

# # # # # item2_name = "Pizza"
# # # # # item2_price = 10.00

# # # # # item3_name = "Cola"
# # # # # item3_price = 2.50

# # # # # print(f"Welcome to {restaurant_name}")
# # # # # print(f"{'Item':<20} Price")
# # # # # print(f"{'-' * 27}")
# # # # # print(f"{item1_name:<17} {item1_price:>10.2f}")
# # # # # print(f"{item2_name:<17} {item2_price:>10.2f}")
# # # # # print(f"{item3_name:<17} {item3_price:>10.2f}")

# # # # # print("")

# # # # # choise = int(input("Choose an item (1-3): "))
# # # # # if (choise == 1):
# # # # #     print(f"You selected: {item1_name} ({item1_price:,.2f})")
# # # # # elif (choise == 2):
# # # # #     print(f"You selected: {item2_name} ({item2_price:,.2f})")
# # # # # else:
# # # # #     print(f"You selected: {item3_name} ({item3_price:,.2f})")

# # # # # def funcion_name(parametras1, parametras2):
# # # # #     return f"Hello my name is {parametras1} and ! am {parametras2} years old"

# # # # # print(funcion_name("Nikas", 20))

# # # # # def add_text(text):
# # # # #     return "Hello " + text

# # # # # def add_symbol(text):
# # # # #     return text + "."

# # # # # result = add_symbol(add_text("world")) 

# # # # # print(result)

# # # # # def get_number():
# # # # #     return 1, 2, 3

# # # # # def add_all(a, b, c):
# # # # #     return a + b + c

# # # # # a, b, c = get_number()

# # # # # result = add_all(a, b, c)

# # # # # print(result)

# # # # # def double(x):
# # # # #     return x * 2

# # # # # def add_five(x):
# # # # #     return x + 5

# # # # # print(add_five(double(3)))



# # # # # print("\nYou entered:")
# # # # # print(f"Username: {username}")
# # # # # print(f"Email: {email}")



# # # # # is_adult = age >= 18
# # # # # is_password_valid = len(password) >= 8
# # # # # has_accepted_terms = terms_input == "yes"


# # # # # if not is_adult:
# # # # #     print("Error: You must be at least 18 years old.")
# # # # # elif not is_password_valid:
# # # # #     print("Error: Password must be at least 8 characters long.")
# # # # # elif not has_accepted_terms:
# # # # #     print("Error: You must accept the terms and conditions.")
# # # # # else:
# # # # #     print("Registration successful")


# # # # def get_user_input():
# # # #     print("Welcome to the User Registration System v2")
# # # #     print("Follow the steps below to create your account.")
# # # #     username = input("Enter username: ")
# # # #     email = input("Enter email: ")
# # # #     password = input("Enter password: ")
# # # #     age = int(input("Enter your age: "))
# # # #     terms_input = input("Do you accept the terms? (yes/no): ")

# # # #     return username, email, password, age, terms_input


# # # # def validate_age(age):
# # # #     # TODO: return True if age is 18 or older, otherwise False
# # # #     return age >= 18
        
# # # # def validate_password(password):
# # # #     # TODO: return True if password length is at least 8, otherwise False
# # # #     return len(password) >= 8


# # # # def validate_terms(terms_input):
# # # #     # TODO: return True if terms_input equals "yes", otherwise False
# # # #     # (do not add new rules; keep behavior unchanged)
# # # #     return terms_input == "yes"


# # # # def register_user():
# # # #     # TODO: use multiple assignment to get values from get_user_input()
# # # #      username, email, password, age, terms_input = get_user_input()

# # # #     # TODO: call validation functions from inside this function
# # # #      is_adult = validate_age(age)
# # # #      is_password_valid = validate_password(password)
# # # #      has_accepted_terms = validate_terms(terms_input)

# # # #     # TODO: keep the same messages and behavior:
# # # #      if not is_adult: 
# # # #          print("Error: You must be at least 18 years old.")
# # # #      elif not is_password_valid: 
# # # #          print("Error: Password must be at least 8 characters long.")
# # # #      elif not has_accepted_terms: 
# # # #          print("Error: You must accept the terms and conditions.")
# # # #      else: 
# # # #          print("Registration successful")
    


# # # # # TODO: call register_user() to run the program

# # # # register_user()

# # # KG_PER_TON = 1000

# # # power_kw_input = input("Enter engine power (kW): ")
# # # mass_kg_input = input("Enter vehicle mass (kg): ")

# # # power_kw = float(power_kw_input)
# # # mass_kg = float(mass_kg_input)

# # # # p2w = power_kw / (mass_kg / 1000)
# # # # p2w_rounded = round(p2w, 1)

# # # # if p2w_rounded < 60:
# # # #     performance = "Weak"
# # # # elif p2w_rounded < 100:
# # # #     performance = "Average"
# # # # else:
# # # #     performance = "Strong"

# # # own_speed_input = input("Enter your speed (km/h): ")
# # # target_speed_input = input("Enter target vehicle speed (km/h): ")
# # # distance_input = input("Enter available distance (m): ")

# # # own_speed = float(own_speed_input)
# # # target_speed = float(target_speed_input)
# # # distance_available = float(distance_input)

# # # # cond_a = own_speed > target_speed
# # # # cond_b = (own_speed - target_speed) >= 20
# # # # cond_c = distance_available >= 100

# # # # overtaking_safe = (cond_a and cond_b) and cond_c

# # # # print("\n=== VEHICLE PERFORMANCE REPORT ===")
# # # # print(f"{'Parameter':<30} {'Value':>10}")
# # # # print("-" * 42)

# # # # print(f"{'Engine Power (kW)':<30} {power_kw:>10.1f}")
# # # # print(f"{'Vehicle Mass (kg)':<30} {mass_kg:>10.1f}")
# # # # print(f"{'Power-to-weight (kW/ton)':<30} {p2w_rounded:>10.1f}")
# # # # print(f"{'Performance class':<30} {performance:>10}")

# # # # print("\n=== OVERTAKING CHECK ===")
# # # # print(f"{'Condition A (faster)':<30} {str(cond_a):>10}")
# # # # print(f"{'Condition B (>=20 km/h diff)':<30} {str(cond_b):>10}")
# # # # print(f"{'Condition C (>=100 m distance)':<30} {str(cond_c):>10}")
# # # # print(f"{'Overtaking safe':<30} {str(overtaking_safe):>10}")


# # # def power_to_weight(power_kw, mass_kg):

# # #     p2w = power_kw / (mass_kg / 1000)

# # #     return p2w


# # # def classify_performance(p2w_rounded):

# # #     if p2w_rounded < 60:
# # #         performance = "Weak"
# # #     elif p2w_rounded < 100:
# # #         performance = "Average"
# # #     else:
# # #         performance = "Strong"

# # #     return performance


# # # def evaluate_overtaking(own_speed, target_speed, distance_available):
# # #     # TODO: evaluate conditions and return cond_a, cond_b, cond_c, overtaking_safe
# # #     own_speed_input = input("Enter your speed (km/h): ")
# # #     target_speed_input = input("Enter target vehicle speed (km/h): ")
# # #     distance_input = input("Enter available distance (m): ")

# # #     own_speed = float(own_speed_input)
# # #     target_speed = float(target_speed_input)
# # #     distance_available = float(distance_input)

# # #     cond_a = own_speed > target_speed
# # #     cond_b = (own_speed - target_speed) >= 20
# # #     cond_c = distance_available >= 100

# # #     overtaking_safe = (cond_a and cond_b) and cond_c

# # #     return cond_a, cond_b, cond_c, overtaking_safe



# # # def print_report(power_kw, mass_kg, p2w_rounded, performance,
# # #                  cond_a, cond_b, cond_c, overtaking_safe):
# # #     print("\n=== VEHICLE PERFORMANCE REPORT ===")
# # #     print(f"{'Parameter':<30} {'Value':>10}")
# # #     print("-" * 42)

# # #     print(f"{'Engine Power (kW)':<30} {power_kw:>10.1f}")
# # #     print(f"{'Vehicle Mass (kg)':<30} {mass_kg:>10.1f}")
# # #     print(f"{'Power-to-weight (kW/ton)':<30} {p2w_rounded:>10.1f}")
# # #     print(f"{'Performance class':<30} {performance:>10}")

# # #     print("\n=== OVERTAKING CHECK ===")
# # #     print(f"{'Condition A (faster)':<30} {str(cond_a):>10}")
# # #     print(f"{'Condition B (>=20 km/h diff)':<30} {str(cond_b):>10}")
# # #     print(f"{'Condition C (>=100 m distance)':<30} {str(cond_c):>10}")
# # #     print(f"{'Overtaking safe':<30} {str(overtaking_safe):>10}")
    

# # # # TODO: replace the direct calculations above by calling power_to_weight()
# # # p2w = power_to_weight(power_kw, mass_kg)
# # # p2w_rounded = round(p2w, 1)
# # # # TODO: replace the if/elif/else block above by calling classify_performance()
# # # performance = classify_performance(p2w_rounded)

# # # # TODO: replace the overtaking condition calculations above by calling evaluate_overtaking()
# # # cond_a, cond_b, cond_c, overtaking_safe = evaluate_overtaking(own_speed, target_speed, distance_available)

# # # # TODO: replace the printing section above by calling print_report()
# # # print_report(power_kw, mass_kg, p2w_rounded, performance,
# # #                  cond_a, cond_b, cond_c, overtaking_safe)

# # # # TODO: after replacing, remove the old duplicated logic (the blocks above)

# # # KG_PER_TON = 1000

# # # def power_to_weight(power_kw, mass_kg):
# # #     return power_kw / (mass_kg / KG_PER_TON)

# # # def classify_performance(p2w_rounded):
# # #     if p2w_rounded < 60:
# # #         return "Weak"
# # #     elif p2w_rounded < 100:
# # #         return "Average"
# # #     else:
# # #         return "Strong"

# # # def evaluate_overtaking(own_speed, target_speed, distance_available):
# # #     cond_a = own_speed > target_speed
# # #     cond_b = (own_speed - target_speed) >= 20
# # #     cond_c = distance_available >= 100
# # #     overtaking_safe = (cond_a and cond_b) and cond_c
# # #     return cond_a, cond_b, cond_c, overtaking_safe

# # # def print_report(power_kw, mass_kg, p2w_rounded, performance, cond_a, cond_b, cond_c, overtaking):
# # #     print("\n=== VEHICLE PERFORMANCE REPORT ===")
# # #     print(f"{'Parameter':<30} {'Value':>10}")
# # #     print("-" * 42)
# # #     print(f"{'Engine Power (kW)':<30} {power_kw:>10.1f}")
# # #     print(f"{'Vehicle Mass (kg)':<30} {mass_kg:>10.1f}")
# # #     print(f"{'Power-to-weight (kW/ton)':<30} {p2w_rounded:>10.1f}")
# # #     print(f"{'Performance class':<30} {performance:>10}")

# # #     print("\n=== OVERTAKING CHECK ===")
# # #     print(f"{'Condition A (faster)':<30} {str(cond_a):>10}")
# # #     print(f"{'Condition B (>=20 km/h diff)':<30} {str(cond_b):>10}")
# # #     print(f"{'Condition C (>=100 m distance)':<30} {str(cond_c):>10}")
# # #     print(f"{'Overtaking safe':<30} {str(overtaking):>10}")


# # # power_kw_input = input("Enter engine power (kW): ")
# # # mass_kg_input = input("Enter vehicle mass (kg): ")

# # # power_kw = float(power_kw_input)
# # # mass_kg = float(mass_kg_input)

# # # p2w = power_to_weight(power_kw, mass_kg)
# # # p2w_rounded = round(p2w, 1)

# # # performance = classify_performance(p2w_rounded)

# # # own_speed_input = input("Enter your speed (km/h): ")
# # # target_speed_input = input("Enter target vehicle speed (km/h): ")
# # # distance_input = input("Enter available distance (m): ")

# # # own_speed = float(own_speed_input)
# # # target_speed = float(target_speed_input)
# # # distance_available = float(distance_input)
# # # cond_a, cond_b, cond_c, overtaking = evaluate_overtaking(own_speed, target_speed, distance_available)
# # # print_report(power_kw, mass_kg, p2w_rounded, performance, cond_a, cond_b, cond_c, overtaking)
# # # G = 9.81
# # # def kmh_to_ms(speed_kmh):
# # #     return speed_kmh * 1000 / 60
# # # def braking_distance(speed_kmh, friction):
# # #     v = kmh_to_ms(speed_kmh)
# # #     d = (v ** 2) / (2 * friction )
# # #     return d

# # # def add(x):
# # #     return x + 1
# # # def double(x):
# # #     return x * 2
# # # print(double(add(3)))

# # # def diemesion():
# # #     return 4,6
# # # def combine():
# # #     w, h = diemesion()

# # # print(f"{"A":*>5}")
# # # Pi = 3,149999
# # # print(f"{Pi :. ,.2f}")

# # KG_PER_TON = 1000

# # def power_to_weight(power_kw, mass_kg):
# #     return power_kw / (mass_kg / KG_PER_TON)

# # def classify_performance(p2w_rounded):
# #     if p2w_rounded < 60:
# #         return "Weak"
# #     elif p2w_rounded < 100:
# #         return "Average"
# #     else:
# #         return "Strong"

# # def evaluate_overtaking(own_speed, target_speed, distance_available):
# #     cond_a = own_speed > target_speed
# #     cond_b = (own_speed - target_speed) >= 20
# #     cond_c = distance_available >= 100
# #     overtaking_safe = (cond_a and cond_b) and cond_c
# #     return cond_a, cond_b, cond_c, overtaking_safe

# # def print_report(power_kw, mass_kg, p2w_rounded, performance, cond_a, cond_b, cond_c, overtaking):
# #     print("\n=== VEHICLE PERFORMANCE REPORT ===")
# #     print(f"{'Parameter':<30} {'Value':>10}")
# #     print("-" * 42)
# #     print(f"{'Engine Power (kW)':<30} {power_kw:>10.1f}")
# #     print(f"{'Vehicle Mass (kg)':<30} {mass_kg:>10.1f}")
# #     print(f"{'Power-to-weight (kW/ton)':<30} {p2w_rounded:>10.1f}")
# #     print(f"{'Performance class':<30} {performance:>10}")

# #     print("\n=== OVERTAKING CHECK ===")
# #     print(f"{'Condition A (faster)':<30} {str(cond_a):>10}")
# #     print(f"{'Condition B (>=20 km/h diff)':<30} {str(cond_b):>10}")
# #     print(f"{'Condition C (>=100 m distance)':<30} {str(cond_c):>10}")
# #     print(f"{'Overtaking safe':<30} {str(overtaking):>10}")


# # power_kw_input = input("Enter engine power (kW): ")
# # mass_kg_input = input("Enter vehicle mass (kg): ")

# # speed_for_braking_input = input("Enter breaking test speed: ")
# # speed_for_braking = float(speed_for_braking_input)
# # power_kw = float(power_kw_input)
# # mass_kg = float(mass_kg_input)

# # dry_test = round(braking_distance(speed_for_braking, 0.9), 1)
# # dry_test = round(braking_distance(speed_for_braking, 0.45), 1)
# # dry_test = round(braking_distance(speed_for_braking, 0.2), 1)

# # p2w = power_to_weight(power_kw, mass_kg)
# # p2w_rounded = round(p2w, 1)



# # performance = classify_performance(p2w_rounded)

# # own_speed_input = input("Enter your speed (km/h): ")
# # target_speed_input = input("Enter target vehicle speed (km/h): ")
# # distance_input = input("Enter available distance (m): ")

# # own_speed = float(own_speed_input)
# # target_speed = float(target_speed_input)
# # distance_available = float(distance_input)

# # cond_a, cond_b, cond_c, overtaking = evaluate_overtaking(own_speed, target_speed, distance_available)

# # print_report(power_kw, mass_kg, p2w_rounded, performance, cond_a, cond_b, cond_c, overtaking)

# # # TODO: add constant G = 9.81
# # G = 9.81
# # # TODO: create function kmh_to_ms(speed_kmh)
# # def kmh_to_ms(speed_kmh):
# #     return speed_kmh * 1000 / 60

# # # TODO: create function braking_distance(speed_kmh, friction)
# # def braking_distance(speed_kmh, friction):
# #     v = kmh_to_ms(speed_kmh)
# #     d = (v ** 2) / (2 * friction * G )
# #     return d
# # # TODO: ask the user for braking test speed (km/h)

# # # TODO: calculate braking distances for:
# # # Dry asphalt (0.90), Wet asphalt (0.45), Snow/Ice (0.20)
# # # round each to 1 decimal place

# # # TODO: extend print_report() to also print BRAKING DISTANCE table
# # print_report(power_kw, mass_kg, p2w_rounded, performance, cond_a, cond_b, cond_c, overtaking)





# KG_PER_TON = 1000
# G = 9.81

# def power_to_weight(power_kw, mass_kg):
#     return power_kw / (mass_kg / KG_PER_TON)

# def classify_performance(p2w_rounded):
#     if p2w_rounded < 60:
#         return "Weak"
#     elif p2w_rounded < 100:
#         return "Average"
#     else:
#         return "Strong"

# def evaluate_overtaking(own_speed, target_speed, distance_available):
#     cond_a = own_speed > target_speed
#     cond_b = (own_speed - target_speed) >= 20
#     cond_c = distance_available >= 100
#     overtaking_safe = (cond_a and cond_b) and cond_c
#     return cond_a, cond_b, cond_c, overtaking_safe

# def kmh_to_ms(speed_kmh):
#     return (speed_kmh * 1000) / 3600

# def braking_distance(speed_kmh, friction):
#     v = kmh_to_ms(speed_kmh)
#     distance = (v ** 2) / (2 * friction * G)
#     return distance

# def print_report(power_kw, mass_kg, p2w_rounded, performance, 
#                  cond_a, cond_b, cond_c, overtaking, 
#                  dry_dist, wet_dist, snow_dist, reaction_dist, braking_distm, total_stop, is_safe):
#     print("\n=== VEHICLE PERFORMANCE REPORT ===")
#     print(f"{'Parameter':<30} {'Value':>10}")
#     print("-" * 42)
#     print(f"{'Engine Power (kW)':<30} {power_kw:>10.1f}")
#     print(f"{'Vehicle Mass (kg)':<30} {mass_kg:>10.1f}")
#     print(f"{'Power-to-weight (kW/ton)':<30} {p2w_rounded:>10.1f}")
#     print(f"{'Performance class':<30} {performance:>10}")

#     print("\n=== OVERTAKING CHECK ===")
#     print(f"{'Condition A (faster)':<30} {str(cond_a):>10}")
#     print(f"{'Condition B (>=20 km/h diff)':<30} {str(cond_b):>10}")
#     print(f"{'Condition C (>=100 m distance)':<30} {str(cond_c):>10}")
#     print(f"{'Overtaking safe':<30} {str(overtaking):>10}")

#     print("\n=== BRAKING DISTANCE ===")
#     print(f"{'Road Condition':<30} {'Distance (m)':>10}")
#     print("-" * 42)
#     print(f"{'reaction distants':<30} {reaction_dist:>10.1f}")
#     print(f"{'breaking distants':<30} {braking_distm:>10.1f}")
#     print(f"{'Total stop':<30} {total_stop:>10.1f}")
#     print(f"{'Stops within 70':<30} {is_safe:>10.1f}")

# power_kw_input = input("Enter engine power (kW): ")
# mass_kg_input = input("Enter vehicle mass (kg): ")

# power_kw = float(power_kw_input)
# mass_kg = float(mass_kg_input)

# p2w = power_to_weight(power_kw, mass_kg)
# p2w_rounded = round(p2w, 1)

# performance = classify_performance(p2w_rounded)

# own_speed_input = input("Enter your speed (km/h): ")
# target_speed_input = input("Enter target vehicle speed (km/h): ")
# distance_input = input("Enter available distance (m): ")

# own_speed = float(own_speed_input)
# target_speed = float(target_speed_input)
# distance_available = float(distance_input)

# cond_a, cond_b, cond_c, overtaking = evaluate_overtaking(
#     own_speed, target_speed, distance_available
# )

# speed_for_braking_input = input("Enter speed for braking test (km/h): ")
# speed_for_braking = float(speed_for_braking_input)

# dry_dist = round(braking_distance(speed_for_braking, 0.9), 1)
# wet_dist = round(braking_distance(speed_for_braking, 0.45), 1)
# snow_dist = round(braking_distance(speed_for_braking, 0.2), 1)

# print_report(power_kw, mass_kg, p2w_rounded, performance,
#              cond_a, cond_b, cond_c, overtaking,
#              dry_dist, wet_dist, snow_dist)

# # TODO: add constant REACTION_TIME = 1.2
# REACTION_TIME = 1.2

# # TODO: create function reaction_distance(speed_kmh, reaction_time)
# def reaction_distance(speed_kmh, reaction_time):
#     v = kmh_to_ms(speed_kmh)
#     return v * reaction_time
    

# # TODO: create function total_stopping_distance(speed_kmh, friction, reaction_time)
# def total_stopping_distance(speed_kmh, friction, reaction_time):
#     react = reaction_distance(speed_kmh, reaction_time)
#     brake = braking_distance(speed_kmh, friction) 
#     total = react + brake
#     return total

# # TODO: calculate reaction + total stopping distance (dry only)
# reaction_dist, braking_distm, total_stop = total_stopping_distance(speed_for_braking, 0.90, REACTION_TIME)
# # TODO: create boolean check: is_safe = total_stop < 70
# is_safe = total_stop < 70
# # TODO: extend print_report() to print REACTION & TOTAL STOPPING section
# print_report(power_kw, mass_kg, p2w_rounded, performance, 
#                  cond_a, cond_b, cond_c, overtaking, 
#                  dry_dist, wet_dist, snow_dist, reaction_dist, braking_distm, total_stop, is_safe)

# e = range(2, 10, 2)

# print(e)

dict_element = {}

print(type(dict_element))
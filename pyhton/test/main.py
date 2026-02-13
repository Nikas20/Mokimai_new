# # # # for i in range(1000):
# # # #     file = open("example.txt")
# # # #     file.write("Example")
# # # # file.close()
# # # # print(file)


# # # # file = open("data/example.txt", "r") // peraso
# # # # data = file.read()


# # # # file = open("data/example.txt", "a") // prideda nauja
# # # # file.write("\nNew Content2")


# # # # file = open("data/example2.txt", "x") // sukuria nauja file
# # # # file.write("Create new")

# # # # file = open("data/example2.txt", "r+") // daro kelius darbus
# # # # file.write("Create MEW")
# # # # file.seek(0) // nuo kokios vetos skaitit
# # # # content = file.read()
# # # # print(content)

# # # # file = open("data/example.txt", "r")
# # # # content = file.readline()

# # # # print(content)

# # # # file = open("data/example.txt", "r")

# # # # for line in file:
# # # #     print(line)


# # # # file = open("data/example.txt", "w")

# # # # file.write("Create MEW\n")
# # # # file.write("Create MEEEW\n")

# # # # file.close()

# # # file = open("data/example.txt", "w")
# # # file.writelines()


# # with open("data/example.txt", "r") as file:
# #     read = file.read()
# #     print(read)

# # import json

# # data = {
# #     "name": "Example",
# #     "age": 25,
# #     "active":True
# #     }

# # with open("data/data.json", "r") as file:
# #     existing = json.load(file)

# # existing.append(data)

# # with open("data/data.json", "w") as file:
# #     json.dump(existing, file, indent=4)


# # text = "Hello"
# # binary_text = b"Hello"

# # print(text)
# # print(binary_text)
# # print(type(text))
# # print(type(binary_text))

# # with open("data/example.png", "rb") as file:
# #     data = file.read()
# # print(data[:20])

# text = "Hello"

# encoded_text = text.encode("utf-8")

# print(type(encoded_text))
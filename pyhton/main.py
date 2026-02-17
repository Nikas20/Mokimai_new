def add(value, container = None):
    if container is None:
        container = []
    container.append(value)
    return container

print(add(1, [2]))
print(add(2))
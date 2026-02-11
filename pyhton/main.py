lis = [1, 2, 3]

def add(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
print(add(1))
print(add(2))
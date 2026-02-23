def count_orders_by_field(orders, field):
    counts = {}
    for o in orders:
        key = str(o.get(field, "UNKNOWN"))
        counts[key] = counts.get(key, 0) + 1
    return counts

def get_top_orders_by_numeric_field(orders, field, top_n):
    sorted_orders = sorted(orders, reverse=True, key=lambda x: float(x.get(field, 0.0)) )
    return sorted_orders[:top_n]
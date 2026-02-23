def calculate_subtotal_amount(items):
    subtotal = 0.0
    for name, qty, price in items:
        if qty < 0:
            continue

        if price < 0:
            price = 0.0

        subtotal += qty * price
    return subtotal

def clamp_discount_rate(rate):
    if rate > 0.30:
        return 0.30
    return rate

def calculate_discount_rate(is_vip, subtotal):
    rate = 0.0
    if is_vip:
        rate += 0.15

    if subtotal > 100:
        rate += 0.05
    return clamp_discount_rate(rate)


def calculate_shipping_cost(region, subtotal):
    if subtotal > 200:
        return 0.0

    region = (region or "").upper().strip()
    if region == "EU":
        return 7.0
    if region == "US":
        return 10.0
    if region == "UK":
        return 9.0
    return 12.0

def get_tax_rate_for_region(region):
    region = (region or "").upper().strip()
    if region == "EU":
        return 0.21
    if region == "US":
        return 0.07
    if region == "UK":
        return 0.20
    return 0.10

def calculate_total(subtotal, discount_rate, tax_rate, shipping_cost):
    discounted_subtotal = subtotal * (1 - discount_rate)
    taxed_amount = discounted_subtotal * (1 - tax_rate)
    return taxed_amount + shipping_cost
def calculate_subtotal_amount(item_lines):
    subtotal_amount = 0.0
    for item_name, quantity, unit_price in item_lines:
        if quantity <= 0:
            continue
        subtotal_amount += quantity * unit_price
    return subtotal_amount

def calculate_shipping_cost(region_code, subtotal_amount):
    match region_code:
        case "EU":
            base_cost = 7.0
        case "US":
            base_cost = 10.0
        case "UK":
            base_cost = 9.0
        case _:
            base_cost = 12.0

    return 0.0 if subtotal_amount >= 200 else base_cost

def get_tax_rate_for_region(region_code):
    match region_code:
        case "EU":
            return 0.21
        case "US":
            return 0.07
        case "UK":
            return 0.20
        case _:
            return 0.10
        
def calculate_total_amount(subtotal_amount, shipping_cost, tax_rate_value, discount_rate):
    discounted_subtotal = subtotal_amount * (1 - discount_rate)
    taxed_amount = discounted_subtotal * (1 + tax_rate_value)
    return taxed_amount + shipping_cost
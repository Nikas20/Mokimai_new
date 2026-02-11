import utils

def build_processed_order(order_record):
    if "order_id" not in order_record or "items" not in order_record:
        return None

    subtotal_amount = calculate_subtotal_amount(order_record["items"])

    if subtotal_amount == 0:
        add_tag_to_order(order_record, "INVALID-EMPTY")
        return None

    vip_rule = create_equals_rule("is_vip", True)
    eu_rule = create_equals_rule("region", "EU")

    apply_rule(order_record, vip_rule, lambda order: add_tag_to_order(order, "VIP"))
    apply_rule(order_record, eu_rule, lambda order: add_tag_to_order(order, "EU-CUSTOMER"))

    if order_record.get("is_vip"):
        discount_rate = 0.15
    elif subtotal_amount >= 100:
        discount_rate = 0.05
    else:
        discount_rate = 0.0

    discount_rate = clamp_discount_rate(discount_rate, minimum=0.0, maximum=0.25)

    region_code = order_record.get("region", "UNKNOWN")
    shipping_cost = calculate_shipping_cost(region_code, subtotal_amount)
    tax_rate_value = get_tax_rate_for_region(region_code)

    total_amount = calculate_total_amount(
        subtotal_amount,
        shipping_cost,
        tax_rate_value,
        discount_rate
    )

    return {
        "order_id": order_record["order_id"],
        "customer_name": order_record.get("customer_name", "UNKNOWN"),
        "region": region_code,
        "subtotal_amount": subtotal_amount,
        "discount_rate": discount_rate,
        "shipping_cost": shipping_cost,
        "tax_rate": tax_rate_value,
        "total_amount": total_amount,
        "tags": order_record.get("tags", []),
    }


def process_all_orders(order_records):
    processed_orders = []
    for order_record in order_records:
        processed_order = build_processed_order(order_record)
        if processed_order is None:
            continue
        processed_orders.append(processed_order)
    return processed_orders

def count_orders_by_field(order_records, field_name):
    counts = {}
    for record in order_records:
        field_value = record.get(field_name, "UNKNOWN")
        counts[field_value] = counts.get(field_value, 0) + 1
    return counts

def get_top_orders_by_numeric_field(order_records, number_of_orders=3, *, sort_field_name="total_amount"):
    sorted_orders = sorted(
        order_records,
        key=lambda order_record: order_record.get(sort_field_name, 0),
        reverse=True
    )
    return sorted_orders[:number_of_orders]
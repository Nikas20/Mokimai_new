from .calculations import (
    calculate_discount_rate,
    calculate_shipping_cost,
    calculate_subtotal_amount,
    calculate_total,
    get_tax_rate_for_region,
)

def add_tag_to_order(order, tag):
    if "tags" not in order:
        order["tags"] = []

    order["tags"].append(tag)

def build_processed_order(order):
    subtotal = calculate_subtotal_amount(order["items"])
    discount_rate = calculate_discount_rate(order.get("is_vip", False), subtotal)
    shipping_cost = calculate_shipping_cost(order.get("region", ""), subtotal)
    tax_rate = get_tax_rate_for_region(order.get("region", ""))
    total = calculate_total(subtotal, discount_rate, tax_rate, shipping_cost)

    return {
        "order_id": int(order.get("order_id", -1)),
        "customer_name": str(order.get("customer_name", "")),
        "region": str(order.get("region", "")),
        "subtotal_amount": float(subtotal),
        "discount_rate": float(discount_rate),
        "shipping_cost": float(shipping_cost),
        "tax_rate": float(tax_rate),
        "total_amount": float(total),
        "tags": list(order.get("tags", [])),
    }

def process_all_orders(orders):
    processed = []
    stats = {
        "original_orders_count": len(orders),
        "processed_orders_count": 0,
        "reviewed_item_lines": 0,
    }

    for order in orders:
        if order.get("order_id", None) is None:
            continue
        elif order.get("items", None)  is None:
            continue

        items = order.get("items", [])

        stats["reviewed_item_lines"] += 1

        if order.get("is_vip") is True:
            add_tag_to_order(order, "VIP")

        if str(order.get("region", "")).upper() == "EUR":
            add_tag_to_order(order, "EU-CUSTOMER")

        subtotal = calculate_subtotal_amount(items)
        if subtotal == 0:
            add_tag_to_order(order, "INVALID-EMPTY")
            continue
        

        po = build_processed_order(order)
        processed.append(po)
    stats["processed_orders_count"] = len(processed)
    return processed, stats
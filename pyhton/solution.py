processed_orders = process_all_orders(orders)

all_totals = [record["total_amount"] for record in processed_orders]
grand_total_amount = sum(all_totals)

high_value_orders = list(
    filter(lambda record: record["total_amount"] >= 500, processed_orders)
)

rounded_totals = list(
    map(lambda amount: round(amount, 2), all_totals)
)

item_line_counter = 0
for order_record in orders:
    for item_name, quantity, unit_price in order_record.get("items", []):
        if unit_price > 10000:
            break
        item_line_counter += 1

orders_by_region = count_orders_by_field(processed_orders, "region")

top_three_orders = get_top_orders_by_numeric_field(
    processed_orders,
    number_of_orders=3,
    sort_field_name="total_amount"
)

print("\nORDER PIPELINE REPORT")
print("=" * 72)
print(f"{'Processed orders':<20}: {len(processed_orders):>5d}")
print(f"{'Original orders':<20}: {len(orders):>5d}")
print(f"{'Item lines seen':<20}: {item_line_counter:>5d}")
print(f"{'Grand total':<20}: {format_money(grand_total_amount)}")
print(f"{'High value orders':<20}: {len(high_value_orders):>5d}")
print(f"{'Rounded totals sample':<20}: {str(rounded_totals[:5])}")

print("\nOrders by region")
print("-" * 72)
for region_code in sorted(orders_by_region):
    print(f"{region_code:<10} : {orders_by_region[region_code]:>3d}")

print("\nTop 3 orders")
print("-" * 72)
print(f"{'ID':>4}  {'CUSTOMER':<12}  {'REGION':<4}  {'TOTAL':>10}  TAGS")
print("-" * 72)

for record in top_three_orders:
    tags_text = ", ".join(record["tags"]) if record["tags"] else "-"
    print(
        f"{record['order_id']:>4}"
        f"{record['customer_name']:<12.12}"
        f"{record['region']:<4}"
        f"{record['total_amount']:>10.2f}"
        f"{tags_text}"
    )

print("\nDONE.\n")

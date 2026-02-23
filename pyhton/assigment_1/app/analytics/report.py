from .utils import count_orders_by_field, get_top_orders_by_numeric_field

def print_report(processed_orders, stats):
    total_sum = sum(o.get("total_amount", 0.0) for o in processed_orders)

    by_region = count_orders_by_field(processed_orders, field="region")
    top3 = get_top_orders_by_numeric_field(processed_orders, field="total_amount", top_n=3)

    high_value_count = sum(1 for o in processed_orders if float(o.get("total_amount", 0.0)) > 500)

    print("Originalių užsakymų:", stats.get("original_orders_count"))
    print("Apdorotų užsakymų:", stats.get("processed_orders_count"))
    print("Peržiūrėtų item eilučių:", stats.get("reviewed_item_lines"))
    print("Bendra suma:", round(total_sum, 2))
    print("Pagal regioną:", by_region)
    print("Top 3 pagal total_amount:")
    for o in top3:
        print("  order_id=", o.get("order_id"), "region=", o.get("region"), "total=", round(o.get("total_amount", 0.0), 2))
    print("Aukštos vertės (>=500) užsakymų:", high_value_count)
def add_tag_to_order(order_record, tag_text):
    existing_tags = order_record.get("tags")
    if existing_tags is None:
        order_record["tags"] = [tag_text]
    else:
        existing_tags.append(tag_text)

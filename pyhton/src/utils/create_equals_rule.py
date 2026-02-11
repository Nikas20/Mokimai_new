def create_equals_rule(field_name, /, expected_value):
    def rule(order_record):
        return order_record.get(field_name) == expected_value
    return rule
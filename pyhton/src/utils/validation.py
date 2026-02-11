def create_equals_rule(field_name, /, expected_value):
    def rule(order_record):
        return order_record.get(field_name) == expected_value
    return rule

def apply_rule(order_record, predicate_function, action_function):
    if predicate_function(order_record):
        action_function(order_record)

def apply_rule(order_record, predicate_function, action_function):
    if predicate_function(order_record):
        action_function(order_record)

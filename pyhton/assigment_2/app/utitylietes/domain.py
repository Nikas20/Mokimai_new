def test(payments):
    for payment in payments:
        if payment.get("payment_id", None) is None:
            payment["status"] = False
        elif payment.get("amount", 0)<= 0:
            payment["status"] = False
    return payments

def test_all(payments):
    new_payments = test(payments)
    for payment in new_payments:
        if payment["status"] == False:
            continue
        print(payment)





# def test2(payment):
#     if "notes" not in payment:
#         payment["notes"] = []
#     else: 
#         payment["notes"].append("mew")
#         print(payment["notes"])
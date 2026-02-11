from data import orders 
from core import process_all_orders 
from utils import format_money

def main():
    processed_orders = process_all_orders(orders)
    all_totals = [record["total_amount"] for record in processed_orders]

    
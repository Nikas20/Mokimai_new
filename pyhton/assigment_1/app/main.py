from data import *
from services import process_all_orders
from analytics.report import print_report

def main():
    processed, stats = process_all_orders(orders)
    print_report(processed, stats)

if __name__ == "__main__":
    main()
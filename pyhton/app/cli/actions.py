from ..services import register_user
from ..reports import show_users_table, show_statistics, show_usernames, show_domain_report, show_adults, show_emails
from ..features import search_user_by_username, show_users_sorted_by_age

actions = {
    1: register_user,
    2: show_users_table,
    3: search_user_by_username,
    4: show_statistics,
    5: show_usernames,
    6: show_domain_report,
    7: show_adults,
    8: show_emails,
    9: show_users_sorted_by_age
}
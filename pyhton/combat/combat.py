# TODO (1.7): define a function attack(attacker, defender, damage
from character import *
def attack(attacker, defender, damage):
# - print who attacks who and for how much damage
    print(f"{attacker.name} attacks  {defender.name} for {damage} damage")
# - call defender.take_damage(damage)
    defender.take_damage(damage)
# - call defender.show_status() (or equivalent)
    if defender is Character:
        defender.show_profile()
    elif defender is Monster:
        defender.show_status()
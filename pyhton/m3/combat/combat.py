def attack(attacker, defender, damage):
    print(f"{attacker.name} attacks {defender.name} for {damage} damage")
    defender.take_damage(damage)
    defender.show_status()
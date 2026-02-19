from character.character import Character
from character.monster import Monster
from combat.combat import attack

def main():
    hero = Character("Petras")
    
    goblin = Monster.create_goblin()

    goblin.attack( hero, 100)

    dropped_item = goblin.drop_loot()
    if dropped_item:
        print(f"Goblin dropped: {dropped_item}")

if __name__ == "__main__":
    main()
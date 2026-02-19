from .entity import Entity
class Monster(Entity):

    def __init__(self, name):
        super().__init__(name)
        self.loot = []

    def show_status(self):
        print(f"Monster: {self.name}")
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")

    @classmethod
    def create_goblin(cls):
        goblin = cls("Goblin")
        goblin.loot = ["Bronze Sword", "Gold Coin"]
        return goblin
    
    @staticmethod
    def is_valid_damage(amount):
        return amount > 0
    
    def attack(self, character, damage):
        if not Monster.is_valid_damage(damage):
            print("Invalid damage amount")
            return

        print(f"{self.name} attacks {character.name} for {damage} damage")
        character.take_damage(damage)

    def drop_loot(self):
        if self.is_alive():
            return None

        if self.loot:
            return self.loot.pop(0)

        return None
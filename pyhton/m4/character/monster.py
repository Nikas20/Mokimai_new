class Monster:
    max_health = 100

    def __init__(self, name, loot):
        self.name = name
        self.__health = Monster.max_health
        self.loot = loot if loot is not None else []

    @property
    def health(self):
        return self.__health

    def take_damage(self, amount):
        self.__health -= amount
        if self.__health < 0:
            self.__health = 0

    def is_alive(self) -> bool:
        return self.__health > 0

    def show_status(self):
        print(f"Monster: {self.name}")
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")


    @classmethod
    def create_goblin(cls):
        default_loot = ["Bronze Sword", "Gold Coin"]
        return cls("Goblin", loot = default_loot)

    @staticmethod
    def is_valid_damage(amount):
        return amount > 0
    
    def attack(self, character, damage):
        if self.is_valid_damage(damage):
            print(f"{self.name} attacks {character.name} for {damage} damage")
            character.take_damage(damage)
        else:
            print("Invalid damage amount")

    def drop_loot(self):
        if self.is_alive():
            return None

        if self.loot:
            return self.loot.pop(0)

        return None


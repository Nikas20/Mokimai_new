class Monster:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.__health = Monster.max_health
        self.loot = []

    # TODO (2.2): add @property health health(self)
    @property
    def health(self):
        return self.__health

    def take_damage(self, amount):
        self.__health -= amount
        if self.__health < 0:
            self.__health = 0

    def is_alive(self) -> bool:
        return self.__health > 0

    # TODO (2.2): add @property health
    def show_status(self):
        print(f"Monster: {self.name}")
        # TODO (2.2): replace get_health() with self.health (property access)
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")
    
    def attack(self, character, damage):
        print(f"{self.name} attacks {character.name} for {damage} damage")
        character.take_damage(damage)

    def drop_loot(self):
        if self.is_alive():
            return None

        if self.loot:
            return self.loot.pop(0)

        return None


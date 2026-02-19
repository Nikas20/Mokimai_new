class Monster:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.__health = Monster.max_health
        self.loot = []

    def get_health(self):
        return self.__health
    
    def set_health(self, new_health):
        self.__health = new_health

    def take_damage(self, amount):
        self.set_health(self.get_health()- amount)
        if self.get_health() < 0:
            self.set_health(0)

    def is_alive(self):
        return self.get_health() > 0

    def show_status(self):
        print(f"Monster: {self.name}")
        print(f"Health: {self.get_health()}")
        print(f"Alive: {self.is_alive()}")
    
    def attack(self, character, damage):
        print(f"{self.name} attacks {character.name} for {damage} damage")
        character.take_damage(damage)

    def drop_loot(self):
        if self.is_alive:
            return None

        if self.loot:
            return self.loot.pop(0)

        return None


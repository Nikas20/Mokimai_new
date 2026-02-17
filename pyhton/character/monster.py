class Monster:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.health = Monster.max_health

    def take_damage(self, amount):
        self.health -= amount
        if self.health < 0:
            self.health = 0

    def is_alive(self):
        return self.health > 0

    def show_status(self):
        print(f"Monster: {self.name}")
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")

# monster = Monster("Goblin")

# monster.show_status()
# monster.take_damage(120)
# monster.show_status()
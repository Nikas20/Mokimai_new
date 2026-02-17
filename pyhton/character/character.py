class Character:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.level = 1
        self.health = Character.max_health

    def show_name(self):
        print(self.name)

    def show_profile(self):
        print(f"Name: {self.name}")
        print(f"Level: {self.level}")
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")
        print("\n")

    def take_damage(self, amount):
        self.health -= amount
        if self.health < 0:
            self.health = 0

    def heal(self, amount):
        self.health += amount
        if self.health > Character.max_health:
            self.health = Character.max_health

    def is_alive(self):
        return self.health > 0

# character1 = Character("Petras")
# character2 = Character("Marta")

# character1.take_damage(20)
# character1.heal(50)

# character1.show_profile()
# character2.show_profile()

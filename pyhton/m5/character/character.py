from .entity import Entity

class Character(Entity):

    def __init__(self, name):
        super().__init__(name)
        self.level = 1
        self.experience = 0

    def show_name(self):
        print(self.name)

    def show_profile(self):
        print(f"Name: {self.name}")
        print(f"Level: {self.level}")
        print(f"Health: {self.health}") 
        print(f"Alive: {self.is_alive()}")
        print("\n")

    def show_status(self):
        print(f"Name: {self.name}")
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")

    def gain_experience(self, amount):
        self.experience += amount
        while self.experience >= 100:
            self.experience -= 100
            self.level += 1
class Character:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.level = 1
        self.__health = Character.max_health
        self.experience = 0

     # TODO (2.2): add @property health
    @property
    def health(self):
        return self.__health

    def show_name(self):
        print(self.name)

    def show_profile(self):
        print(f"Name: {self.name}")
        print(f"Level: {self.level}")
        # TODO (2.2): replace get_health() with self.health (property access)
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")
        print("\n")

    def show_status(self):
        print(f"Name: {self.name}")
        # TODO (2.2): replace get_health() with self.health (property access)
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")

    def take_damage(self, amount):
        self.__health -= amount
        if self.__health < 0:
            self.__health = 0

    def heal(self, amount):
        self.__health += amount
        if self.__health > Character.max_health:
            self.__health = Character.max_health

    def is_alive(self):
        return self.__health > 0

    def gain_experience(self, amount):
        self.experience += amount
        while self.experience >= 100:
            self.experience -= 100
            self.level += 1
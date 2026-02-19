class Character:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.level = 1
        self.__health = Character.max_health
        self.experience = 0

    def get_health(self):
        return self.__health
    
    def set_health(self, new_health):
        self.__health = new_health

    def show_name(self):
        print(self.name)

    def show_profile(self):
        print(f"Name: {self.name}")
        print(f"Level: {self.level}")
        print(f"Health: {self.get_health()}")
        print(f"Alive: {self.is_alive()}")
        print("\n")

    def show_status(self):
        print(f"Name: {self.name}")
        print(f"Health: {self.get_health()}")
        print(f"Alive: {self.is_alive()}")

    def take_damage(self, amount):
        self.set_health(self.get_health() - amount)
        if self.get_health() < 0:
            self.set_health(0)

    def heal(self, amount):
        self.set_health(self.get_health() + amount)
        if self.get_health() > Character.max_health:
            self.set_health(Character.max_health)

    def is_alive(self):
        return self.get_health() > 0
    
    def gain_experience(self, amount):
        self.experience += amount

        while self.experience >= 100:
            self.experience -= 100
            self.level += 1
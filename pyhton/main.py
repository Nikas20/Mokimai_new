class Character:

    species = "Lelf"
    max_health = 100

    def __init__(self, name):
        self.name = name

        self.level = 1
        self.health = Character.max_health

    def show_name(self):
        print(f"{self.name}")

    def is_alive(self):
        if(self.health > 0):
            return True
        else:
            return False

    def show_profile(self):
        print(f"Name: {self.name}")
        print(f"Level: {self.level}")
        print(f"Health: {self.health}")
        if self.is_alive():
            print("Alive")
        else:
            print("Death")

    def take_damage(self, amount):
        if (amount >= self.health):
            self.health = 0
        else:
            self.health = self.health - amount

    def heal(self, amount):
        if((amount + self.health) >= Character.max_health):
            self.health = 100
        else:
            self.health = amount + self.health


character1 = Character("Shalar")
character2 = Character("Korial")

character1.take_damage(60)
character1.show_profile()
character1.heal(130)
character1.show_profile()


# character1.show_name()
# character2.show_name()

# character1.show_profile()
# character2.show_profile()
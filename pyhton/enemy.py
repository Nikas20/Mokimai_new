class Monster:

    species = "Lerk"
    max_health = 100

    def __init__(self,name):
        self.name = name
        self.health = Monster.max_health

    def take_damage(self,amount):
        self.health -= amount
        if self.health < 0:
            self.health = 0

    def is_alive(self):
        if self.health > 0:
            return True
        return False
    
    def show_status(self):
        print(f"Monster: {self.name}")
        print(f"Health: {self.health}")
        print(f"Alive: {self.is_alive()}")


mob1 = Monster("Bob")

mob1.show_status()

mob1.take_damage(10)

mob1.show_status()
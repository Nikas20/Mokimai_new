class Entity:
    max_health = 100

    def __init__(self, name):
        self.name = name
        self.__health = Entity.max_health

    @property
    def health(self):
        return self.__health

    def take_damage(self, amount):
        self.__health -= amount
        if self.__health < 0:
            self.__health = 0

    def heal(self, amount):
        self.__health += amount
        if self.__health > Entity.max_health:
            self.__health = Entity.max_health

    def is_alive(self):
        return self.__health > 0
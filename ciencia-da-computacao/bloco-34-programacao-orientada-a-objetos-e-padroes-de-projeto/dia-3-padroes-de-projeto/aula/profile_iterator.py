from _collections_abc import Iterable, Iterator


class ProfileIterator(Iterator): # nosso iterator
    def __init__(self, friends):
        self.__friends = friends
        self.__index = 0

    def __next__(self):
        try:
            current_value = self.__friends[self.__index]
            while current_value[0] != "C":
                self.__index += 1
                pass
        except IndexError:
            # Exceção lançada quando não há mais elementos a serem iterados
            raise StopIteration()
        else:
            self.__index += 1
            return current_value

class SocialNetwork(Iterable): # quem vai fazer a iteração, com todos os dados que o __next percorreu
    def __init__(self, friends):
        self.friends = friends

    def __iter__(self):
        return ProfileIterator(self.friends) # chamada dados da classe Profileiterator


network = SocialNetwork(["Carlos", "Cristiano", "Maria", "Tulio"])
for profile in network:
    print(profile)


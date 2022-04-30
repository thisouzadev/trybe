from abc import ABC, abstractmethod


class MediaPlayer:
    def __init__(self, player):
        self.__player = player  # podemos o nosso play para rodar nosa musica

    def execute(self):
        self.__player.play()


class Target(ABC):
    @abstractmethod         # porque ela é a classe que recebe o adaptador
    def play(self):         #  ela trabalha para atender necessidades e ela só é/pode herdada
        raise NotImplementedError    # por outras que utilizam seus recursos


class AudioPlayer(Target):
    def play(self):             # utiliza o recurso target para rodar o audio, usamos target
        print("Play audio")     # para gerenciar o nosso play


class VideoAdapter(Target):
    def __init__(self, adaptee):    # inicia serviço de forma adaptada
        self.__adaptee = adaptee     # serviço de adaptação que roda mp4

    def play(self):
        # aqui viria a lógica de adaptação
        self.__adaptee.play_mp4()


class VideoPlayer:
    def play_mp4(self):
        print("Play MP4")


MediaPlayer(AudioPlayer()).execute()
MediaPlayer(VideoAdapter(VideoPlayer())).execute()

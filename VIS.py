fileWithPlayers = [
    {
        "playerName": "Bruninho",
        "number": 1
    },
    {
        "playerName": "Lucao",
        "number": 12
    },
    {
        "playerName": "Giba",
        "number": 10
    }
]

class Team:
    def __init__(self, team_name, players):
        self.name = team_name
        self.players = players

    def print_properties(self):
        print("Name: ", self.name)
        print("Players: ", self.players)

# class Athelet:
class Player:
    def __init__(self, player_name, number):
        self.name = player_name
        self.number = number

    def print_properties(self):
        print("I am ", self.name)
        print("My number is ", self.number)

team = Team("Sada", ["Joao", "Jose", "Josis"])
team.print_properties()


print("Hello, Welcome to Volleyball Information System.")



player = Player("Joao", 1)
player.print_properties()

def para_cada(objeto_a_serMapeado):
    name = objeto_a_serMapeado["playerName"]
    number = objeto_a_serMapeado["number"]
    return Player(name, number)

lista_jogadores_sada = map(para_cada, fileWithPlayers)

print(lista_jogadores_sada)

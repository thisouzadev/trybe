## criar ambiente virtual, mostra a pasta bin para o pessoal:

----------- python3 -m venv .venv 
----------- source .venv/bin/activate

## instalar o black e flake8

----------- pip install flake8 black

## conferir no venv se esta certo...



---------------------criar importer
import json


def import_games(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)
    except json.JSONDecodeError:
        print("problerma de arquivo")
    except FileNotFoundError:
        print("arquivo num encontrado")


if __name__ == "__main__":
    games = import_games("video_games.json")
    print(len(games))

==============================================================
----------------criar analyzer.py

from importer import import_games


def get_consoles(video_games):
    consoles = set()
    for game in video_games:
        consoles.add(game["Release"]["Console"])
    return consoles


def sales_by_console(video_games):
    result = {console: 0 for console in get_consoles(video_games)}

    for game in video_games:
        game_console = game["Release"]["Console"]
        result[game_console] += game["Metrics"]["Sales"]

    return result


if __name__ == "__main__":
    games = import_games("video_games.json")
    print(sales_by_console(games))

==============================================================
==============================================================
----------------criar exporter.py
import csv


def export_data(data):
    with open("report.csv", mode="w") as file: # modo escrever 
        report_writer = csv.writer(file) # modo escrita
        for key, value in data.items(): # lembramos pegamos a chave e o valor, escolhi os
            report_writer.writerow([key, value])


if __name__ == "__main__":
    export_data({"c": "v", 123: 456})

==============================================================
----------------criar menu.py
from analyzer import sales_by_console
from importer import import_games
from exporter import export_data

START_MENU = """
1 - Vendas por Console
2 - Sair
"""

if __name__ == "__main__":
    games = import_games("video_games.json")
    option = input(START_MENU)
    if option == "1":
        export_data(sales_by_console(games))
        print("Pronto! Salvei no arquivo 'report.csv'")
    elif option == "2":
        print("Saindo, me deixa em paz por favor")
    else:
        print("Não conheço essa opção")

















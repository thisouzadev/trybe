carros = ["fusca", "gol", "brasilia", "ferrari", "variant"]

itCarros = iter(carros)

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        print("Acabou a bagaceira")

"break"

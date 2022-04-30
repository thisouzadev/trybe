# Iterator anda em uma lista no caso do python, em tese anda pra frente de uma lista e manda controla com o next...

vamos criar uma colação de carros:

carros = ["fusca", "gol", "brasilia", "ferrari", "variant"]

for c in carros:
    print(c)


Nó podemos utlizar o recurso/objeto para percorrer a lista e andar pra frente na lista:

itCarros=iter(carros) # note que itCarros virouum iterator para carros nesse momento

# Se eu quiser percorrer a lista de carros usando o iterator faço assim:

carros = ["fusca", "gol", "brasilia", "ferrari", "variant"]

itCarros = iter(carros)

print(next(itCarros)) # imprime 5 vezes ou mais..

#lembrando que o iteradtor faz uso do __iter__ e tbm do __next__

# dessa forma o iterator passa em todos os itens sem problemas, mas seu eu pedir um unico print ele só manda o item inicial..

# se eu imprimi tudo e acabou o iterator fala pra mim que ja deu vc num tem mais nada...

# podemos usar o try para tratar execeções possiveis que ocorram

# como seria usando o while 

carros=["fusca","gol","brasilia","ferrari","variant"]
i=0
while i<5:
    print(carros[i])
    i+=1

# eu tbm poderia usar o iterator junto com o while:

carros=["fusca","gol","brasilia","ferrari","variant"]
itCarros=iter(carros)

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        print("Acabou a bagaceira")

#coloca um 

break




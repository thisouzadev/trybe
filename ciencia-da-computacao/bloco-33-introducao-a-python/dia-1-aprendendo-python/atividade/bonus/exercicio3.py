# Exercício 3: Crie uma função que receba um número inteiro N e
# retorne o somatório de todos os números de 1 até N .
# Por exemplo, para N = 5 , o valor esperado será 15 .

def summation(limit):
    return sum(range(1, limit + 1))


print(summation(5))

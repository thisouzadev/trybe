-- O GROUP BY pode ser construído da seguinte forma:
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

-- Porém é mais comum utilizar o GROUP BY em conjunto com o AVG , MIN , MAX , SUM ou COUNT .
-- Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado,
-- podemos usar o COUNT() . Assim, teremos uma informação mais fácil de ser compreendida.

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- Praticando GROUP BY

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que 
-- estão ativos e a quantidade que estão inativos.

SELECT active, COUNT(*) 
FROM sakila.customer
GROUP BY active;
-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e
-- inativos por loja. Os resultados devem conter o ID da loja , 
-- o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa 
-- ( rating ) dos filmes cadastrados na tabela sakila.film . 
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(rental_duration) AS avg_rental_duration FROM sakila.film
group by rating
ORDER BY avg_rental_duration DESC;
-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a
-- quantidade de endereços registrados nele. Os resultados devem ser ordenados da 
-- maior quantidade para a menor.
SELECT district, COUNT(address) AS endereço FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

-- Filtrando Resultados do GROUP BY com HAVING
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. 
-- Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , 
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

    SELECT rating, AVG(length) AS duracao_media
    FROM sakila.film
    GROUP BY rating
    HAVING duracao_media BETWEEN 115.0 AND 121.50
    ORDER BY duracao_media DESC;

-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão
-- acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) ,
-- de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

    SELECT rating, SUM(replacement_cost) AS `custo de reposição`
    FROM sakila.film
    GROUP by rating
    HAVING `custo de reposição` > 3950.50
    ORDER BY `custo de reposição` ASC;
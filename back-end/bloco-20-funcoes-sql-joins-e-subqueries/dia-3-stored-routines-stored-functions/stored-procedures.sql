-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
-- Essa procedure não deve receber parâmetros de entrada ou saída e,
-- quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
    SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL ShowTop10Actors();
-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria
-- desejada em uma string e que exiba o id do filme , seu titulo ,
-- o id de sua categoria e o nome da categoria selecionada. Use as tabelas film ,
-- film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$

CREATE PROCEDURE nomeDaCategoriaDesejada(in categoria VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
    FROM film AS f
    INNER JOIN film_category AS fc
    ON fc.film_id = f.film_id
    INNER JOIN category AS c
    ON c.category_id = fc.category_id
    WHERE c.name = categoria;
END $$
DELIMITER ;

CALL nomeDaCategoriaDesejada('Action');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga
-- se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckIfActiveClient(
    IN client_email VARCHAR(200),
    OUT isActive BOOL
)
BEGIN
    SET isActive = (
        SELECT active
        FROM sakila.customer
        WHERE email = client_email
    );
END $$

DELIMITER ;
SELECT @ActiveStatus;
CALL CheckIfActiveClient('LINDA.WILLIAMS@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;

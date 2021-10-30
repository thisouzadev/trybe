SET SQL_SAFE_UPDATES = 0;

DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;

TRUNCATE banco_de_dados.tabela;

-- Vamos praticar o DELETE
-- Exclua do banco de dados o ator com o nome de "KARL".
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Em seguida, apague as referências
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM sakila.film_text 
WHERE `description` LIKE '%saga%';
-- Apague da maneira mais performática possível todos os registros das tabelas film_actor 
-- e film_category .
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições
-- ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).
-- DROP SCHEMA!!!
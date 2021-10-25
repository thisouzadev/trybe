-- Monte uma query que exiba seu nome na tela;
SELECT 'Thiago';
-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'thiago', 'Souza', 'rio de janeiro', 29 ;
-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL 
-- ( alias é como um apelido no português);
SELECT 'thiago' AS 'nome', 'Souza' AS 'sobrenome', 'rio de janeiro' AS 'cidade natal', 29 AS 'idade' ;
-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13*8;
-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';










-- Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações,
-- montando uma query para cada uma:
-- Escreva uma query que selecione todas as colunas da tabela city ;
SELECT * FROM sakila.city;

-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
SELECT first_name, last_name FROM sakila.customer;

-- Escreva uma query que exiba todas as colunas da tabela rental ;
SELECT * FROM sakila.rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes 
-- registrados na tabela film ;
SELECT title, description, release_year FROM sakila.film;

-- Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT * FROM sakila.nome_da_tabela;

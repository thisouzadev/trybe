-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
USE Pixar;
INSERT INTO Movies(title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
		('Procurando Nemo', 'John Lasseter', 2003, 107),
		('Os Incríveis', 'Brad Bird', 2004, 116),
		('WALL-E', 'Pete Docter', 2008, 104 );

-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, 
-- fez 450 milhões no mercado interno e 370 milhões no mercado internacional. 
-- Adicione as informações à tabela BoxOffice .
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUE (9, 6.8, 450000000, 370000000);

-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele 
-- foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .
SET SQL_SAFE_UPDATES = 0;
UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = "Procurando Nemo";
-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies 
-- , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
UPDATE Movies
SET title = "Ratatouille" , year = 2007
WHERE title = 'ratatui';

-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , 
-- lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES (16, 8.5, 300000000, 250000000),
(18, 7.4, 460000000, 510000000),
(19, 9.9,290000000, 280000000);

-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".
SELECT * FROM Movies
WHERE title = 'WALL-E';
DELETE FROM BoxOffice
WHERE movie_id = 11;
DELETE FROM Movies
WHERE title = 'WALL-E';

-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
SELECT * FROM Movies
WHERE director = 'Andrew Staton';

DELETE FROM BoxOffice
WHERE movie_id in (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';


-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff
-- e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos 
-- para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser
-- inseridos manualmente. Boa explorada!
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('thiago', 'Souza', 1, 'thiagodesouza.dev@gmail.com', 1, 1, 'thisouza', 'the068745');

-- Feito o exercício anterior, vamos agora para o nível 2. 
-- Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
 ('thiago', 'Souza', 1, 'thiagodesouza.dev@gmail.com', 1, 1, 'thisouza', 'the068745')
 ('nath', 'Souza', 1, 'nathdesouza.dev@gmail.com', 1, 1, 'nathsouza', 't1254745');
-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e 
-- cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
LIMIT 5;
-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name)
VALUES ('show'),
('popo'),
('carla');
-- Cadastre uma nova loja na tabela sakila.store .
INSERT IGNORE INTO sakila.store (manager_staff_id, address_id)
VAlUES (3, 3);


-- Inserindo várias linhas de uma vez
-- É possível inserir múltiplas linhas em uma tabela com uma única query :

INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');

INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;


-- INSERT SELECT (Inserindo dados de uma outra tabela)
-- É possível inserir dados a partir de outra tabela usando INSERT INTO SELECT :

INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;


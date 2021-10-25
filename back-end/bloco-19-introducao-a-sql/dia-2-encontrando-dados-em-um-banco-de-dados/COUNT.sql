-- Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM sakila.staff;
-- Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(active) FROM sakila.staff;
-- Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM sakila.staff;
-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , 
-- ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, ROUND(AVG(salary), 2) as salario_media FROM hr.employees
GROUP BY JOB_ID
ORDER BY salario_media DESC;
-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o
-- pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;
-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário,
-- a soma de todos os salários e a média dos salários.
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, COUNT(*)
FROM hr.employees
WHERE JOB_ID = 'IT_PROG ';
-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar
-- o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, SUM(salary)
FROM hr.employees
WHERE JOB_ID = 'IT_PROG ';
-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente 
-- a quantidade de dinheiro necessária para cobrir a folha de 
-- pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(salary)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG ';
-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos,
-- exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, ROUND(AVG(salary), 2) AS media_salarial FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media_salarial DESC;
-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos 
-- os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT DEPARTMENT_ID, ROUND(AVG(salary), 2), COUNT(*) AS `numero_de_empregados`
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING `numero_de_empregados` > 10;
-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER ,
-- de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE hr.employees
SET  PHONE_NUMBER = replace(phone_number, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';
-- 12. Escreva uma query que só exiba as informações dos funcionários cujo 
-- o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE FIRST_NAME LIKE '________%'
ORDER BY FIRST_NAME;
-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;
-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;
-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

SELECT employee_id, first_name,
    SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;
-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT ucase(FIRST_NAME) FROM hr.employees;
-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os
-- funcionário contratados em julho de 1987.
SELECT LAST_NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE BETWEEN '1987-07-01' AND '1987-07-31';

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7 and YEAR(HIRE_DATE) = 1987;
-- 18: Escreva uma query que exiba as seguintes informações de cada 
-- funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT FIRST_NAME, LAST_NAME, datediff(CURRENT_DATE(), HIRE_DATE) FROM hr.employees;
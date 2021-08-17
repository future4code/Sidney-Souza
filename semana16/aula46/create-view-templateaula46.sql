--## Exercício 1-A
--Excluia coluna que contém os salários da tabelaactor

--1-b
--Altera o nome da coluna "gebder"para "sex" e recebe  uma string de até 6 caracteres.

--1-c
--Altera o nome da coluna "gebder"parareceber uma string de até255 caracteres.

--1-d
ALTER TABLE Actor CHANGE gende gender VARCHAR(100);     

--## Exercício 2-A
-- UPDATE Actor SET name = "Penelope",birthday_date = "1986-06-30" WHERE id = "003"

--2-b
-- UPDATE Actor SET name = "Juliana Paes" WHERE name JULIANA PAES;
-- UPDATE Actor SET name = "JULIANA PAES" WHERE name Juliana Paes;

--2-c
-- UPDATE Actor SET name = "Naruto",birthday_date = "1986-06-30",salary = 200000,gender = "male" WHERE id = "005";
-- UPDATE Actor SET name = "Kate" WHERE id = "123"

--## Exercício 3-A
--DELETE FROM Actor WHERE id = 3

--3-b
--DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

--## Exercício 4-A
--SELECT MAX(salary) FROM Actor;

--4-b
--SELECT MIN(salary) FROM Actor WHERE gender = "female"

--4-c
--SELECT COUNT(*) FROM Actor WHERE gender = "female"

--4-d
--SELECT SUM(salary) FROM Actor
--conte todas 
--## Exercício 5-A
--## Exercício 6-A
--## Exercício 7-A
--## Exercício 8-A
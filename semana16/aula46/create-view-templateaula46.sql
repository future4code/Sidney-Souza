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

--## Exercício 5-A


--5-b
--SELECT id, name FROM Actor ORDER BY name DESC;

--5-c
--SELECT * FROM Actor ORDER BY salary;

--5-d SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

--5-e
--SELECT AVG(salary), gender FROM Actor GROUP BY gender;

--## Exercício 6-A
--ALTER TABLE Movie ADD playing_limit_date DATE;

--6-b
--ALTER TABLE Movie CHANGE rating rating FLOAT;


--6-c
--UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"


--6-d
--DELETE FROM Movie WHERE id = "001"

--## Exercício 7-A
--SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

--7-b
--SELECT AVG(rating) FROM Movie;

--7-c
--SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

--7-d
--SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

--7-e
--SELECT MAX(rating) FROM Movie;

--7-f
--SELECT MIN(rating) FROM Movie;


--## Exercício 8-A
--SELECT * FROM Movie ORDER BY title;

--8-b
--SELECT * FROM Movie ORDER BY title LIMIT 5;

--8-c
--SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;

--8-d
--SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
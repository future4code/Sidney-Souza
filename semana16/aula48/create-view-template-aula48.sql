--## Exercício 1-A
-- È a chave que permite a referência a registros oriundos de outras tabelas. 

--1-b

/*
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
*/
--1-c

/*
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"123",
    "horrível!",
    2,
	"004"
);
*/

--1-d
--ALTER TABLE Movie DROP COLUMN rating;

--## Exercício 2-A
--cria uma tabela com duas colunas referenciado a FOREIGN KEY (id) das tabelas movie e actor

--2-b
/*
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)
*/

--2-c
--2-d
--2-e
--## Exercício 3-A
--3-b
/*
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
*/
--3-c
--3-d
--3-e
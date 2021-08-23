CREATE TABLE ACTOR (
	id VARCHAR(255) PRIMARY KEY,
	name  VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL 
);
/*
## Exercício 1-a
- VARCHAR para caractere e variaveis restringindo a (255) ;
- PRIMARY KEY identificador unico;
- NOT NULL para fixar como obrigatório e não opcional;
- DATE representa data.

#B
SHOWDATABASES retorna os nomes de cada database.
TABLES retorna tabela existente na schema

#C
Nenhuma tabela com nome "ACTOR"
*/
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

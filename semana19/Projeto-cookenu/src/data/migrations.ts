import { connection } from "./connection";

connection.raw(`
   CREATE TABLE IF NOT EXISTS user (
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL,
      senha VARCHAR(64) NOT NULL,
      role ENUM("NORMAL", "ADMIN")
   );
   CREATE TABLE IF NOT EXISTS receitas (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    preparation VARCHAR(1024) DEFAULT
    author_id VARCHAR(64),
      FOREIGN KEY (author_id) REFERENCES user(id)
    );

`).then(() => {
    console.log("Tabelas criadas!");
}).catch((error: { sqlMessage: any; message: any; }) => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})
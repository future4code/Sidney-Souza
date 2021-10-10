import { BaseDatabase } from "./beseDataBase";


const printError = (error: any) => { console.log(error.sqlMessage || error.message) };

class Migrations extends BaseDatabase {
    public static createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
        CREATE TABLE IF NOT EXISTS Client (
          id VARCHAR(255) PRIMARY KEY NOT NULL,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          cpf VARCHAR(11) NOT NULL UNIQUE,
          password VARCHAR(11) NOT NULL,
          role VARCHAR(11) NOT NULL,
          endereco VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Walkers (
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        cpf VARCHAR(11) NOT NULL UNIQUE,
        endereco VARCHAR(255) NOT NULL
    );
      
    CREATE TABLE IF NOT EXISTS Pets (
      id VARCHAR(255) PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      raca VARCHAR(255) NOT NULL ,
      porte VARCHAR(11) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Tour (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    amount FLOAT NOT NULL,
    status ENUM("Dog Walking") DEFAULT "CREATED",
    data de agendamento VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    duração ENUM("30 minutes", "60 minutes") DEFAULT "CREATED",
    latitude VARCHAR(255) NOT NULL,
    longitude VARCHAR(255) NOT NULL,
    walkers VARCHAR(255) NOT NULL,
    petsid VARCHAR(255) NOT NULL,
    clientId VARCHAR(255) NOT NULL,
    FOREIGN KEY (petsid) REFERENCES Pets(id),
    FOREIGN KEY (clientId) REFERENCES Pets(id)
);
    `)   

    .then(() => console.log("Tables created successfully!"))
            .catch(printError);
  };
  public static closeConnection(): Promise<void> {
    return BaseDatabase.connection.destroy();
}
};


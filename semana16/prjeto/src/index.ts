import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Request, Response } from "express";
import {connection} from './connection'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) =>{
    const result = await connection.raw("SHOW TABLES")
    console.log(result);
    res.send("HELLO FROM EXPRESS!")
});

app.put("/users", async (req, res) =>{
    try{

        await connection.raw(`
        INSERT INTO users (id, name, nickname, email)
        VALUES(
        ${Date.now().toString()},
        "${req.body.name}",
        "${req.body.nickname}",
        "${req.body.email}"
        );
   `)

   res.status(201).send("Created")
    }catch(error){
        console.log(error);

        res.status(500).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
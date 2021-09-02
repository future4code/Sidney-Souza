import {Request, Response} from "express";
import insertUser from "../data/insertUser";


export default async function createUser(
    req: Request,
    res: Response
){
    try{
        const { name, email, age} = req.body
        if(
            !name || !email|| !age 
            ){
                res.status(400)
                .send("Preencha todos os campos corretamente!")
        }
        const id:string = Date.now()  +Math.random().toString()
        
        
        await insertUser(
            id, name,  email,  age 
        )

        {
            res.status(200)
            .send("Usuário criado com sucesso!")
     }
            
    }catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}




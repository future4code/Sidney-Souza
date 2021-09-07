import {Request, Response} from "express";
import { UserDatabase,} from "../class/classUsers";
import InsertUser from "../data/insertUser";



export default async function createUser(
    req: Request,
    res: Response
):Promise<void>{
    try{
        const { name, email, age} = req.body
        {
                res.status(400)
                .send("Preencha todos os campos corretamente!")
        }
        const id:string = Date.now()  +Math.random().toString()

       
       
        
         const Userdb = new UserDatabase(id, name, email, age)
         Userdb.insertUser(UserDatabase)


        /*await insertUser(
            id, name,  email,  age 
        )
*/
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



function User(User: any) {
    throw new Error("Function not implemented.");
}


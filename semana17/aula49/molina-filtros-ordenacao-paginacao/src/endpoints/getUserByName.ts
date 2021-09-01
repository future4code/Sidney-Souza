import { Request, Response } from "express"
import { connection } from "../data/connection"



export default async function getUserByName(
    req:Request,
    res:Response
){
    try{
        const name = req.params.name || "%"

        const result = await connection("aula48_exercicio")
        .where("mame", "LIKE", `%${name}%` )

        if(
            result.length<=0
        ){
            res.status(400).send("Usuário não encontrado!")
        }

        res.status(200).send(result)
    }catch (error){
    
        res.send(error.message || error.sqlMessage)
    }
}
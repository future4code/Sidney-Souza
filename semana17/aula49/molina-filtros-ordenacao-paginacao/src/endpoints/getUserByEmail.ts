import { Request, Response } from "express"
import { connection } from "../data/connection"



export default async function getUserByEmail(
    req:Request,
    res:Response
){
    try{
        const name = req.params.name || "%"
        const email = req.params.email || "%"
        const sort = req.query.sort || "user_id"
      const order = req.query.order || "ASC"

      if(
         sort !== "user_id" && sort !== "name"
      ){
         res.statusCode = 422
         throw new Error("'Sort' must be either'user_id' or 'name'") 
      }

      if(
        order !== "asc" && order !== "desc"
     ){
        res.statusCode = 422
        throw new Error("'Sort' must be either'asc' or 'desc'") 
     }
        const result = await connection("aula48_exercicio")
        .where("mame", "LIKE", `%${name}%` )
        .orderBy(sort, order)
        if(
            result.length<=0
        ){
            res.status(400).send("Usuário não encontrado!")
        }

        res.status(200).send(result)
    }catch (error){
        if(res.statusCode === 200){
            res.status(500).send("Integral server error")  
        }else{
        res.send(error.message )
        }
    }
}
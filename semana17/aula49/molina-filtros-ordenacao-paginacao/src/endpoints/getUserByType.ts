import { Request, Response } from "express"
import { connection } from "../data/connection"



export default async function getUserByType(
    req:Request,
    res:Response
){
    try{
        const name = req.params.name || "%"
        const email = req.params.email 
        const sort = req.query.sort || "user_id"
        const order = req.query.order || "ASC"
        const page = Number(req.query.page) || 1
       const size = Number(req.query.size) || 5

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

     const offset = 5 * (page - 1)
        const result = await connection("aula48_exercicio")
        .where("mame", "LIKE", `%${name}%` )
        .orderBy(sort, order)
        .limit(size)
         .offset(offset)

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
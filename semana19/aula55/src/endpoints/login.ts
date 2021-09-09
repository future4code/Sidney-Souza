import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/AUTHENTICATOR";

export const login = async (
   req: Request,
   res: Response
) => {
   try {

      const { email, password } = req.body

      const [user] = await connection("users_55").where({ email })

     
      if(!user || user.password !== password){
         res.statusCode = 401
         throw new Error("Credenciais inválidas")
      }

      
      const token:string = new Authenticator().generateToken({
         id: user.id
      })

      res.send({token})

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}
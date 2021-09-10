import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManagerAsync } from "../services/Hashmanager";


export const login = async (
   req: Request,
   res: Response
) => {
   try {

      
      const { email, password } = req.body

      const [user] = await connection("user").where({ email })

      const hashManager = new HashManagerAsync()
      const isPasswordCorrect = await hashManager.compare(password, user.password)

     
      if(!user || !isPasswordCorrect){
         res.statusCode = 401
         throw new Error("Credenciais inválidas")
      }

      
      const authenticator = new Authenticator()

      const token:string = authenticator.generateToken({
         id: user.id,
         role: user.role
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
import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/AUTHENTICATOR";
import { idaula55 } from "../services/idExaula55";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password } = req.body

      if (!name || !email ||!password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'password' e 'email'")
      }

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      if (!req.body.password || req.body.password.length < 6) {
         res.statusCode = 422
         throw new Error("Senha deve ter no mínimo 6 caracteres")
      }

      const [user] = await connection('users_55')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new idaula55().aulaid()

      const newUser: user = { id, name, email, password }

      await connection('users_55')
         .insert(newUser)

      const token:string = new Authenticator().generateToken({id})

      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}
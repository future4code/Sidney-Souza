import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager, HashManagerAsync } from "../services/Hashmanager";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, senha, role } = req.body

      if (!name || !email ||!senha || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'email', 'senha' e 'role'")
      }

      if (senha.length < 6) {
         res.statusCode = 422
         throw new Error("Senha deve ter no mínimo 6 caracteres")
      }

      const [user] = await connection('user')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerator().generateId()

      const hashManager = new HashManagerAsync()
      const hashedPassword = await hashManager.hash(senha)

      const newUser: user = {
         id,
         name,
         email,
         senha: hashedPassword,
         role
      }

      await connection('user')
         .insert(newUser)

      const token:string = new Authenticator().generateToken({ id, role })


      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}
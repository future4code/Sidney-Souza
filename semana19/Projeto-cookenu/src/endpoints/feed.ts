import { Request, Response } from "express";
import {connection} from "../data/connection";
import { UserDB } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function editUser(
    req: Request,
    res: Response
 ): Promise<void>  {
    try {
        const token = req.headers.authorization as string;
        const tokenData = new Authenticator().getTokenData(token)
        const userId = tokenData.id;
        const userDb = new UserDB();
    
        const recipes = await userDb.getRecipes(userId);
    
        res.status(200).send({ recipes });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
      
    };
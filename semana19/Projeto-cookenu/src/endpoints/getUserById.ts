import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";


export default async function getUserById (
   req: Request,
   res: Response
): Promise<void> {
   
    try {
      const token = req.headers.authorization as string;
     
  
      const id = req.params.id;
      const tokenData = new Authenticator().getTokenData(token)
  
      res.status(200).send({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
      });
    } catch (err) {
      res.status(200).send({
        message: err.message,
      });
      
    }

  };
   
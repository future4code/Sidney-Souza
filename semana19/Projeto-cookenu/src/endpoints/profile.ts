import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";

export default async function myProfile(
  req: Request,
  res: Response
): Promise<void> {
    try {
      const token = req.headers.authorization as string;
  
     
      const tokenData = new Authenticator().getTokenData(token)
  
      res.status(200).send({
        id: req.body.id,
        email: req.body.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  
  };
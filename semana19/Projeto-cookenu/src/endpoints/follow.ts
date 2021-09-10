import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { UserDB, } from "../data/UserDatabase";

async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
     const tokenData = new Authenticator().getTokenData(token)
      const userId = tokenData.id;
      
      const userDb = new UserDB();
  
      const followerId = req.body.userToFollowId;
      const checkUser = await userDb.checkId(userId, followerId);
  
      if (checkUser) {
        throw new Error("You already followed this user");
      }
  
      await userDb.followUser(userId, followerId);
  
      res.status(200).send({
        message: "Followed successfully.",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
    
  };
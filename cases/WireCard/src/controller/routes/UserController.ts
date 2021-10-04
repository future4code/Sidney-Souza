import { Request, Response } from "express";
import { loginInputDTO, UserInputDTO } from "../../business/entities/user";
import { IdGenerator } from "../../business/services/idGenerator";
import {UserBusiness} from "../../business/UserBusiness";
import {Authenticator} from "../../business/services/Authenticator";
import { BaseDatabase } from "../../data/beseDataBase";
import { UserDatabase } from "../../data/UserDatabase";
import { HashManager } from "../../business/services/HashManager";



const userBusiness =  new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new UserDatabase()
);

export class UserController {
   static login(arg0: string, login: any) {
       throw new Error("Method not implemented.");
   }
   static signup(arg0: string, signup: any) {
       throw new Error("Method not implemented.");
   }
   async signup (req:Request, res:Response) {
       try {
            const input:UserInputDTO={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role
        }
        
        const userBusiness = new UserBusiness(new IdGenerator(),
        new HashManager(),
        new Authenticator(),
        new UserDatabase()
    );
        const token = await userBusiness.createUser(input);

        res.status(200).send({token});
       } catch (error) {
           res.status(400).send({error:error.mesage})
       }

       await BaseDatabase.destroyConnection()
   }

    
   async login(req:Request, res:Response){
       try {
            const loginData:loginInputDTO ={
                email: req.body.email,
                password: req.body.password,
            };

            const user = new UserBusiness(new IdGenerator(),
            new HashManager(),
            new Authenticator(),
            new UserDatabase()
        );
            const token = await user.getUserByEmail(loginData);

        res.status(200).send({token});
       } catch (error) {
        res.status(400).send({error:error.mesage})
       }
       await BaseDatabase.destroyConnection()
   }


} 
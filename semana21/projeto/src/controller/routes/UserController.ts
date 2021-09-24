import { Request, Response } from "express";
import { loginInputDTO, UserInputDTO } from "../../business/entities/UserBusiness";
import {UserBusiness} from "../../business/entities/UserBusiness";
import { BaseDatebase } from "../../data/BaseDatabase";
import { User } from "../../model/user";


export class UserController {
   async signup (req:Request, res:Response) {
       try {
         const input:UserInputDTO={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role
        }
        
        const user = new User();
        const token = await user.createUser(input);

        res.status(200).send({token});
       } catch (error) {
           res.status(400).send({error:error.mesage})
       }

       await BaseDatebase.destroyConection()
   }

    
   async login(req:Request, res:Response){
       try {
            const loginData:loginInputDTO ={
                email: req.body.email,
                password: req.body.password,
            };

            const user = new User();
            const token = await user.getUserByEmail(loginData);

        res.status(200).send({token});
       } catch (error) {
        res.status(400).send({error:error.mesage})
       }
       await BaseDatebase.destroyConection()
   }


} 
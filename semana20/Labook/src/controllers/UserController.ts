import {Request, Response} from "express"
import { SignupDTO, UserBusiness } from "../busines/UserBusiness"

export class UserController{
    signup(request:Request, response:Response){
        try {
            
      
        console.log("chegou no UserController")

        const signupDTO:SignupDTO ={
            name: request.body.name,
            email:request.body.email,
            password:request.body.password
        }

        if(!signupDTO.name || !signupDTO.email || !signupDTO.password){
            throw new Error("Preencha todos os dados")
        }

        console.log("DTO", signupDTO)
        const userBusiness = new UserBusiness()

        userBusiness.signup(signupDTO);

        response.send("sucesso")
    } catch(error: any) {
          response.status(500).send(error.message)  
    }
    }
}
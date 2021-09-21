import { Request, Response } from "express";
import { signopBusiness } from "../../business/users/signupBusiness";

export const sidnupController = async(
    req: Request,
    res: Response
)=>{
    try {
        const { name, nickname, email, password, role } = req.body
        const token = await signopBusiness({name, nickname, email, password, role})
        res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

    } catch (error) {
        res.status(400).send(error.message) 
    }
}
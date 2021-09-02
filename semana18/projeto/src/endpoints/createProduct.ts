import {Request, Response} from "express";
import insertProduct from "../data/insertProduct";



export default async function createProduct(
    req: Request,
    res: Response
){
    try{
        const { name, description, price} = req.body
        if(
            !name || !description|| !price
            ){
                res.status(400)
                .send("Preencha todos os campos corretamente!")
        }
        const id:string = Date.now()  +Math.random().toString()
        
        
        await insertProduct(
            id, name, description, price 
        )

        {
            res.status(200)
            .send("Product created successfully!")
     }
            
    }catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}


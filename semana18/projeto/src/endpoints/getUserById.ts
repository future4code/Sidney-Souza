import {Request, Response } from "express";
import { Users } from "../class/classUsers";
import selectUserById from "../data/selectUserById";

export default async function getUser(
    req:Request,
    res:Response
){
try {
    const user = await selectUserById(req.params.user)
    if(!user){
        res.status(404).send({
            message:"Usuário nao encontrado!"
        })
    }

    res.status(200).send({
        user:user
    })

  } catch (error) {
       res.status(400).send({
       message: error.message || error.sqlMessage   
    })
  }
}
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { USER_ROLES } from "../types";
import {IdGenerator} from "../services/IdGenerator"
import { UserDB } from "../data/UserDatabase";


export const createRecipe = async (
    req: Request,
    res: Response
 ) => {

  try {
    const token = req.headers.authorization as string;
    const tokenData = new Authenticator().getTokenData(token)
    const userId = tokenData.id;

    const recipeData = {
      title: req.body.title,
      description: req.body.description,
    };
    const userDb = new UserDB();
    const idManager = new IdGenerator();
    const id = idManager.generateId();

    if (!recipeData.title) {
      throw new Error("Invalid title");
    }

    if (!recipeData.description) {
      throw new Error("Invalid description");
    }

    await userDb.createRecipe(
      id,
      recipeData.title,
      recipeData.description,
      userId
    );

    res.status(200).send({
      message: "Recipe successfuly registered",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  
};
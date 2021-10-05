import express from "express";
import userController from "../../controller/routes/UserController";

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
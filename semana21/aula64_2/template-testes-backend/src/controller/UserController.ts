import { Request, Response } from "express";
import {UserBusiness} from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";

export class UserController {
   userDatabase: any;
   constructor(private userBusiness: UserBusiness) {
   }
   public async getUserById(id: string) {
      const user = await this.userDatabase.getUserById(id);
  
      if (!user) {
        throw new CustomError(404, "User not found");
      }
  
      return {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      };
    }


   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}
const userDatabase = new UserDatabase()
const idGenerator = new IdGenerator()
const hashGenerator = new HashGenerator()
const userBusiness = new UserBusiness()
const userController = new UserController(userBusiness)
export default  userController
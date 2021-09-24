import { CustomError } from "../../errors/CustomError";
import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { UserDatabase } from "../../data/UserDatabase";

export class UserBusiness {
  async createUser(user: UserInputDTO){
    
   const idGenerator= new IdGenerator();
   const id = idGenerator.generate();

   const hashManager = new HashGenerator();
   const hashPassword = await hashManager.hash(user.password);

   const userDatabase = new UserDatabase();
   await userDatabase.createUser( UserBusiness);

   const uthenticationData = new AuthenticationData();
   const acessToken = authenticator.generateToken(id,role: user.role)
  }
  
  


}



export const stringToUserRole = (input: string): USER_ROLES => {
   switch (input) {
      case "NORMAL":
         return USER_ROLES.NORMAL;
      case "ADMIN":
         return USER_ROLES.ADMIN;
      default:
         throw new CustomError(422, "Tipo de usuário inválido");
   }
};

export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN",
}

export interface UserInputDTO{
    name: string,
    email: string,
    password: string,
    role: string
}

export interface loginInputDTO{
   email: string,
   password: string,
}
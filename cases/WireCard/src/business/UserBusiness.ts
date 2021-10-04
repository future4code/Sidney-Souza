import {UserInputDTO, loginInputDTO, USER_ROLES } from "./entities/user";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "./services/idGenerator";
import { HashManager} from "./services/HashManager";
import { Authenticator } from "./services/Authenticator";
import {CustomError} from "../errors/CustomError";


export class UserBusiness{
    static getUserByEmail(arg0: { email: string; password: string; }) {
        throw new Error("Method not implemented.");
    }

    constructor(
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator:Authenticator,
    private userDatabase: UserDatabase,
    ){}

 async createUser(user:UserInputDTO) {

      const id = this.idGenerator.generate()

      const hashPassword = await this.hashManager.hash(user.password);

      await this.userDatabase.createUser(
        id,
        user.email,
        user.name,
        hashPassword,
        user.role
      );

      const accessToken = this.authenticator.AuthenticationData({
        id,
        role:USER_ROLES
      });
     return accessToken;

    }

    async getUserByEmail(user:loginInputDTO) {
        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

     const passwordIsCorrect = await this.hashManager.compare(
            user.password,
            userFromDB.password
        );

        const accessToken = this.authenticator.generateToken({
            id: userFromDB.id,
            role: userFromDB.role
        });

        if (!passwordIsCorrect){
            throw new CustomError(401,"invalid credentials!")
        }

        return accessToken;
    }


 
}

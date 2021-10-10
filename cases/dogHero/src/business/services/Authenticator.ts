import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class Authenticator {
  AuthenticationData(arg0: { id: string; role: typeof import("../entities/user").USER_ROLES; }) {
      throw new Error("Method not implemented.");
  }
  Authenticator(arg0: { id: string; role: typeof import("../entities/user").USER_ROLES; }) {
      throw new Error("Method not implemented.");
  }
  private static expiresIn: number = 1200;

  public generateToken = (input: AuthenticationData): string => {
    const newToken = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.expiresIn,
      }
    );
    return newToken;
  };

  public verify(token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = { id: payload.id, role: payload.role };
    return result;
  }
}

export interface AuthenticationData {
  id: string;
  role: string;
}

export default new Authenticator()




/*import * as jwt from "jsonwebtoken";
import {AuthenticationData } from "../entities/user";
import dotenv from "dotenv";

dotenv.config();


export class Authenticator {
    input:AuthenticationData,
    expiresIn: string = process.env.JWT_EXPIRES_IN!
}: string =>{
    const token = jwt.sign(
        input,
        process.env.JWT_KEY as string,
        {
            expiresIn,
        }
    );
    return token;
}

export const getData = (
    token: string
):AuthenticationData =>{
    const payload = jwt.verify(
        token, process.env.JWT_KEY as string
    ) as AuthenticationData;
    const result = {
        id: payload.id,
        role: payload.role
    };
    return result;
}*/


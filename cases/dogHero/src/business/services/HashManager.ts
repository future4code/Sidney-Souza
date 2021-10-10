


import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export class HashManager {
    hash = async (
        plainText: string
    ): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        return bcrypt.hash(plainText, salt)
    };

    compare = async (
        plainText: string, cypherText: string
    ): Promise<boolean> => {
        return bcrypt.compare(plainText, cypherText)
    };
};






/*import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config

export const hash = async(
    text : string
): Promise<string> =>{
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(text, salt);
    return result;
}

export const compare = async(
    text:string,
    hash: string
):Promise<boolean>=> {
    return bcrypt.compare(text, hash);
}


export class HashManager {
   public hash = jest.fn(async (s: string): Promise<any> => {
      return 'senha encriptada'
   })

   public compare = jest.fn(async (s: string, hash: string): Promise<boolean> => {
      return true
   })
}*/
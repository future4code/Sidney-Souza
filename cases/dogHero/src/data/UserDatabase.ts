import { BaseDatabase } from "./beseDataBase";
import {  User } from "../business/entities/user";
import {  CustomError } from "../erros/CustomError";

export class UserDatabase extends BaseDatabase{
    private static TABLE_NAME = "ser";

    private static toUserModel(user:any):User{
        return new User(
            user.id,
            user.name,
            user.email,
            user.password,
            user.cpf,
            user.endereco,
            User.stringToUserRole(user.role)
        );
    }

    public async createUser(
        id:string,
        email:string,
        name:string,
        cpf: string,
        endereco: string,
        password: string,
        role: string
    ): Promise<void> {
        try {
            await BaseDatabase.connection
            .insert({
                id,
                email,
                name,
                password,
                role
            })
            .into(UserDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getUserByEmail(email:string): Promise<User> {
        try {
            const result = await BaseDatabase.connection
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where({email});

            return UserDatabase.toUserModel(result[0]);
        } catch (error) {
            throw new CustomError(500, "an unexpected error ocurred");
        }
    }
}







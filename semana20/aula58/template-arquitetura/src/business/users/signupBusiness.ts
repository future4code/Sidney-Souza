import { insertUser } from "../../data/users/insertUser";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";

export const signopBusiness = async ({
    name,
    nickname, 
    email,
    password,
    role
}:any)=>{
    if (
        !name ||
        !nickname ||
        !email ||
        !password ||
        !role
     ) {
        throw new Error('Preencha os campos "name","nickname", "email" e "password"')
     }

     const id: string = generateId()

     const cypherPassword = await hash(password);

     await insertUser({
        id,
        name,
        nickname,
        email,
        password: cypherPassword,
        role
     })

     return generateToken({
        id,
        role: role
     })
    
}
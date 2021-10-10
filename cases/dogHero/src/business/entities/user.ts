export class User{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly cpf: string,
        public readonly endereco: string,
        public readonly role: USER_ROLES

    ){}

    static stringToUserRole = (input: string): USER_ROLES => {
        switch (input) {
           case "NORMAL":
              return USER_ROLES.NORMAL;
           case "ADMIN":
              return USER_ROLES.ADMIN;
           default:
              throw new Error( "Tipo de usuário inválido");
        }
     };
}



export interface UserInputDTO{
    name: string,
    email: string,
    password: string,
    cpf: string,
    endereco: string,
    role: string
}

export interface loginInputDTO{
    email:string;
    password:string;
}

export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN",
}


export interface AuthenticationData{
    id:string,
    role: USER_ROLES
}
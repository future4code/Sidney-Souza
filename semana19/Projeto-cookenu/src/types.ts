export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN",
    generate = "generate"
}

export type user = {
   id: string
   email: string
   name: string
   senha: string
   role: USER_ROLES
}

export interface authenticationData {
   id: string,
   role: USER_ROLES
}
import { Cadastro } from "./classCadastro";

export  class UserDatabase extends Cadastro {
    email: string;
    age: number;
    


    constructor(id:string, name:string, email: string, age: number
        ) {
          super(id, name)
           this.email= email,
           this.age= age
           
           
    }
     
    
}
import { Cadastro } from "./classCadastro";

export  class Product extends Cadastro {
    description: string;
    price: number;


    constructor(id:string, name:string, description: string, price: number
        ) {
          super(id, name)
           this.description = description,
           this.price = price 
    }
}
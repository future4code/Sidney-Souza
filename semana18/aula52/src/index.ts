import app from "./app"


app.post('/', )
app.post('/', )

//Exercício 1


//-A 
/*
Para ter ações que devem ser executadas ao criar uma
instância da classe
*/

//-B
/* enum Transaction  {
    transactions ="Transaction"
}
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    newTransaction(): void {
        console.log(`${this.cpf} , ${this.name}, ${this.age} `);
        
      }

  }

  const fulano = new UserAccount ("aua123","fulano", 35);
  fulano.newTransaction(  );*/
  
//"Chamando o construtor da classe impresso apenas uma vez no terminal


  //-C
  /*
  O corpo da classe pode conter uma função chamada
constructor, que recebe como parâmetros os atributos dessa
classe, referenciados pela keyword this
 */


//Exercício 2

/*class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    getTransaction(){
        return this.date,
               this.value,
               this.description
    }
     pagamento(): void {
        console.log(`${this.date}: Amanhã`);
      }
  };

  
  const pix = new Transaction ("pix", 100 , "Cartão de crédito");
  pix.pagamento();*/


//Exercício 3


  class Bank {
   
    private accounts: Bank;
      
      
  
    constructor(accounts: Bank) {
      this.accounts = accounts;
    }
  
   
    
  }

 

  console.log(Bank);
export class Client {
  constructor(
      private id: string,
      private name: string,
      private cpf: string,
      private email: string,
      private endereco: string
  ){}

  getId():string {
      return this.id;
  };

  getName():string {
      return this.name;
  };

  getCpf():string {
    return this.cpf;
};

  getEmail():string {
  return this.email;
};

  getEndereco():string {
  return this.endereco;
};

  setId(newId:string):void {
      this.id = newId;
  };

  setName(newName:string):void {
      this.name = newName;
  };

  setCpf(newCpf:string):void {
    this.name = newCpf;
};

setEmail(newEmail:string):void {
  this.name = newEmail;
};

setEndereco(newEndereco:string):void {
  this.name = newEndereco;
};


  static toClientModel(data:any):Client {
      return new Client(data.id, data.name, data.cpf, data.email, data.endereco);
  };
};
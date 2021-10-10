export class Pets {
  constructor(
      private id: string,
      private name: string,
      private raca: string,
      private porte: string,
      
  ){}

  getId():string {
      return this.id;
  };

  getName():string {
      return this.name;
  };

  getRaca():string {
    return this.raca;
};

  getPorte():string {
  return this.porte;
};

  setId(newId:string):void {
      this.id = newId;
  };

  setName(newName:string):void {
      this.name = newName;
  };

  setRaca(newRaca:string):void {
    this.name = newRaca;
};

setPorte(newPorte:string):void {
  this.name = newPorte;
};


  static toPetstModel(data:any):Pets {
      return new Pets(data.id, data.name, data.raca, data.porte);
  };
};

export interface PetsInputDTO {
     id: string,
     name: string,
     raca: string,
     porte: string
};
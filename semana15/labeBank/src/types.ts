export type Transaction={
    value: number,
    date:number,
    descriition:string
}

export type Account = {
    name: string;
    CPF:  number;
    dateOfBirth: Date;
    balance: number;
    statement:Array<Transaction> ,
};

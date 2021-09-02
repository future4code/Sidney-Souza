import {connection} from "../data/connection";



export default async function insertUser(
   id:string,
   name:string,
   email:string,
   age:number
)

{
  await connection.insert({
      id,
      name,
      email,
      age
  }) .into ('Users')
}
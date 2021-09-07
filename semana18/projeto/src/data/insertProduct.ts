import {connection} from "../data/connection";



export default async function insertProduct(
   id:string,
   name:string,
   description:string,
   price:number
)

{
  await connection.insert({
      id,
      name,
      description,
      price
  }) .into ('Product')
}
import { validateFighter } from "../src";




describe ( "testando a função validateFighter " ,  ( ) => {
    test("Deve retornar false quando for passado um objeto com propriedade 0", () => {
       const result = validateFighter({
         name: "Subzero",
         life: 1500,
         strength:100,
         defense: 0,
       })
   
       expect(result).toBe(false);
    });
   
   })
   
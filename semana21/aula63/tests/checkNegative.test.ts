import { validateFighter } from "../src";


describe ( "testando a função validateFighter " ,  ( ) => {
 test("Deve retornar isValid false quando for passado um objeto com propriedade", () => {
    const result = validateFighter({
      name: "Subzero",
      life: 1500,
      strength:0,
      defense: 900,
    })

    expect(result).toBe(false);
 });

})

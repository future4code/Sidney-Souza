import { validateFighter } from "../src";



test("Deve retornar isValid false quando for passado um objeto com propriedade", () => {
    const result = validateFighter({
      name: "",
      life: 1500,
      strength: 100,
      defense: 900,
    });

    expect(result).toBe(false);
  });
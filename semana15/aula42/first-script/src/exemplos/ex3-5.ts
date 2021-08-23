export type carro = {
  marca: MARCAS_DE_CARRO,
  volumeDoTanque: number,
  temMotorFlex?: boolean, // quando tem um ? é uma propriedade opcional
  calcularAutonomia: (combustivelRestante: number) => number
}

enum MARCAS_DE_CARRO {
  FIAT = "Fiat",
  VOLKSWAGEM = "VolksWagen",
  FORD = "Ford",
  NISSAN = "Nissan",
  FERRARI = "Ferrari"
}

const multiplicaPor15 = (num: number) => num * 15

const mustang: carro = {
  marca: MARCAS_DE_CARRO.FIAT,
  volumeDoTanque: 61,
  temMotorFlex: false,
  calcularAutonomia: multiplicaPor15
}

const gol: carro = {
  marca: MARCAS_DE_CARRO.VOLKSWAGEM,
  volumeDoTanque: 55,
  temMotorFlex: true,
  calcularAutonomia: multiplicaPor15
}

const f50: carro = {
  marca: MARCAS_DE_CARRO.FERRARI,
  volumeDoTanque: 90,
  calcularAutonomia: multiplicaPor15
}

export const garagem: carro[] = [mustang, gol, f50]
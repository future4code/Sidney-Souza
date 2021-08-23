import { carro, garagem } from "./ex3-5"

function buscarCarroPorMarca(frota: carro[], marca?: string) {
  if (marca === undefined) {
    return frota
  }

  return frota.filter((carro) => carro.marca === marca)
}

console.log("Todos os carros", buscarCarroPorMarca(garagem))

const carrosFord = buscarCarroPorMarca(garagem, "Ford")
console.log("Só ford", carrosFord)
carrosFord.forEach((carro) => console.log("Ford ainda pode rodar:", carro.calcularAutonomia(carro.volumeDoTanque)))

console.log("Só ferrari", buscarCarroPorMarca(garagem, "Ferrari"))
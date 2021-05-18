```unction calculaSalario(carrosVendidos, valorVendas) {
  let salarioFixo = 2000
  let comissão = carrosVendidos * 100
  let percentual = valorVendas *0.05
  let salarioFinal = salarioFixo + comissão + percentual
  return salarioFinal
}
calculaSalario()```
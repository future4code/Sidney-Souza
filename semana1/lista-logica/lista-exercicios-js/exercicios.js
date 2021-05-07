// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const altura = prompt("Digite a altura")
   const largura = prompt("Digite a largura")
   const area = altura * largura 

   console.log(area)
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoAtual= prompt("Digite o ano atual")
   const anoDeNascimento = prompt("Digite o ano de nascimento")
   const idadeAtual = anoAtual - anoDeNascimento

   console.log(idadeAtual)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   const imc = peso /(altura * altura)
   return imc
   console.log("Seu IMC é: " ,imc) 

}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
const nome = prompt("Digite seu nome ")
const idade = prompt("Digite sua idade")
const email = prompt("Digite seu e-mail")

return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const coresFavoritas =[]
   coresFavoritas[0] = prompt("Digite sua cor favorita ")
   coresFavoritas[1] = prompt("Digite sua segunda cor favorita ")
   coresFavoritas[2] = prompt("Digite sua terçeira cor favorita ")

   return console.log(coresFavoritas)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
  return string.toUpperCase()
   
   
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   const espetaculo = custo / valorIngresso
   return espetaculo
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const comparar = string1.length === string2.length
  return comparar

}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
  return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   const array1 = array[array.length-1]
 
   return array1

   console.log(array1)
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   const array1 = array[0]
   array[0]=array[array.length-1]
   array[array.length-1] =array1
    
    return array 
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   const comparativo= string1.toUpperCase() === string2.toUpperCase()
   return comparativo
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}
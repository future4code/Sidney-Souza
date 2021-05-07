// Execício de interpretação de código

// 1.10 50

//not a function
 

// 2.


// Exercício de escrita de código


// 1.

/*function imprimirfrase(){
    console.log ("Eu sou Sidney, tenho 34 anos, moro em São Paulo e sou estudante. ")
}
imprimirfrase()

function dados(nome,idade,cidade, profissao){
    const frase = console.log(`Eu sou ${nome},tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    return frase
}
dados("Sidney",34,"São Paulo","vendedor")*/


// 2.

/*function somaDeValores(valor1,valor2){
    const total = valor1 + valor2
    return total 
    
}
console.log(somaDeValores(5, 10))*/

// B.

/*function comparativa(numero1, numero2){
const booleano = numero1 >= numero2
return booleano

}
console.log(comparativa(7, 8))*/

// C.

/*function parOuImpar(numero){
const resto = numero % 2
const comparativa = resto === 0
return comparativa

}
console.log("O numero digitado é par ? " + parOuImpar(27))*/


// D.

/*function texto(mensagem){
return mensagem

}

console.log(texto("Gosto de andar de carro").length)
console.log(texto("Gosto de andar de carro").toUpperCase())*/


// 3.

function soma(valor1,valor2){
    const total = valor1 + valor2
    return total 
}

function subtracao(valor1,valor2){
    const total = valor1 - valor2
    return total 
}

function multiplicacao(valor1,valor2){
    const total = valor1 * valor2
    return total 
}
function divisao(valor1,valor2){
    const total = valor1 / valor2
    return total 
}

const numero1 = prompt("Digite um numero!")
const numero2 = prompt("Digite um numero!")

console.log("Numeros inseridos:" + numero1+ " e " + numero2)
console.log("Soma: " + soma(numero1,numero2))
console.log("Subtração : "+ subtracao(numero1,numero2))
console.log("Multiplicação: "+ multiplicacao(numero1,numero2))
console.log("Divisão: "+ divisao(numero1,numero2))
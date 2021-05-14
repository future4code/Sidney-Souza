// Exercícios de interpretação de código
// 1. Esta execultando enquanto i for menor que 5 . 10

// 2.
// A.mensagem de erro.
// B. colocar o console fora do bloco.

//.3


//Exercícios de escrita de código

//1.
/*
const pet = Number(prompt("Quantos bichinhos de estimação voçê tem"))
const bichinho = () => {
    
    const quantidadeDeBichinhos = []

if(pet === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
   for(const i = 0 ; i <pet; i++){
       const nomesPets = prompt("Diga o nome dos seus pets")
       quantidadeDeBichinhos.push( nomesPets)
       console.log(quantidadeDeBichinhos)
   }
   return console.log(nomesPets)
}


}
 bichinho() 
*/

 //2
//A
/*
 let arreyOriginal = [10, 20, 30, 40, 50, 60]
 function imprimeArrey (){
     console.log(arreyOriginal)
 }

imprimearrey()
*/
//B
let arreyOriginal = [10, 20, 30, 40, 50, 60]
function divideArrey (){
    for(let i = 0 ;i < arreyOriginal.length-1; i++)
    let divisao = (arreyOriginal[i]/10)
    console.log(divisao)
}
divideArrey()

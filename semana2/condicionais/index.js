// Exercícios de interpretação de código

// 1.
// A.Recebe um número do usuário e determina se é par ou impar.
// B. para número par
// C. para número impar

//2.
//A. iguala os valores das frutas 
// B. O preço da fruta maçã é R$ 5
// C.

// 3 
// A. guardando o número digitado em uma variavel como Number.
// B. Mensagem de erro.
// C. Sim ! Devido o console.log está fora do escopo de if.


// Exercícios de escrita de código

// 1.
/*const idade = Number(prompt("Digite sua idade"))
const dirigir = () =>{
    


 if(idade >= 18) {
    console.log("você pode dirigir")
 

 } else {
    console.log("você não pode dirigir")
 }
  
}

dirigir()*/

// 2.

/*const turnoAula =() =>{
const turno =prompt("qual seu turno de estudo M,V ou N?").toLocaleLowerCase()
    if (turno === "m" ){
console.log("Bom dia!")
    } else if (turno === "v"){
        console.log("boa tarde")
    }else {
        console.log("boa noite")

    }


}
turnoAula()*/

//3.

/*const turnoAula = () =>{
    const turno = prompt("qual seu turno de estudo M,V ou N?").toLocaleLowerCase()
    switch (turno) {
        case "m":
            console.log("Bom dia!")
            break;
        case "v":
            console.log("boa tarde")
            break;
        case "n":
            console.log("boa noite") 
            break;   
        default:
            console.log("Turno desconhecido")
            break;
    }
}
turnoAula()*/

//4

const cinema = () =>{
    const generoFilme = prompt ("Qual genero de filme você assistirá comedia ação ou fantasia ?").toLocaleLowerCase()
    const valorDoIngresso =Number( prompt("qual valor do ingresso 15, 20 ou 30?"))

    if (generoFilme === "fantasia"){
        console.log("Bom filme")
    }else if(valorDoIngresso === 15){
        console.log("Bom filme")
    }else{
        console.log("Escolha outro filme")
    }
    
    

}

cinema()
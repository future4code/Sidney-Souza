//A

/*var minhaString:string = "55";
console.log(minhaString)
erro Type 'string' is not assignable to type 'number'
*/
//B
/*var minhaString:number string = "55";
console.log(minhaString)
 adicionando o type nuber e string
*/

//C
type pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

enum CORES_DO_ARCO_ÍRIS{
    AMARELO = "AMARELO",
    AZUL = "AZUL",
    ROSA = "ROSA",
    VERMELHO = "VERMELHO",
    CINZA = "CINZA",
    PRETO = "PRETO",
    BRANCO = "BRANCO",
    ROXO = "ROXO",

}
const fulano:pessoa = {
    nome:"Sidney",
    idade: 35,
    corFavorita:CORES_DO_ARCO_ÍRIS. AZUL,
}
const sicrano:pessoa = {
    nome:"Kate",
    idade: 33,
    corFavorita:CORES_DO_ARCO_ÍRIS.ROSA,
}
const beltrano:pessoa = {
    nome:"Sônia",
    idade: 61,
    corFavorita:CORES_DO_ARCO_ÍRIS.VERMELHO,
}
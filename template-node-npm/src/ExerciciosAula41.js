/*1 A- process.argv []
1 B
const nome = "Sidney"
const idade = 35

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

1 C
const nome = "Sidney" 
const idade = Number(process.argv[2])
const idadeNova = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+idadeNova}`)

2
const operacao=process.argv [2]
const numero1=process.argv [3]
const numero2=process.argv [4]

switch(operacao){
    case"add":
        console.log(`Resposta:${numero1 + numero2}`)
    break;
    case "sub":
        console.log(`Resposta:${numero1 - numero2}`) 
    break;
    case "mult":
        console.log(`Resposta:${numero1 * numero2}`)
    break;
    case "div":
        console.log(`Resposta:${numero1 + numero2}`)
    break;
    default:
        console.log("Digite a operação desejada")   
                
}
*/

3
const listaDETarefas = process.argv [2]
const novaTarefa = process.argv [3]

console.log(`Tarefa adicionada com sucesso! ${novaTarefa}`)
console.log(`${listaDETarefas}`)

console.log("Hello World!")
// Comentário aleatório

let mensagem: string | null
let idade: number = 38
const ehMaior: boolean = true

const alimentacao: Array<string> = ["arroz", "feijao", "alface"]
const alimentacao2: string[] = ["arroz", "feijao", "alface"]

type car = { modelo: string, anoLancamento: number }

const meuCarro: car = {
  modelo: "sedan",
  anoLancamento: 12
}

let qualquerCoisa: any

qualquerCoisa = "uma string"
qualquerCoisa = 0
qualquerCoisa = null
qualquerCoisa = () => console.log("rodei")

mensagem = "Salve, Molina!"
console.log(mensagem)
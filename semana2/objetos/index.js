// Exercícios de interpretação de código

//1.
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}


//2.
//A
// {nome: "Juca", idade:3, raca "SRD"}
// {nome: "Juca", idade:3, raca "SRD"}
// {nome: "Juca", idade:3, raca "SRD"}

//B. 
// Copia as informaçães.

//3.
//A
// falce
// undefined

//B
// Altura não foi declarada no objeto

//Exercícios de escrita de código

//1.
// A.

/*const fulano = {
nome:"Sidney",
apelidos:["Ney" , "Sid" , "Sidão"]

}

function apelido(objetofulano){
    return objetofulano
}

console.log("Eu sou " + fulano.nome + ", " + "mas pode me chamar de: " + fulano.apelidos[0] +" , " + fulano.apelidos[1] + " ou " + fulano.apelidos[2])

//B.

const novoFulano = {
    ...fulano,
    apelidos:["Sidnelson" , "Sidneira " , " Si "]
    
}
   console.log(apelido(novoFulano))*/

   const pessoa1 = {
       nome:"Sidney",
       idade:34,
       profissao:"aspiranteADev",
   }

   const pessoa2 = {
    nome:"Kate",
    idade:38,
    profissao:"Dev",
   }

   function informacao(objetoPessoa){
const info =[objetoPessoa.nome,objetoPessoa.nome.length,objetoPessoa.idade,objetoPessoa.profissao,objetoPessoa.profissao.length]

return info

    
}
    

  console.log(informacao(pessoa1))

 
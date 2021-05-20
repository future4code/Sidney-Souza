//Exercícios de interpretação de código

//1. Nada

// 2.(3) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// 3. {nome: "Amanda Rangel", apelido: "Mandi"}
//    {nome: "Laís Petra", apelido: "Laura"}

//Exercícios de escrita de código
//1.

//A.
/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const listaDeNomes = pets.map((pets) =>{
     console.log(pets.nome)
 })*/

 //B.
 /*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const racaSalsicha = pets.filter((pets) =>{
    return pets.raca === "Salsicha"
})
console.log(racaSalsicha)*/


//C.
/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const racaPoodle = pets.filter((pets) =>{
    return pets.raca === "Poodle"
 })

 const nomeRacaPoodle = racaPoodle.map((pets , index)=>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${index} ${pets.nome}`
 })
 console.log(nomeRacaPoodle)*/

 // 2.

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //A.
/* const listaDeNomes = produtos.map((produtonome) =>{
     return produtonome.nome
 })
 console.log(listaDeNomes)*/

 //B.
 /*const itemComPeco = produtos.map((precoItem) =>{
     return ([`nome:${precoItem} Preço:R$${precoItem.preco * 0.95.toFixed()}`])
 })
 console.log(itemComPeco)*/

 //C.

 /*const listaDeBebidas = produtos.filter((Bebida) =>{
     return Bebida.categoria === "Bebidas"
 })
 console.log(listaDeBebidas)*/

 //D.
  
 /*const objetosYpe = produtos.filter((produtoYpe) =>{
     return produtoYpe.nome.includes ("Ypê")
 })
 console.log(objetosYpe)*/

 

 

 
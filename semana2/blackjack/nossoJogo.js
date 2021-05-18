/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    /*console.log("Bem vindo ao jogo de BlackJack")
    //const novaPartida = confirm(" Quer iniciar uma nova rodada? ")

    
    if ( confirm(" Quer iniciar uma nova rodada? ")) {
       for
      const carta = comprarCarta()
      console.log(carta.texto)
      console.log(carta.valor)
      
  
    }else{
       console.log("O jogo acabou")
    }*/

    const novoJogo = () =>{
       if(confirm(" Quer iniciar uma nova rodada? ")){
          console.log("Bem vindo ao jogo de BlackJack")
       }else{
         console.log("O jogo acabou")
       }
    }
    novoJogo()

    const game = () =>{
       const player1card1 =comprarCarta()
       const player1card2 =comprarCarta()

       const player2card1 =comprarCarta()
       const player2card2 =comprarCarta()

       const somaplayer1 = player1card1 + player1card2.valor
       const somaplayer2 = player2card1 + player2card2.valor

       console.log(`Usuario - carta${player1card1.texto},${player1card2.texto}`)
       console.log(`Usuario - carta${player2card1.texto},${player2card2.texto}`)
       

       if(somaplayer1 > somaplayer2){
          console.log("o usuário ganhou!")
       }else if(somaplayer2 > somaplayer1){
          console.log("O computador ganhou!")
       }else{
          console.log("Empate")
       }
    }
    game()

    

    
    

    
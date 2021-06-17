import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuarios from "./components/TelaListaUsuarios"
//import axios from 'axios';




export default class app extends React.Component {

  state = {
    telaAtual:"cadastro"
  }

  escolheTela = () => {
    switch(this.state.telaAtual){
        case "cadastro":
            return <TelaCadastro irParaLista={this.irParaLista}/>
        case "lista":
            return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
        default:
            return <div>Error! página não encontrada:</div>       
    
    }  
  }


 irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
 }

 irParaLista = () =>{
  this.setState({telaAtual:"lista"})
 } 

  render() {
    
    return(
      <div>
        <h1></h1>
        {this.escolheTela()} 
      </div>
    )
  }
}




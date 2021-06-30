import React, { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {
  const [secao, setSecao] = useState("inicio")
  const [perfilCarregado, setPerfilCarregado] = useState(undefined)
  const [listaDeMatches, setListaDeMatches] = useState(undefined)
  const [perfilSelecionado, setPerfilSelecionado] = useState(undefined)

  const mudaSecao = (event) => {
    setSecao(event.currentTarget.getAttribute("value"))
  }

  useEffect(()=>{
    carregaPerfil();
    carregaLista();
  }, [])

  const carregaPerfil = () => {
    setPerfilCarregado(undefined);
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sidney-souza-molina/person")
    .then(resposta=>{
      return setPerfilCarregado(resposta.data.profile)
    })
    .catch(error => {
      return alert("Erro ao carregar perfil")
    })
  }

  const carregaLista = () =>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sidney-souza-molina/matches")
    .then(resposta =>{
      return setListaDeMatches(resposta.data.matches)
    })
    .catch(error => {
      return alert(`Erro ao carregar lista`)
    })
  }

  const recarrega = () => {
    carregaPerfil();
    carregaLista();
  }

  const recebeInfo = (perfil) => {
    setPerfilSelecionado(perfil)
    setSecao("detalhes")
  }

  const limparSwipes = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sidney-souza-molina/clear")
      .then(resposta =>{
        return (alert("Lista de swipes apagada com sucesso!"), carregaLista(), carregaPerfil())
      })
      .catch(error => {
        return alert("Erro ao apagar lista, tente novamente")
      })
  }

  let secaoCarregada = undefined;

  return (
    <DivApp>
      <button onClick={limparSwipes}>Limpar swipes e matches</button>
      {secaoCarregada}
    </DivApp>
  );
}

export default App;

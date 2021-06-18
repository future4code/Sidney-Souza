import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardList = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: flex;
  justfy-content: space-between;
`;
  

 
  
const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers: {
    Authorization: "sidney-souza-molina"
  }
};

export default class App extends React.Component {
  state = {
    playlists: [],
    inputPlaylist: ""
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  mudaInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  pegarPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Playlist cadastrada com sucesso!");
        this.setState({ inputPlaylist: "" });
        this.pegarPlaylists();
      })
      
  };

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId${id}`
    axios.delete(URL, {
      headers:{
        Authorization:"sidney-souza-molina"
      }
    })
    .then((res) => {
     alert("Playlist deletada com sucesso!")
     this.pegarPlaylists()
    })
    .catch((err) => {
      alert("Ocorreu um erro, tente novamente")
    })
  }

  render() {
    const componentesPlaylist = this.state.playlists.map((play) => {
      return <CardList key={play.id}>
        {play.name}
        <button onClick={() => this.deletePlaylist(play.id)}>X</button>
      </CardList>;
    });

     
    

    return (
      <div>
        <h1>Lista de Playlists</h1>
        <input
          value={this.state.inputPlaylist}
          onChange={this.mudaInputPlaylist}
        />
        <button onClick={this.criarPlaylist}>Enviar</button>
        
        {componentesPlaylist}
      </div>
    );
  }
}

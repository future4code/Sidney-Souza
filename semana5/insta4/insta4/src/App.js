import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
      },
      {
        nomeUsuario:'Sidney',
        fotoUsuario:'https://picsum.photos/id/237/200/300',
        fotoPost:'https://picsum.photos/200/300/?blur=2',
      },
      {
        nomeUsuario:'Kate',
        fotoUsuario:'https://picsum.photos/seed/picsum/200/300',
        fotoPost:'https://picsum.photos/200/300?grayscale',
      },
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario:"",
    valorInputFotoPost:"",
  };

  adicionaPost = () =>{
    const novoPost ={

      nomeUsuario:  this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novaPost = [...this.state.post, novoPost];
    this.setState({ post: novaPost});
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  }
  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});
  };
  render() {
    const listaDeComponentes = this.state.post.map((post) =>{
      return (
        <Post>
          {post.nomeUsuario}, 
          {post.fotoUsuario},
          {post.fotoPost},
        </Post>
      );
    });
    
    return (
      <MainContainer>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.valorInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.valorInputFotoUsuario}
            placeholder={"Foto Usuário"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.valorInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        <div>{listaDeComponentes}</div>
      </MainContainer>
    );
  }
}

export default App;

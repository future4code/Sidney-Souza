import React from 'react';
import axios from 'axios';


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization:"sidney-souza-molina"
  }
};

export default class app extends React.Component {

  state = {
    listUsers: []
  }

  componentDidMount() {
    this.pegaListaDeUsuario();
  }

  pegaListaDeUsuario = () => {
    axios.get(url, headers)
    .then((res) =>{
      //console.log(res)
      this.setState({listUsers:res.data})
      
    })
    .catch((err) => {
      alert(err.response)
    })
  };
  render() {
    console.log(this.state.listUsers)
    const componentesListUser = this.state.listUsers.map((list) =>{
      return <li>{list.name}</li>
    })
    return(
      <div>
        <h1>Lista de Usuarios</h1>
        {componentesListUser}
      </div>
    )
  }
}




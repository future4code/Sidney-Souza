import React from "react";
import axios from 'axios';
import styled from "styled-components"


const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaCadastro extends React.Component{
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }
    pegarUsuarios = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization:"sidney-souza-molina"
            }
        })
        .then((res) => {
           this.setState({usuarios: res.data})
        })
        .catch((err) =>{
            alert("Ocorreu um problema tente novamente")
        })
    }
    deletaUsuario =(id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,{
            headers:{
                Authorization: "sidney-souza-molina"
            }
        })
        .then((res)  => {
           alert("Usuario(a) deletado(a) com sucesso!")
           this.pegarUsuarios()
        })
        .catch((err)  => {
            console.log(err.response.data)
        })
    }

    render (){
        
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
             <CardUsuario key={user.id}>
                {user.name}
                <button onClick={()  => this.deletaUsuario(user.id)}>X</button>
             </CardUsuario>
            )
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Lista de Usuários</button>
               <h2>Lista de Usuários</h2>
               {listaUsuarios}
            </div>
        )
    }
}
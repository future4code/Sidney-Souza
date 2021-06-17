import React from "react";
import axios from "axios";
import styled from "styled-components"



const Button = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class app extends React.Component {


  state = {
    activity:{}
  }

  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data)
      this.setState({activity: res.data})
    })
    .catch((err) => {
      console.log(err)
    })

    
  }
  getConsultaKey = () => {
    axios.get("http://www.boredapi.com/api/activity?key=5881028")
   .then((res) => {
     console.log(res.data)
     this.setState({activity: res.data})
   })
   .catch((err) =>{
     console.log(err)
   })
 }
 getConsultaType = () => {
  axios.get("http://www.boredapi.com/api/activity?type=recreational")
 .then((res) => {
   console.log(res.data)
   this.setState({activity: res.data})
 })
 .catch((err) =>{
   console.log(err)
 })
}
  render (){
      
    const{ activity,type,participants,price} = this.state.activity
    
    return (
      <div className="app">
        <h1>Fuja da rotina!</h1>
        <Button>
        <button onClick={ this.getActivity}> Clique aqui!</button>
        <button onClick={ this.getConsultaKey}> Consulta Key!</button>
        <button onClick={ this.getConsultaType}> Consulta Type!</button>
        </Button>
        <hr/>
        <h3>Atividade</h3>
        <p>Nome: {activity}</p>
        <p>Tipo:{type}</p>
        <p>Participsntes: {participants}</p>
        <p>Preço:${price}</p>
      </div>
      
    )
  }
}

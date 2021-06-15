import React from 'react';
import axios from 'axios';
import './App.css';

const url= 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers ={
    headers:{
      authorization: "sidney-souza-molina"
    }
  };

export default class app extends React.Component {state= {
  nome:"",
  email:""
};
pegausers = () =>{
  axios.get(url, headers)
  .then((res) => {
    console.log (res)
  })
}
render() {
  return(
    <div>
      ooiiii
    </div>
  )
}
}
    









{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/}

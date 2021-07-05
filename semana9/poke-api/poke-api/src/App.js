import React,{useEffect, useState} from "react";
import axios from "axios";
import PokeCard from "./componentes/PokeCard/index";


export default function App(){
  const [pokeList, setPokeList] = useState([])  
  const [pokeName , setPokeName] = useState("")
    

    useEffect (()=>{
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.pokeList)
        setPokeName(response.data.pokeName)
      })
      .catch(err => {
        console.log(err);
      });
    },[])

  /* método que roda após a montagem do componente
  componentDidMount = () => {
    // função axios que está batendo na API e buscando 151 pokemons*/
    
  

    const changePokeName = (event) => {
      setPokeName({ pokeName: event.target.value });
   }; 
   
    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
         <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {setPokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {setPokeName && <PokeCard pokemon={setPokeName} />}
      </div>
    );
  }




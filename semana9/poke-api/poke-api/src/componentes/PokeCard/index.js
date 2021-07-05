import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PokeCard(){
    const[pokemon, setPokemon] =useState({})

    function  pegaPokemon(){
        pokeName() . then(setPokemon)
    }
  
    useEffect (() =>{
    pegaPokemon()
    },[pokemon])
 
/*useEffect (() =>{
 pegaPokemon()
    
},[props.pokemon])*/

  

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

    
   // const pokemon = setPokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }



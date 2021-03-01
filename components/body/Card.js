import React, { useState, useEffect } from 'react';

function Card() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] =  useState([]);

 useEffect(() => {
  getPokemon()
  },[])
  
  
  const getPokemon = async ()=>{
   const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const res = await resp.json();
      const next = await res.next;
      const previous = await res.previous;
      const results = await res.results;
      await results.forEach(el => {
        fetch(el.url)
        .then(res => res.json())
        .then(json => {
          let pokemon = {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default
          }
          setPokemon(...pokemon, pokemon)
        })
      })
  }
  
  const Pokerender = (props)=> {
    <figcaption>
    <img src={props.avatar} alt={props.name}/>
    </figcaption>
  }

  return (
    <div className='rounded bg-red-500 mx-5 text-center'>
    {pokemon.length === 0 ? <h2>Cargando...</h2> : pokemon.map(item =>
      <Pokerender key={item.id} alt={item.name} src={item.avatar}/>
    )}
    </div>
  )
}

export default Card
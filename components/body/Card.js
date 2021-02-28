import React, { useState, useEffect } from 'react';

function Card() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] =  useState([]);

 useEffect(() => {
   getPokemon()
  },[pokemonData])
  
  
  const getPokemon = async ()=>{
   const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const res = await resp.json();
      const results = await res.results;
      const pkm = await results.map(poke => {
        return{
        url: poke.url,
        name: poke.name
        }
      })
      await setPokemon(pkm);
      
      
      const arr = await[]
     await pkm.map(async (item, index) => {
      const respo = await fetch(item.url);
      const respuesta = await respo.json()
      const info = await{
        "name": respuesta.name,
        "img": respuesta.sprites.front_default
      }
      arr.push(info.name, info.img)
    })
      await setPokemonData(arr);
  }
  return (
    <div className='rounded bg-red-500 mx-5 text-center'>
    <div>
    <p>{console.log(pokemonData)}</p>
    </div>
    
    </div>
  )
}

export default Card
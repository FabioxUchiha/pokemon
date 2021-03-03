import React, { useState, useEffect, Fragment } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((res) => res.results)
      .then((res) =>
        res.map((item) => {
          fetch(item.url)
            .then((res) => res.json())
            .then((res) => {
              let datos = [];
              datos.push(res);
              setData(datos);
              setLoad(true);
            });
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="grid-cols-1 sm:grid-cols-3 md:grid-cols-5 mx-5 text-center bg-red-500 rounded"
      key="div-card"
    >
      {load === true ? (
        data.map((i) => {
          return (
            <div key={i.id}>
              <img src={i.sprites.front_default} alt={i.name} />
              <h2>{i.name}</h2>
              {console.log(i.name)}
            </div>
          );
        })
      ) : (
        <h1>cargando</h1>
      )}
    </div>
  );
}

export default Card;

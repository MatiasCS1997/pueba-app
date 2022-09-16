import React, { useEffect, useState } from "react";

const Showapi = ({SearchName}) => {
  const [listaRandM, setListaRandM] = useState([]);

  useEffect(() => {
    consultaApi();
  }, []);

  const consultaApi = async () => {
    try {
      const url =
        "https://rickandmortyapi.com/api/character/?name=&status=alive";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setListaRandM([...listaRandM, ...data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      {listaRandM
        .filter((l) => {
          if (
            l.name
              .trim()
              .toLocaleLowerCase()
              .includes(SearchName.trim().toLocaleLowerCase())
          ) {
            return l;
          }
        })
        .map((l) => (
          <div className="card" key={l.id}>
            <img src={l.image} alt={l.name}></img>
            <p>{l.name}</p>
            <p>{l.species}</p>
          </div>
        ))}
    </div>
  );
};

export default Showapi;

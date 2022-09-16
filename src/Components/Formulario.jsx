import React from "react";

const Formulario = ({ setSearchName }) => {
  return (
    <>
      <form>
        <h1>Busca tu personaje favorito</h1>
        <br></br>
        <input
          type="text"
          placeholder="Ingrese personaje a buscar"
          className="seeker"
          onChange={(e) => setSearchName(e.target.value)}
        />
      </form>
    </>
  );
};

export default Formulario;

import React from "react";

function Filter() {
  return (
    <>
      <h1>Filter</h1>

      <p>Valor Minimo:</p>
      <input type="Number"></input>

      {/* <select>
    <option value="">Ordenar</option>
    <option value="">Crescente</option>
    <option value="">Decrescente</option>  
    </select> */}

      <p>Valor Máximo:</p>
      <input type="Number"></input>

      <p>Busca por Nome:</p>
      <input type="Text"></input>
    </>
  );
}

export default Filter;

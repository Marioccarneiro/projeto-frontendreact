import React from 'react'
import audi from "../../../assets/audi.png"

function ProductCard() {
  return (
    <>
    
    <div className="box-pagina-principal">
      <img src={audi} alt="" />
      <h4>Nome do Produto</h4>
      <p>Valor: </p>
      <button>Adicione ao Carrinho</button>
    </div>
    
  </>
  )
}

export default ProductCard
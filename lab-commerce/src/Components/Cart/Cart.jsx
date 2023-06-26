import React from 'react'
import Items from '../Items/Items'
import { ContainerCart } from './CartStyle'

function Cart() {
  return (
    <ContainerCart>
      <h1>
        Cart
      </h1>
      <p>
        Nome do Produto:
        <button>Remover</button>
      </p>
      <p>
        Valor Total:
      </p>
      
    </ContainerCart>
  )
}

export default Cart
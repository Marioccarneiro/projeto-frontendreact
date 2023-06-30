import React, { useState } from 'react'
import { ContainerHome, ContainerHomeUpper, ContainerHomeLower, P } from './HomeStyle'
import ProductCard from '../ProductCard/ProductCard'
import { Select } from '../ProductCard/ProductCardStyle'

function Home({
  amount,
  setAmount,
  cart,
  setCart,
  addToCart,
  productsFiltered,
  // ordination,
  // setOrdination
}) {

  const [ordination, setOrdination] = useState('');
  const productsOrdered = productsFiltered.sort((a, b) => {
      if (ordination === 'Crescente') {
          if (a.value > b.value) {
              return 1;
          }
          if (a.value < b.value) {
              return -1;
          }
          return 0;
      } else if (ordination === 'Decrescente') {
          if (a.value > b.value) {
              return -1;
          }
          if (a.value < b.value) {
              return 1;
          }
          return 0;
      }})

      const handleChangeSelect = (event) => {
        setOrdination(event.target.value);
    };


  //TESTE
  
  

  return (
    <ContainerHome>
     {/* <ProductCard /> */}
      <ContainerHomeUpper>
        
      <P>Produtos encontrados: {productsOrdered.length}</P>
                <Select value={ordination} onChange={handleChangeSelect}>
                    <option disabled value="">
                        Selecione
                    </option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>

        {/* <h1 className='Product-Quantity'>Quantidade de Produtos:</h1>
        <label className='Label-Order'>
          Ordenar por:
          <select>
            <option value="">Selecione ordem</option>
            <option value="">Crescente</option>
            <option value="">Decrescente</option>
          </select>
        </label> */}

        {/* <select>Ordenação</select> */}
        
      </ContainerHomeUpper>
      
      <ContainerHomeLower>
        <ProductCard
        
        //TESTE

        productsOrdered={productsOrdered}
        ordination={ordination}
        setOrdination={setOrdination}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}

        />

      </ContainerHomeLower>
    </ContainerHome>
  )
}

export default Home
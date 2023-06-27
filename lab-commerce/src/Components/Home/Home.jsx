import React from 'react'
import { ContainerHome, ContainerHomeUpper, ContainerHomeLower } from './HomeStyle'
import ProductCard from '../ProductCard/ProductCard'
import { Select } from '../ProductCard/ProductCardStyle'

function Home() {
  return (
    <ContainerHome>
     {/* <ProductCard /> */}
      <ContainerHomeUpper>
        <h1 className='Product-Quantity'>Quantidade de Produtos:</h1>
        <label className='Label-Order'>
          Ordenar por:
          <select>
            <option value="">Selecione ordem</option>
            <option value="">Crescente</option>
            <option value="">Decrescente</option>
          </select>
        </label>
        {/* <select>Ordenação</select> */}
        
      </ContainerHomeUpper>
      
      <ContainerHomeLower>
        <ProductCard/>

      </ContainerHomeLower>
    </ContainerHome>
  )
}

export default Home
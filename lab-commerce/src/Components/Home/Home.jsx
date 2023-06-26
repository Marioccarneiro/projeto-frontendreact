import React from 'react'
import { ContainerHome, ContainerHomeUpper, ContainerHomeLower } from './HomeStyle'
import ProductCard from '../ProductCard/ProductCard'

function Home() {
  return (
    <ContainerHome>
      {/* <ProductCard /> */}
      <ContainerHomeUpper>
        <h1>Quantidade de Produtos:</h1>
        <h2>Ordenação</h2>
        
      </ContainerHomeUpper>
      
      <ContainerHomeLower>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </ContainerHomeLower>
    </ContainerHome>
  )
}

export default Home
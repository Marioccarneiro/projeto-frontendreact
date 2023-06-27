import React from 'react'
import { Button, Card, CardContainer, ContainerSuperior, Img, P, Select, ContainerInferior } from './ProductCardStyle'
import {productList} from '../../assets/ProductList'


function ProductCard({product}) {
  return (

  <CardContainer className='CardContainer'>
    
    <ContainerSuperior className='ContainerSuperior'>
    {/* {productList.map((product) => (
    <Img src={product.imageUrl} alt={product.name}/>))} */}
    </ContainerSuperior>
    {productList.map((product) => ( 
    <ContainerInferior className='ContainerInferior' key={product.id}>
      <Img src={product.imageUrl} alt={product.name}/>
      <h1>{product.name}:</h1>
      <P className='P'>Valor: {product.value}</P>
      <Button className='Button'>
        Adicionar ao Carrinho
      </Button>
    </ContainerInferior>
    ))}
  </CardContainer>
  
  )
}


export default ProductCard
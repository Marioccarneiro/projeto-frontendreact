import React from 'react'
import { Button, Card, CardContainer, ContainerSuperior, Img, P, Select, ContainerInferior } from './ProductCardStyle'
import {productsList} from '../../assets/productsList'

//TESTE

function ProductCard({
  productsOrdered,
  ordination,
  setOrdination,
  amount,
  setAmount,
  cart,
  setCart,
  addToCart,}) {
  
  const handleChangeSelect = (event) => {
      setOrdination(event.target.value);
  };

  let quantity = 1;

  //TESTE
  
    return (

  <CardContainer className='CardContainer'>
    
    <ContainerSuperior className='ContainerSuperior'>
                   
    {/* TESTE */}

{/* 
                    <P>Produtos encontrados: {productsOrdered.length}</P>
                <Select value={ordination} onChange={handleChangeSelect}>
                    <option disabled value="">
                        Selecione
                    </option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>

         */}
        

    </ContainerSuperior>
    {productsList.map((product) => ( 
    <ContainerInferior className='ContainerInferior' key={product.id}>
      <Img src={product.imageUrl} alt={product.name}/>
      <h1>{product.name}:</h1>
      <P className='P'>Valor: {product.value}</P>
      <Button className='Button' onClick={() => addToCart(product.name, product.value, quantity)}>
        Adicionar ao Carrinho
      </Button>
    </ContainerInferior>
    ))}
  </CardContainer>
  
  )
}


export default ProductCard
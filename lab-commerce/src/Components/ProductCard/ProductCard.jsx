import React from 'react'
import { Button, Card, CardContainer, ContainerSuperior, Img, P, Select, ContainerInferior } from './ProductCardStyle'

function ProductCard() {
  return (
    // <CardContainer>
    //   <ContainerSuperior>
    //     <P>

    //     </P>
    //     <Select>

    //     </Select>
    //   </ContainerSuperior>
    //     <Card>
    //       <Img />
    //       <Button>
            
    //       </Button>
    //     </Card>
    // </CardContainer>
    <CardContainer>
      <ContainerSuperior>
        <Img />
      </ContainerSuperior>
      <ContainerInferior>
        <h1>Nome do Produto:</h1>
        <P>Valor:</P>
        <Button />
      </ContainerInferior>
    </CardContainer>
  
  )
}

export default ProductCard
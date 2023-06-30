import React from 'react'
import { BtnClear,ContainerFilter, Form, InputFilter, QuantityItems, IconCart, handleClick } from './FiltersStyle'
import { Button } from '../ProductCard/ProductCardStyle';


function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  productsList,
  productsFiltered,
  setProductsFiltered,
  treatmentNegativeNumber,
  handleSearchFilterChanges,
  handleMinFilterChanges,
  handleMaxFilterChanges,
  ClearFilters,
  quantityItems,
  // QuantityItems,
  IconCart,
  handleClick,
  
}) 
{
  
  return (
    <ContainerFilter>
        <Form>
                <InputFilter
                    type="text"
                    id="inputSearchFilter"
                    placeholder="Buscar por nome"
                    onChange={(event) => {
                        handleSearchFilterChanges(event);
                    }}
                    value={searchFilter}
                />
                <InputFilter
                    type="number"
                    id="inputMinFilter"
                    placeholder="Valor Mínimo"
                    onChange={(event) => {
                        handleMinFilterChanges(event);
                    }}
                    value={minFilter}
                />
                <InputFilter
                    type="number"
                    id="inputMaxFilter"
                    placeholder="Valor Máximo"
                    onChange={(event) => {
                        handleMaxFilterChanges(event);
                    }}
                    value={maxFilter}
                />
                <BtnClear onClick={(event) => ClearFilters(event)}>Limpar</BtnClear>
            </Form>
            <QuantityItems>
                    {quantityItems === 0 ? (quantityItems = '') : quantityItems}
                </QuantityItems>
                {/* <Button onClick={(event) => {
                        handleClick(event);
                    }}>
                     Adicionar Carrinho a direita
                </Button> */}




      {/* <h1>
        Filter
      </h1>
      <p>
        Valor Mínimo:
      </p>
        <input type='Number'/>
      <p>
        Valor Máximo:
      </p>
      <input type='Number'/>
      <p>
        Busca Por Nome:
      </p>
      <input type='Text'/> */}
      
    </ContainerFilter>
  )
}

export default Filters
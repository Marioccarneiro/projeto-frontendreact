import React from 'react'
import { ContainerFilter } from './FiltersStyle'

function Filters() {
  return (
    <ContainerFilter>
      
      <h1>
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
      <input type='Text'/>
      
    </ContainerFilter>
  )
}

export default Filters
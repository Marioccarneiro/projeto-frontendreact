import React from 'react'
import Cart from './Components/Cart/Cart'
import Filters from './Components/Filters/Filters'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Items from './Components/Items/Items'
import ProductCard from './Components/ProductCard/ProductCard'
import { ContainerApp, ContainerHomeCart } from './AppStyle'
import { ContainerItems } from './Components/Items/ItemsStyle'
import productList from './assets/ProductList'

function App() {
  
  // const [productsFiltered, setProductsFiltered] = useState(productsList)
  
  
  return (
    <>

      <Header />

      <ContainerApp>
             
        <Filters />
        
        <Home>
          
        </Home> 

        <Cart />
        
      </ContainerApp>

      </>
  )
}

export default App

// faltando

// {<ProductCard /> }
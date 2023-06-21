import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import { GlobalStyle } from './Components/GlobalStyle';
import Filter from "./Components/Filters/Filter"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Item from "./Components/ShoppingCart/Items/Item"
import ProductList from "./assets/ProductList"
import IMAGES from "./assets/ProductList"

const Button = styled.button`
  &:hover{
    cursor: pointer;
    background-color: lightblue;
  }  
`

export default function App() {


  return(
    <>
    <GlobalStyle />

    <div className='tela-inteira'>
      <header>
      <Home />
      LabCommerce
      </header>
      <main>
        
        <nav className='menu-vertical'>
        <Filter  />

        </nav>

      {/* sair section abaixo? */}

        
        <section className='painel-de-videos'> 
        
                 
        
        {/* <Item /> */}

        <ProductCard />
        <ProductCard />  
        <ProductCard />
       


        </section>

        <nav className='carrinho'>
        <Cart /> 
        

        </nav>

      </main>

      <footer>
      <h4>Oi! Eu moro no footer!</h4>

      </footer>   

      {/* <ProductList /> */}
    </div>
    </>
  )
} 





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//     </div>
//   );
// }

// export default App;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

body {
  width: 100%;
  padding: 0;
  margin: 0;
}

.tela-inteira {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
}

main {
  min-height: 80%;
  display: flex;
}

.teste{
    display:flex;
    flex-direction: row;
    text-align: center;
}

.menu-vertical {
  flex-basis: 200px;
  border-style: solid;
  border-width: thin;
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
}

.carrinho{
    flex-basis: 200px;
    border-style: solid;
    border-width: thin;
    margin-right: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
}

.botoes-meunu-vertical {
  list-style-type: none;
}

.painel-de-videos {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  row-gap: 10px;
  column-gap: 1%;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
}


.box-pagina-principal {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
}

.box-pagina-principal > button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3%;
    text-align: center;
    width: 50%;
}

footer {
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
}

.box-pagina-principal > img {
  width: 100%;
  height: 100%;
}

h4 {
  margin-left: 20px;
}
`;

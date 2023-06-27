import * as styled from 'styled-components'

export const ContainerHome = styled.styled.div`
  // Divisória
  margin: 2px;
  border: solid 2px;
  //
  display: block;
  flex-direction: row;
  background:lightblue ;
  width: 80%;
  margin-top: 1%;
  margin-bottom: 1%;
  height:96%;

  `
export const ContainerHomeUpper = styled.styled.div`

  height: 10vh;
  display: flex;
  flex-direction: row;
  border: solid 2px;
  text-align: center;
  justify-content: space-between;
  background: gray;

  .Product-Quantity{
    margin-left: 5%;
  }

  .Label-Order{
    margin-right: 3%;
    margin-top: 3%;
  }

  h1{ 
  text-align: left;
  justify-content: center;

  }

  h2{
  text-align: right;
  justify-content: center;
      
  }
      
  `
export const ContainerHomeLower = styled.styled.div`
    border: solid 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* border-width: thin; */

`
  
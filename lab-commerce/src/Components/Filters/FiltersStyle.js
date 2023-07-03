import * as styled from 'styled-components';

export const ContainerFilter = styled.styled.div`
    /* border: solid 2px black;
    background-color:lightgreen ;
    display: flex;
    justify-content: space-around;
    align-items:center;
    padding:1vh; */
    
    border: solid 1px lightblue;
    display: block;
    width: 15%;
    float: left;
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    background: black;
    
    `;


export const Form = styled.styled.form`
    display: grid;
    justify-content: space-around;
    gap: 1vh;
    h1{
    color: lightblue;
    }
`;

export const InputFilter = styled.styled.input`
    /* display: grid;
    justify-content: center; */
    margin-top: 20px;
    background: lightblue;
    
`;

export const BtnClear = styled.styled.button`
    display: grid;
    justify-self: center;
    justify-content: center;
    border: 1px solid;
    background: lightblue;
    cursor: pointer;

`;

//TIRAR

export const QuantityItems = styled.styled.p`
    /* modelo carrinho 1 e 2 */
    height: 3vh;
    font-weight: 600;
    /* modelo carrinho 3 */
    /* height: 1.9vh; */
`;

import * as styled from 'styled-components';

export const ContainerFilter = styled.styled.div`
    /* border: solid 2px black;
    background-color:lightgreen ;
    display: flex;
    justify-content: space-around;
    align-items:center;
    padding:1vh; */
    
    border: solid 2px;
    display: block;
    width: 20%;
    float: left;
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    width: 15%;
    `;

export const Form = styled.styled.form`
    display: grid;
    justify-content: space-around;
    gap: 2vh;
`;

export const InputFilter = styled.styled.input`
    /* display: grid;
    justify-content: center; */
`;

export const BtnClear = styled.styled.button`
    display: grid;
    justify-self: center;
    justify-content: center;
    border: 1px solid;
    background: pink;

`;

export const QuantityItems = styled.styled.p`
    /* modelo carrinho 1 e 2 */
    height: 3vh;
    font-weight: 600;
    /* modelo carrinho 3 */
    /* height: 1.9vh; */
`;

export const IconCart = styled.styled.img`
    cursor: pointer;
    height: 6vh;
    /* modelo carrinho 1 */
    margin: -4.5vh 2.5vh 1vh 2vh;
    /* modelo carrinho 2 */
    /* margin: -6vh 2.5vh 1vh 2vh; */
    /* modelo carrinho 3 */
    /* margin: -5.65vh 2.5vh 1vh 2vh; */
`;

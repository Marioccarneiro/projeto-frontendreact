import * as styled from 'styled-components';

export const CardContainer = styled.styled.div`
    /* height: 100vh; */
    display: flex;
    flex-direction: row;
    border: 2px solid;

    `;

export const Card = styled.styled.div`
    /* border: solid 1.2px black;
    align-items: center;
    width:20vw; */
    border: 2px solid;
`;

export const Img = styled.styled.img`
    width:20vw;
    height:60vh;
`;

export const Button = styled.styled.button`
    display: grid;
    justify-self: center;
`;

export const ContainerSuperior = styled.styled.div`

    width: 99%;
    display: flex;
    flex-direction: row;
    border: solid 2px;
    justify-content: flex-end;
    align-items: start;
    
`;

export const P = styled.styled.p`
    margin:2vw; 
    width:50%;
    display: block;
`;

export const Select = styled.styled.select`
    /* height: 3vh;
    margin:2vw; 
    width:50%; 
    display: block; */
`;

export const ContainerInferior = styled.styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    border: solid 2px;
    justify-content: space-between;
    align-items: center;  
    background: black;

`
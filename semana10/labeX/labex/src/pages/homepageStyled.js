import styled from "styled-components"
import astronalta from '../img/astronalta.jpg';

export const ButtonsContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content:center;
    align-items:center;

`
export const Container =styled.div`
bottom: 0px;
margin:0px;
width:100%;
height:600px;
background-image: url(${astronalta});
background-repeat: no-repeat;
background-size:cover;

.titulo{
    color:white;
    padding:100px;
    text-align:center;
}
`

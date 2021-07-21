import React from "react";
import { useHistory,} from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../routes/coordinator";
import { Container } from "./HomePageStyled";
import { ButtonsContainer } from "./HomePageStyled";





 const HomePage = () => {
  
    const history = useHistory()
    return(
        <Container>
           <h1 className='titulo'>LabeX</h1>
            <ButtonsContainer>
           <button onClick={() => goToListTripsPage(history)}>
             Viagens
           </button>
            
            <button onClick={() => goToLoginPage(history)}>
             Painel ADM
            </button>
            </ButtonsContainer>
        </Container>
    );
};
export default HomePage
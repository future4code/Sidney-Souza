import React from "react";
import { useHistory } from "react-router-dom";


export const HomePage = () => {

    const history = useHistory()

    const gotoListTripsPage = () => {
        history.push("/listTripsPage")
    }

    const gotoLoginPage = () =>{
        history.push("/loginPage")
    }

    return(
        <div>
           <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p> 

           <button onClick={gotoListTripsPage}>
             listTripsPage
           </button>

           <button onClick={gotoLoginPage}>
             loginPage
           </button>
        </div>
    );
};
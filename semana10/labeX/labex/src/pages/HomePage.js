import React from "react";
import { useHistory } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../routes/coordinator";
import { Astronalta} from "../img"

 const HomePage = () => {

    const history = useHistory()
    return(
        <div>
          <img classname = "home" src= "Astronalta"alt=""/>
           <h1>LabeX</h1>

           <button onClick={() => goToListTripsPage(history)}>
             Viagens
           </button>

            <button onClick={() => goToLoginPage(history)}>
               Área de Admin
            </button>
        </div>
    );
};
export default HomePage
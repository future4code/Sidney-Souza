import React from "react";
import { HomePage } from "./componentes/HomePage";
import { ListTripsPage} from "./componentes/ListTripsPage";
import { ApplicationFormPage} from "./componentes/ApplicationFormPage"
import {LoginPage} from "./componentes/LoginPage";
import {AdminHomePage} from "./componentes/AdminHomePage";
import {TripDetailsPage} from "./componentes/TripDetailsPage";
import {CreateTripPage} from "./componentes/CreateTripPage";
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import { useHistory } from "react-router-dom";




export default function App(){

  const history = useHistory()
    const gotoHomePage = () =>{
    history.push("/HomePage")
  }
  const gotoLoginPage = () =>{
    history.push("/loginPage")
}


  return(
    <BrowserRouter>
      <Switch>
        
        <Route exact path={"HomePage"}>
        <HomePage/>
        </Route>

        <Route exact path={"ListTripsPage"}>
        <ListTripsPage/>
        </Route>

        <Route exact path={"ApplicationFormPage"}>
        <ApplicationFormPage/>
        </Route>

        <Route exact path={"LoginPage"}>
        <LoginPage/>
        </Route>

        <Route exact path={"AdminHomePage"}>
        <AdminHomePage/>
        </Route>

        <Route exact path={"TripDetailsPage"}>
        <TripDetailsPage />
        </Route>

        <Route exact path={"CreateTripPage"}>
        <CreateTripPage />
        </Route>

      </Switch>
           <button onClick={gotoHomePage}>
             HomePage
           </button>
           <button onClick={gotoLoginPage}>
             loginPage
           </button>
    </BrowserRouter>
  );
};

import React from "react";
import{ LoginContainer, LogoImage, LoginButtonContainer} from "./styled";
import logo from "../../assets/logo/logo.jpg";
import {goToSignUp } from "../../routes/coordinator";
import Button from "@material-ui/core/Button"
import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";



const LoginPage = () => {
  

    const history = useHistory()
    return(
        
        <LoginContainer>
            
            <LogoImage src={logo} />
            <LoginForm/>
            <LoginButtonContainer>
                <Button
                    onClick={() => goToSignUp(history ) }
                    type={"submit"}
                    fullWidth
                     variant={"text"} 
                     color={"primary"}
                     margin={"dense"} 
                >
                         Não possui conta? Cadastre-se
                 </Button>     
            </LoginButtonContainer>
        </LoginContainer>
    );
};
export default LoginPage
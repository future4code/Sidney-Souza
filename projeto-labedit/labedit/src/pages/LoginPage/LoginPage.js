import React from "react";
import{ LoginContainer, LogoImage, SignUpButtonContainer} from "./styled";
import logo from "../../assets/unnamed.png";
//import TextField  from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button"
//import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  
    return(
        
        <LoginContainer>
            
            <LogoImage src={logo} />
            {/*<LoginForm/>
            <SignUpButtonContainer type={"submit"}
                 fullWidth
                 variant={"contained"} 
                 color={"primary"}
                 margin={"dense"} 
                >
                 Não possui conta? Cadastre-se
            </SignUpButtonContainer>*/}
        </LoginContainer>
    );
};
export default LoginPage
import React from "react"
import logo from "../../assets/logo/logo.jpg";
import {LogoImage,SignUpFormContainer } from "./styled";
import SingUpForm from "./SingnUpForm"

const SignUpPage = () => {
    return(
        <SignUpFormContainer>
          < LogoImage src={logo}/>
          <SingUpForm/>

        </SignUpFormContainer>
    );
};
export default SignUpPage
import React from "react";
import{  InputsContainer,SignUpFormContainer} from "./styled";
import TextField  from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import {goToSignUp } from "../../routes/coordinator";
import {signUp} from "../../services/user"




const SingnUpForm =() => {
    const history = useHistory()
    const [form, onChange, clear] = useForm ({name:"", email: "",password:""})
    
    
    const  onSubmitForm = (event) =>{
        event.preventDefault()
        signUp(form, clear, history)
        
    }

    return(
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
               <InputsContainer>
                    <TextField 
                        value={form.name}
                        name={"name"}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        pattern="[A-Za-z ]{3,}"
                        required
                        autoFocus
                        margin={"normal"}
                    />
                    <TextField 
                        value={form.email}
                        name={"email"}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        type={"email"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
                    <TextField 
                        value={form.password}
                        name={"password"}
                        onChange={onChange}
                        label={"Password"}
                        variant={"outlined"}
                        type={"password"}
                        fullWidth
                        required
                        margin={"normal"}
                    />
               </InputsContainer> 
              
                    <Button onClick={() => goToSignUp(history ) }
                      color={"primary"}
                      variant={"outlined"}
                      type={"submit"}
                      fullWidth
                    > 
                         Fazer cadastro
                    </Button>
            </SignUpFormContainer>
        </form>

    )
}
export default SingnUpForm
import React from "react";
import{  InputsContainer} from "./styled";
import TextField  from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import useForm from "../../hooks/useForm";


const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password:""})

    const onSubmitForm =(event) =>{
        event.preventDefault()
    }
    return(
     <InputsContainer>
            <form onSubmit={onSubmitForm}>
                 <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}   
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"passwrd"}
                    value={form.password}
                    onChange={onChange}  
                    label={"Senha"} 
                    variant={"outlined"} 
                    fullWidth 
                    margin={"dense"} 
                    required
                    type={"senha"}
                />

                 <Button 
                    type={"submit"}
                    fullWidth
                    variant={"contained"} 
                    color={"primary"}
                    margin={"dense"} 
                 >
                     Fazer Login!
            </Button>
         </form>
     </InputsContainer>
    )
};
export default LoginForm
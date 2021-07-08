import React from "react";
import useUnprotectedPage from "../componentes/useUnprotectedPage";
import { useHistory } from 'react-router-dom'
import useForm from "../componentes/useForm"
import { login } from "../services/requests"
import { goToHomePage } from "../routes/coordinator";


const LoginPage = () => {
    useUnprotectedPage()

    const history = useHistory()
    const { form, onChange } = useForm({ email: "", password: "" })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)
    }
 
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                   // pattern={"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$"}
                    title={"Sua senha de conter no mínimo 8 caracteres,pelomenos uma letra maiuscula e um caractere especial"}
                />
                <div>
                    <button onClick={() => goToHomePage(history)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>
                </div>

            </form>
        </div>
    )
};
export default LoginPage 
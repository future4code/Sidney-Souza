import axios from "axios";
import {BASE_URL} from "../constants/urls";
import {goToFeedPostsPage} from "../routes/coordinator"


export const login = (body,clear, history) => {
  
    axios.post(`${BASE_URL}/users/login`,body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPostsPage(history)

    })
    .catch((err) => alert("Erro no Login"))
}

export const signUp = (body,clear, history) => {
  
    axios.post(`${BASE_URL}/users/signUp`,body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPostsPage(history)

    })
    .catch((err)=>alert("Erro no Login"))
}
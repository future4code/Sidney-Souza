import { useHistory } from "react-router-dom"
import { goToAdminHomePage } from "../routes/coordinator"
import { useLayoutEffect } from "react";

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminHomePage(history)
        }
    }, [history])

}

export default useUnprotectedPage
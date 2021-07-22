import{useState} from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInptChange = (e) => {
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }
    const clear = () => {
        setForm(initialState)
    }
    return [form, handleInptChange, clear]
}
export default useForm
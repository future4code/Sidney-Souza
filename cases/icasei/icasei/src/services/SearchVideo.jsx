import axios from 'axios'
import { BASE_URL } from '../constants/Url'
import { KEY } from '../constants/Key'

export const searchVideo = (setData, search) => {

    axios.get(`${BASE_URL}search?part=id,snippet&q=${search}&key=${KEY}`)

        .then((res) => {
            setData(res.data.items)

        })

        .catch((err) => {
            console.log(err)
        })
}
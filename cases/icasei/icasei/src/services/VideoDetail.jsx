import axios from 'axios'
import { BASE_URL } from '../constants/Url'
import { KEY } from '../constants/Key'

export const videoDetail = (setData, videoId) => {

    axios.get(`${BASE_URL}videos?id=${videoId}&part=snippet,statistics&key=${KEY}`)

        .then((res) => {
            setData(res.data.items)

        })

        .catch((err) => {
            console.log(err)
        })
}
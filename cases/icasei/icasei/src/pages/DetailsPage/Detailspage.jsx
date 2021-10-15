import React, { useEffect, useState } from "react"
import { videoDetail } from '../../services/VideoDetail'
import { useParams, useHistory } from 'react-router-dom'
import DetailedCard from "../../components/DetailedCard/DetailedCard"
import { MainDiv } from './Styled'


const DetailsPage = () => {

    const [data, setData] = useState([])
    const { videoId } = useParams()
    const history = useHistory()

    useEffect(() => {
        videoDetail(setData, videoId)
    }, [])


    const goBack = () => {
        history.goBack()
    }

    return (<MainDiv>

        {console.log(data.snippet)}

        {data ? data.map((video) => {
            return <DetailedCard
                id={video.id}
                onClick={() => goBack()}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                description={video.snippet.description}
                likeCount={video.statistics.likeCount}
                dislikeCount={video.statistics.dislikeCount}
                viewCount={video.statistics.viewCount}

            />
        }) : <p>carregando</p>}


    </MainDiv>
    )
}

export default DetailsPage
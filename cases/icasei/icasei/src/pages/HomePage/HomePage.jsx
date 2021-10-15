import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { searchVideo } from "../../services/SearchVideo"
import { AiOutlineSearch } from 'react-icons/ai'
import { SearchDiv, InfoDiv, MainDiv } from "./styled"
import VideoCard from "../../components/VideoCard/VideoCard"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { goToVideo } from '../../routes/Coordinator'

const HomePage = () => {

    const history = useHistory()
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const setValue = (e) => {
        setSearch(e.target.value)
    }

    const videos = () => data.map((video) => {

        return <VideoCard
            key={video.id.videoId}
            thumbnails={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            description={video.snippet.description}
            goToVideo={() => goToVideo(history, video.id.videoId)}
        />
    })

    return (
        <MainDiv>

            <SearchDiv>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        fullWidth label="Pesquisar"
                        id="Pesquisar"
                        value={search}
                        onChange={setValue}
                    />
                </Box>
                <button
                    onClick={() => searchVideo(setData, search)}
                >
                    <AiOutlineSearch />
                </button>
            </SearchDiv>
            {search ? videos() : <InfoDiv> <h1>Uma infinidade de conteúdos, gratuitamente em suas mãos. Pesquise!</h1></InfoDiv>}

        </MainDiv>
    )
}

export default HomePage
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import { ContainerVideo, ButtonDiv, InfoDiv } from './Styled'
import { AiOutlineDislike, AiOutlineLike, AiOutlineEye, AiOutlineArrowLeft } from 'react-icons/ai'



const DetailedCard = (props) => {

    return <ContainerVideo>
        <Card sx={{ maxWidth: 345 }}>
            <ButtonDiv>
                <button onClick={props.onClick}><AiOutlineArrowLeft /></button> <h4>{props.title} </h4>
            </ButtonDiv>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${props.id}`}
                width='100%'
                height='380px'
                controls={true}
                playing={true}
                width='300px'
                height='200px'
            />
            <CardContent sx={{ paddingTop: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: 1 }}>
                <InfoDiv>
                    <h4>{props.channelTitle}</h4>
                    <h4><AiOutlineLike /> {props.likeCount}</h4>
                    <h4><AiOutlineDislike /> {props.dislikeCount}</h4>
                </InfoDiv>

                <Typography sx={{ height: 80, overflow: "auto" }} variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <AiOutlineEye /> <h5>{props.viewCount}</h5>
            </CardActions>
        </Card>

    </ContainerVideo>
}

export default DetailedCard
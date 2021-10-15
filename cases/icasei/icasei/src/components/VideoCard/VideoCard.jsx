import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { MainDiv } from './Styled'

const VideoCard = (props) => {

    return <MainDiv>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.thumbnails}
                    alt="Thumbnail do vídeo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                        {props.channelTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    onClick={props.goToVideo}
                    size="small"
                    color="primary">
                    DETALHES DO VÍDEO
                </Button>
            </CardActions>
        </Card>

    </MainDiv>
}

export default VideoCard
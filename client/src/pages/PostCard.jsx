import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { addLike, disLike } from '../utils/Api';
function PostCard({ data }) {
 const [update , setUpdate]=React.useState();
    const handleLike = async (id) => {
        try {
            const res = await addLike(id);
            setUpdate((prev)=>!prev)
        } catch (error) {
            console.log(error);
        }
    };

    const handleDislike = async (id) => {
        try {
            await disLike(id);

        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {

    }, [update])
    return (
        <Box width={'50%'} margin={'auto'} marginTop='20px' >
            <Card width={'250px'}>
                <CardActionArea >
                    <Typography gutterBottom variant="h" p={'15px'} component="div">
                        {data.content}
                    </Typography>
                    <CardMedia
                        component="img"
                        height="250px"

                        image={data.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Box> Author: - {data.author} </Box>
                        <br />
                        <Typography variant="body2" color="text.secondary" display="flex">
                            <Box>    <ThumbUpOffAltIcon onClick={() => handleLike(data._id)} /></Box>
                            <Box marginLeft={'10px'}> <ThumbDownOffAltIcon onClick={() => handleDislike(data._id)} /></Box>
                        </Typography>
                        <Box> {data.likes}</Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default PostCard;
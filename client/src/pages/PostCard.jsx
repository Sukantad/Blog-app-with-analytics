import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
function PostCard({ data }) {
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

                        <Typography variant="body2" color="text.secondary" display="flex">
                            <Box>    <ThumbUpOffAltIcon /></Box>
                            <Box marginLeft={'10px'}> <ThumbDownOffAltIcon /></Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default PostCard;
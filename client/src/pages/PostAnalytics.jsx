import React, { useEffect, useState } from 'react';
import { getPostAnalytics } from '../utils/Api';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function PostAnalytics() {
    const [totalPosts, setTotalPosts] = useState();
    async function fetchAnalytics() {
        const data = await getPostAnalytics();
        setTotalPosts(data?.LikedPosts)
    }

    useEffect(() => {
        fetchAnalytics();
    }, [])

    return (
        <Box width={{ xs:"80%", sm: "60%", md: "70%", lg: "60%", xl: "60%" }} margin={'auto'}>
            <Typography textAlign={'center'} fontSize={'20px'}> Total Posts - {totalPosts?.length}</Typography>
            {
                totalPosts?.map((data) => (
                    <Card width={'250px'} style={{ marginTop: "15px" }}>
                        <CardActionArea >
                            <Typography gutterBottom variant="h" p={'15px'} component="div">
                                {data?.content}
                            </Typography>
                            {data?.image != null ? <CardMedia
                                component="img"
                                height="250px"

                                image={data?.image}
                                alt="green iguana"
                            /> : ""}
                            <CardContent>
                                <Box> Author: - {data?.user_id?.name} </Box>
                                <br />
                                <Typography variant="body2" color="text.secondary" display="flex">

                                    <Box>    <ThumbUpOffAltIcon /></Box>
                                    <Box marginLeft={'10px'}> {data?.likes}</Box>

                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </Box>
    );
}

export default PostAnalytics;
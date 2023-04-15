import React, { useEffect, useState } from 'react';
import { getPostAnalytics } from '../utils/Api';
import { Box, LinearProgress, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function PostAnalytics() {
    const [totalPosts, setTotalPosts] = useState();
    const [loading, setLoading] = useState(false);

    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 30) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 30;
                const diff2 = Math.random() * 300;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);


    async function fetchAnalytics() {
        setLoading(true);
        const data = await getPostAnalytics();
        setTotalPosts(data?.LikedPosts)
        setLoading(false);
    }

    useEffect(() => {
        fetchAnalytics();
    }, [])

    return (
        <Box width={{ xs: "80%", sm: "60%", md: "70%", lg: "60%", xl: "60%" }} margin={'auto'}>
            <Typography textAlign={'center'} fontSize={'20px'}> Total Posts - {totalPosts?.length}</Typography>
            {!loading ? <>
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
            </>
                : <>

                    <LinearProgress sx={{ width: '100%', height: "25px" }} variant="buffer" value={progress} valueBuffer={buffer} />
                </>}
        </Box>
    );
}

export default PostAnalytics;
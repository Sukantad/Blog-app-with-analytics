import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios'
import { addLike, createPost, disLike, getAllPost } from '../utils/Api';
import { Box, Button, Card, CardContent, CardMedia, Input, Modal, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { CardActionArea } from '@mui/material';


function Home() {
    const [post, setPost] = useState([]);
    const [update, setUpdate] = React.useState(false);
    var count=1;
    function abc() {
      
          count++; 
           console.log("hello word",count);
    }
    abc();

    async function FetchAllPost() {
        var data = await getAllPost();
        setPost(data.post);

    }

    const handleLike = async (id) => {
        try {
            const res = await addLike(id);
            setUpdate((prev) => !prev)
        } catch (error) {
            console.log(error);
        }
    };

    const handleDislike = async (id) => {
        try {
            await disLike(id);
            setUpdate((prev) => !prev)
        } catch (error) {
            console.log(error);
        }
    };

    useLayoutEffect(() => {
        FetchAllPost();
    }, [update])




    return (
        <Box margin='20px'>
            <Button variant="contained" > <Link to={'/createpost'} style={{ textDecoration: 'none', color: "white" }}> Create a post </Link></Button>

            {
                post?.map((data, i) => (
                    <Box width={{ sm: "90%", md: "70%", lg: "60%", xl: "50%" }} margin={'auto'} marginTop='20px' key={Math.random() + i}>
                        <Card width={'250px'}>
                            <CardActionArea >
                                <Typography gutterBottom variant="h" p={'15px'} component="div">
                                    {data.content}
                                </Typography>
                                {data?.image != null ? <CardMedia
                                    component="img"
                                    height="250px"

                                    image={data.image}
                                    alt="green iguana"
                                /> : ""}
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
                ))
            }

        </Box>
    );
}

export default Home;
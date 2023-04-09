import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { createPost, getAllPost } from '../utils/Api';
import { Box, Button, Input, Modal, TextField, Typography } from '@mui/material';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';



function Home() {
    const [post, setPost] = useState([]);


    async function FetchAllPost() {
        var data = await getAllPost();
        setPost(data.post);
        console.log("it's", data.post)
    }


    useEffect(() => {
        FetchAllPost();
    }, [])




    return (
        <Box margin='20px'>
           <Button variant="contained" > <Link to={'/createpost'} style={{ textDecoration: 'none', color:"white" }}> Create a post </Link></Button>

            {
                post?.map((ele, i) => (
                    <PostCard key={Math.random() + i} data={ele} />
                ))
            }

        </Box>
    );
}

export default Home;
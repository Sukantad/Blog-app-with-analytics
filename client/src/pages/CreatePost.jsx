import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { createPost, getAllPost } from '../utils/Api';
import { Box, Button, Input, Modal, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    padding: "20px",
    border: "1px solid grey",
    borderRadius: "20px"

};

function CreatePost() {
    const userId = localStorage.getItem("userId") || null;
    const navigate = useNavigate();
    const [postInput, setPostInput] = useState({ user_id: userId, content: "", image: "" });
    const [photo, setPhoto] = useState("")


    async function CreateSinglePost(data) {

        try {
            var res = await createPost(data);
            console.log(res.data, "res")
        } catch (error) {
            console.log(error);
        }


    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostInput({ ...postInput, [name]: value });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = new FormData();
            data.append("file", photo);
            data.append("upload_preset", "social_media");
            const res = photo && await axios.post("https://api.cloudinary.com/v1_1/dz84rrvfb/image/upload", data)
            postInput.image = res?.data?.secure_url
            CreateSinglePost(postInput)
            navigate('/')
        } catch (error) {
            console.log(error);
        }

    }

    const { content, user_id } = postInput;
    return (
        <div>
            <Box style={style} width={{ sx: "70%", sm: "70%", md: "50%", lg: "40%", xl: "50%" }} mt='25px' margin={'auto'} p='15px' >
                <form onSubmit={handleSubmit}>

                    <Input type='file'
                        id="image"
                        label="Image"
                        variant="outlined"
                        fullWidth

                        name="image"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                    <br />
                    <TextField
                        id="content"
                        label="Content"
                        variant="outlined"
                        inputProps={{ maxLength: 300 }}
                        multiline
                        rows={10}
                        fullWidth
                        name="content"
                        value={content}
                        onChange={handleChange}
                        required
                        style={{ marginTop: "15px" }}
                    />
                    <Button style={{ marginTop: "15px" }} type='submit' variant="contained" color="primary" margin='auto'>
                        Post
                    </Button>
                </form>
            </Box>
        </div>
    );
}

export default CreatePost;

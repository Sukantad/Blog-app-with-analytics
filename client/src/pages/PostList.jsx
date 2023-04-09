import React, { useEffect, useState } from 'react';
import { GetPostList, GetUserList, PostUpdate, SinglePostDelete, SingleUserDelete, UserUpdate } from '../utils/Api';
import { Box, Button, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Link } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
function PostList() {
    const [totalUser,setTotalUsers]=useState();
    const [form, setForm] = useState();
    const [update , setUpdate]=useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    async function fetchAllUsers() {
        const data = await GetPostList();
        setTotalUsers(data.post)
        console.log(data.post, "pd")
    }

    function handleUpdate(e) {
        setForm(e);
        console.log(e)

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await PostUpdate(form._id, form);
        fetchAllUsers();
        setOpen(false)



    };
    const handleDelete = async (e) => {
        console.log(e, "hlw")
        await SinglePostDelete(e);
        fetchAllUsers();
    }

    useEffect(() => {
        fetchAllUsers();
    }, [])
    return (
        <Box width={'90%'} margin={'auto'}>
            <Typography textAlign={'center'} fontSize={'20px'}> Posts</Typography>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>



                        <TextField
                            margin="normal"
                            fullWidth
                            name="content"
                            label="Content"
                            type="text"
                            id="content"
                            autoComplete="current-content"
                            inputProps={{ maxLength: 200 }}
                            multiline
                            rows={10}
                            value={form?.content}
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >

                            Update
                        </Button>

                    </Box>
                </Box>
            </Modal>

          {totalUser?.length?  <TableContainer component={Paper} >
                <Table aria-label="a dense table">
                    <TableHead  >
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell align="right">Content</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalUser?.map((ele) => (
                            <TableRow
                                key={ele?.author}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {ele?.author}
                                </TableCell>
                                <TableCell align="right">{ele?.content}</TableCell>

                                <TableCell align="right" > <Link>  <EditIcon onClick={() => { handleOpen(); handleUpdate(ele) }} /></Link></TableCell>

                                <TableCell align="right"><Link>  <DeleteIcon onClick={() => handleDelete(ele._id)} /></Link></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            :<Typography textAlign={'center'} fontSize={'20px'} mt={'50px'}> No Posts </Typography>}

        </Box>
    );

}
export default PostList
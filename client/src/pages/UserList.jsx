import React, { useEffect, useState } from 'react';
import { GetUserList, SingleUserDelete, UserUpdate } from '../utils/Api';
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
function UserList() {
    const [form, setForm] = useState();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [totalUser, setTotalUsers] = useState();
   

    async function fetchAllUsers() {
        const data = await GetUserList();
        setTotalUsers(data.user)
        console.log(data.user)
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
       await UserUpdate(form._id, form);
       fetchAllUsers();
       setOpen(false)
  


    };
 const handleDelete=async(e)=>{
         console.log(e,"hlw")
   await SingleUserDelete(e);
   fetchAllUsers();
 }

    useEffect(() => {
        fetchAllUsers();
    }, [])
    return (
        <Box width={'90%'} margin={'auto'}>
            <Typography textAlign={'center'} fontSize={'20px'}> All Users</Typography>

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
                            name="name"
                            label="Name"
                            type="text"
                            id="name"
                            autoComplete="name"
                            autoFocus
                            inputProps={{ maxLength: 50 }}
                            value={form?.name}
                            onChange={handleChange}
                        />


                        <TextField
                            margin="normal"

                            fullWidth
                            name="bio"
                            label="Bio"
                            type="text"
                            id="bio"
                            autoComplete="current-bio"
                            inputProps={{ maxLength: 200 }}
                            multiline
                            rows={5}
                            value={form?.bio}
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

            <TableContainer component={Paper} >
                <Table aria-label="a dense table">
                    <TableHead  >
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalUser?.map((ele) => (
                            <TableRow
                                key={ele?.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {ele?.name}
                                </TableCell>
                                <TableCell align="right">{ele?.email}</TableCell>

                                <TableCell align="right" > <Link>  <EditIcon  onClick={() => { handleOpen(); handleUpdate(ele) }} /></Link></TableCell>

                                <TableCell align="right"><Link>  <DeleteIcon onClick={()=>handleDelete(ele._id)}/></Link></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );

}
export default UserList
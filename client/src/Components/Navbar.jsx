import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>   Social friends </Link>
                        </Typography>
                        <Link to="userlist" style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit" >  User List </Button></Link>
                        <Link to="postlist" style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit" >  Post List </Button></Link>

                        <Link to="/analytics/users" style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit" >  User Analytics </Button></Link>
                        <Button color="inherit"> <Link to="/analytics/posts" style={{ textDecoration: 'none', color: 'white' }}> Post Analytics</Link></Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    );
}

export default Navbar;
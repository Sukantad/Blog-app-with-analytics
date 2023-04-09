import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import {

    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const anchor = "left";



    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div>

            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="end"
                            style={{
                                marginRight: "1rem",
                                display: isSmallScreen ? "flex" : "none",
                            }}
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(anchor, true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>   Social friends </Link>
                        </Typography>
                      
                            <Link to="/userlist" style={{ textDecoration: 'none', color: 'white', display: isSmallScreen ? "none" : "flex" }}> <Button color="inherit" >  User List </Button></Link>
                            <Link to="/postlist" style={{ textDecoration: 'none', color: 'white', display: isSmallScreen ? "none" : "flex" }}> <Button color="inherit" >  Post List </Button></Link>
                            <Link to="/analytics/posts" style={{ textDecoration: 'none', color: 'white', display: isSmallScreen ? "none" : "flex" }}> <Button color="inherit" >  Post Analytics </Button></Link>
                            <Link to="/analytics/users" style={{ textDecoration: 'none', color: 'white', display: isSmallScreen ? "none" : "flex" }}> <Button color="inherit" >  User Analytics </Button></Link>
                      

                    </Toolbar>
                </AppBar>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    <div
                        style={{ width: "150px" }}
                        role="presentation"
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        <Link to="/userlist" style={{ textDecoration: 'none', }}> <Button color="inherit" >  User List </Button></Link>
                        <Link to="/postlist" style={{ textDecoration: 'none' }}> <Button color="inherit" >  Post List </Button></Link>

                        <Link to="/analytics/posts" style={{ textDecoration: 'none' }}> <Button color="inherit" >  Post Analytics </Button></Link>
                        <Link to="/analytics/users" style={{ textDecoration: 'none' }}> <Button color="inherit" >  User Analytics </Button></Link>
                        <List>

                            <ListItem button>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText />

                            </ListItem>
                            <ListItem button>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText />

                            </ListItem>

                        </List>
                    </div>
                </Drawer>
            </div>

        </div>
    );
}

export default Navbar;
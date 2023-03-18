import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to={`/`} style={style}>
                        User Application
                    </Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const style = {
    color: "inherit",
    textDecoration: "none",
    flexGrow: 1
}

export default NavBar;
import React from 'react';
import { AppBar, Typography, Toolbar, Icon, Button, Avatar } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import useStyles from './styles';


const Navbar = () => {
    const user = null;

    const classes = useStyles();

    const logout = () => {
        console.log("Logging out");
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <Typography variant="h3">Budget4You</Typography>
                <div className={classes.icon}>
                    <MonetizationOnIcon className={classes.iconName} />
                </div>
            </Link>
            
            <Toolbar>
                {user?.result ? (
                    <div>
                        <Avatar></Avatar>
                        <Typography></Typography>
                        <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
                
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

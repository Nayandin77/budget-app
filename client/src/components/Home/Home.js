import React, {useState} from 'react';
import { Grow, Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, } from 'react-redux';

import Calender from '../Calender/Calender';
import Amount from '../Amount/Amount';
import Details from '../Details/Details';
import Section from '../Section/Section';

import useStyles from './styles';
// import { set } from 'date-fns';

const Home = (props) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();

    const checkState = useSelector((state) => state);

    // const [_switch, handleToggle] = useState("on");

    const testFunc = () => {
        console.log(checkState);
        console.log(user);
        console.log(props);
        // console.log(test_user);
    }

    // useEffect(() => {
        // setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [user]);

    return (
        <div>
            { user?.result ? (
                <Grow in>
                    <Container maxWidth="xl">
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={1} sm={3} md={3} />
                            <Grid item xs={12} sm={6} md={6}>
                                <Amount />
                            </Grid>
                            <Grid item xs={1} sm={3} md={3}>
                                <Button onClick={testFunc}>
                                    Test State
                                </Button>
                                {/* <Button onClick={() => handleToggle(_switch === "on" ? "off" : "on")}>
                                    { _switch }
                                </Button> */}
                            </Grid> 

                            <Grid item xs={12} sm={6} md={4}>
                                <Calender user={user} />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Details />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Section />
                            </Grid>

                        </Grid>
                    </Container>
                </Grow>
                ) : (
                <div>
                    {localStorage.removeItem('state')}
                    <Container maxWidth="sm" className={classes.containerNSI}>
                        <Paper className={classes.paperNSI} elevation={2}>
                            <Typography variant="h5" align='center' className={classes.textNSI}>Please&nbsp;<Link to="/auth">Sign In</Link>&nbsp;to view your budget</Typography>
                        </Paper>
                    </Container>
                </div> )}
        </div>
    )
}

export default Home;

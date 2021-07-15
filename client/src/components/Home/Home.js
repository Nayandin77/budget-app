import React from 'react';
import { Grow, Container, Grid } from '@material-ui/core';

import Calender from '../Calender/Calender';
import Amount from '../Amount/Amount';
import Details from '../Details/Details';
import Section from '../Section/Section';


const Home = () => {
    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={1} sm={3} md={3} />
                    <Grid item xs={12} sm={6} md={6}>
                        <Amount />
                    </Grid>
                    <Grid item xs={1} sm={3} md={3} />

                    <Grid item xs={12} sm={6} md={4}>
                        <Calender />
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
    )
}

export default Home;

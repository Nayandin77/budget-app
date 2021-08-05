import React from 'react'
import { Container, Card, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';


const Amount = () => {
    // const selected = useSelector((store) => store.calender.months.data[0]);

    // const amount = selected.

    const classes = useStyles();

    const testFunc = () => {
        // console.log(selected);
    }

    return (
        <Container>
            <Card className={classes.card}>
                <Typography className={classes.title} variant="h5">
                    {/* Amount left in the { selected } */}
                </Typography>
                <Typography className={classes.amount} variant="h6">
                    {/* $ { amount } */}
                </Typography>
                <Button onClick={testFunc}>
                    Test Amount
                </Button>
            </Card>
        </Container>
    )
}

export default Amount;

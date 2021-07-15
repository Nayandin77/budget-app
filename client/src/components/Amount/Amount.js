import React from 'react'
import { Container, Card, Typography } from '@material-ui/core';

import useStyles from './styles';


const Amount = () => {
    const selected = "month";
    const amount = 4000

    const classes = useStyles();

    return (
        <Container>
            <Card className={classes.card}>
                <Typography className={classes.title} variant="h5">
                    Amount left in the { selected }
                </Typography>
                <Typography className={classes.amount} variant="h6">
                    $ { amount }
                </Typography>
            </Card>
        </Container>
    )
}

export default Amount;

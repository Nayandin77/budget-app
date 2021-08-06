import React, { useState } from 'react'
import { Container, Card, Button, Input, FormControl, InputLabel, InputAdornment } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import { monthNames } from '../../constants/dateEnum';


const Amount = () => {
    const month = useSelector((store) => monthNames[store.calender.selected.month])
    const initialValue = useSelector((store) => store.calender.selected.monthBudget);

    const [amount, setAmount] = useState(initialValue);

    const classes = useStyles();

    // const testFunc = () => {
    //     console.log(amount);
    // }

    // handle Set Amount for monthBudget
    const handleChange = () => {

    }

    return (
        <Container>
            <Card className={classes.card}>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                        {`Budget for ${month}`}
                    </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
                {/* <Button onClick={testFunc}>
                    Test Amount
                </Button> */}
            </Card>
        </Container>
    )
}

export default Amount;

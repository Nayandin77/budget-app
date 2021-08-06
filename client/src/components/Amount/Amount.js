import React, { useState } from 'react'
import { Container, Card, Input, FormControl, Button, InputLabel, InputAdornment } from '@material-ui/core';
import { useSelector, useStore } from 'react-redux';

import useStyles from './styles';
import { monthNames } from '../../constants/dateEnum';


const Amount = () => {
    const store = useStore();
    const month = useSelector((store) => monthNames[store.calender.selected.month]);
    const initialAmount = useSelector((store) => store.calender.selected.monthBudget);

    const [amount, setAmount] = useState(initialAmount);

    const classes = useStyles();

    const testFunc = () => {
        // dispatch so selected.month = amount
        console.log(amount);
    }


    // handle Set Amount for monthBudget
    const handleChange = () => (event) => {
        setAmount(event.target.value);
    }

    return (
        <Container>
            <Card className={classes.card}>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                        { month === undefined ? "none selected" : `Budget for ${month}` }
                    </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button onClick={testFunc}>
                                    Set
                                </Button>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Card>
        </Container>
    )
}

export default Amount;

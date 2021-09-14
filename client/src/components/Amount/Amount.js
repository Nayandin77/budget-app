import React, { useState, useEffect } from 'react'
import { Container, Card, Input, FormControl, Button, InputLabel, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector, useStore } from 'react-redux';

import useStyles from './styles';
import { monthNames } from '../../constants/dateEnum';
import { updateAmount } from '../../actions/month';


const Amount = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const months = useSelector((store) => store.calender.months);
    const month = useSelector((store) => !store.calender.selected ? "Not Selected" : store.calender.selected);
    const initialAmount = useSelector((store) => !store.calender.selected ? "Not Selected" : store.calender.selected.monthBudget);

    // const [amount, setAmount] = useState(document.getElementById("standard-adornment-amount").value = month.monthBudget);
    const [amount, setAmount] = useState(initialAmount);


    // Update Value when Selected Month changes
    useEffect(() => {
        document.getElementById("standard-adornment-amount").value = month.monthBudget;
    })

    // need to update amount

    // Update Selected Month, Selected Month's MonthBudget based on amount
    const saveAmount = () => {
        setAmount(amount);
        dispatch(updateAmount(amount, month));

        const index = months.findIndex((temp) => temp._id === month._id);
        months[index] = month;
    }

    // Handle change of input for amount
    const handleChange = () => (event) => {
        // event.preventDefault();
        setAmount(event.target.value);
    }

    return (
        <Container>
            <Card className={classes.card}>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                        { month === undefined ? "none selected" : `Budget for ${monthNames[month.month]}` }
                    </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={amount}
                        onChange={handleChange()}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button onClick={saveAmount}>
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

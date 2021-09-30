import React, { useState, useEffect, useRef } from 'react'
import { Container, Card, Input, FormControl, Button, InputLabel, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { monthNames } from '../../constants/dateEnum';
import { updateAmount } from '../../actions/month';



const Amount = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    // const month = useSelector((store) => store.month);
    const months = useSelector((store) => store.month.months);
    const selectedMonth = useSelector((store) => !store.month.selected || store.month.selected === false ? "Not Selected" : store.month.selected);
    const initialAmount = useSelector((store) => !store.month.selected ? "Not Selected" : store.month.selected.monthBudget);
    
    const [amount, setAmount] = useState(initialAmount);

    const prevSelectedMonth = usePrevious(selectedMonth);

    // Update Value when Selected Month changes
    useEffect(() => {
        if (prevSelectedMonth !== selectedMonth) {
            setAmount(selectedMonth.monthBudget);
        }
    }, []);

    // Update Selected Month, Selected Month's MonthBudget based on amount
    const saveAmount = () => {
        setAmount(amount);

        dispatch(updateAmount(amount, selectedMonth));

        const index = months.findIndex((temp) => temp._id === selectedMonth._id);
        months[index] = selectedMonth;
    }


    return (
        <Container>
            <Card className={classes.card}>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                        { selectedMonth === undefined ? "none selected" : `Budget for ${monthNames[selectedMonth.month]}` }
                    </InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value) }
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

const usePrevious = (oldValue) => {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = oldValue;
    }, [oldValue]);

    return ref.current;
}

export default Amount;

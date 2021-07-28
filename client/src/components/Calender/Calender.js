import React, { useState } from 'react';
import { Container, Card, Typography, IconButton, CardContent, FormControl, FormLabel,
         RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import isSameDay from 'date-fns/isSameDay';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import isWithinInterval from 'date-fns/isWithinInterval';
import clsx from 'clsx';

import useStyles from './styles';
import { monthNames } from './DateEnum/dateEnum';


const Calender = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [monthWeek, setValue] = useState('month');
    // const state = {
    //     selectedDate: new Date(),
    // };
    const classes = useStyles();

    const handleValue = (e) => {
        setValue(e.target.value);
    };

    // const { selectedDate } = state.selectedDate;

    
    // const handleWeekChange = (date) => {
    //     state = ({ selectedDate: startOfWeek(date) });
    // };

    const formatWeekSelectLabel = (date, invalidLabel) => {
        let dateClone = date;
    
        return dateClone && isValid(dateClone)
          ? `Week of ${format(startOfWeek(dateClone), "MMM do")}`
          : invalidLabel;
    };

    const renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
        let dateClone = date;
        let selectedDateClone = selectedDate;
    
        const start = startOfWeek(selectedDateClone);
        const end = endOfWeek(selectedDateClone);
    
        const dayIsBetween = isWithinInterval(dateClone, { start, end });
        const isFirstDay = isSameDay(dateClone, start);
        const isLastDay = isSameDay(dateClone, end);
    
        const wrapperClassName = clsx({
          [classes.highlight]: dayIsBetween,
          [classes.firstHighlight]: isFirstDay,
          [classes.endHighlight]: isLastDay,
        });
    
        const dayClassName = clsx(classes.day, {
          [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
          [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
        });
    
        return (
          <div className={wrapperClassName}>
            <IconButton className={dayClassName}>
              <span> {format(dateClone, "d")} </span>
            </IconButton>
          </div>
        );
    };

    return (
        <Container>
            <Button>
                Test
            </Button>
            <Card >
                <CardContent>
                    <Typography className={classes.cardTitle} variant="h5">
                        Calender
                    </Typography>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">View by:</FormLabel>
                        <RadioGroup row aria-label="View by" name="view" value={monthWeek} onChange={handleValue}>
                            <FormControlLabel value="month" control={<Radio />} label="Month" />
                            <FormControlLabel value="week" control={<Radio />} label="Week" />
                        </RadioGroup>
                    </FormControl>
                    { monthWeek === "month" ? (
                        <DatePicker
                            views={["year", "month"]}
                            label="Year / Month"
                            helperText="Select Year and a Month"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    ) : (
                        <DatePicker
                            label="Week of Year / Month"
                            helperText="Select Year, Month, and a Week"
                            value={selectedDate}
                            //onChange={handleWeekChange}
                            renderDay={renderWrappedWeekDay}
                            labelFunc={formatWeekSelectLabel}
                        />
                    )}
                    <Typography>
                        {selectedDate.month}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Calender;

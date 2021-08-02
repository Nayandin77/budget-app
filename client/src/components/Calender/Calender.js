import React, { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { monthNames } from './DateEnum/dateEnum';

import { getAmount } from '../../actions/month';



export default class Calender extends React.Component {
    state = {
        date: ({ month: new Date().getMonth(), year: new Date().getFullYear() }),

    }
    // const [selectedDate, handleDateChange] = useState(new Date());
    // const [selectedDate, handleDateChange] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });
    
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('Date' + selectedDate);
    // }, [])

    handleValue = async (e) => {
        e.preventDefault();

        // setValue(e.target.value);
    };

    handleSubmit = (e) => { 
        // handleDateChange()
        // setValue({
        //     selectedDate = 
        // })
    }

    /*
    formatWeekSelectLabel = (date, invalidLabel) => {
        let dateClone = date;
    
        return dateClone && isValid(dateClone)
          ? `Week of ${format(startOfWeek(dateClone), "MMM do")}`
          : invalidLabel;
    };

    renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
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
    */

    render() {
        classes = useStyles();
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
                        <RadioGroup row aria-label="View by" name="view" value={monthWeek} onChange={this.handleValue}>
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
                            onChange={this.handleDateChange()}
                        />
                    ) : (
                        <DatePicker
                            label="Week of Year / Month"
                            helperText="Select Year, Month, and a Week"
                            value={selectedDate}
                            //onChange={handleWeekChange}
                            renderDay={this.renderWrappedWeekDay()}
                            labelFunc={this.formatWeekSelectLabel()}
                        />
                    )}
                    <Button onClick={handleSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Select</Button>
                    {/* <Typography>
                        {selectedDate.month}
                    </Typography> */}
                </CardContent>
            </Card>
        </Container>
        )
    }
}


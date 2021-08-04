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
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { monthNames } from './DateEnum/dateEnum';

import { createMonth, getMonths } from '../../actions/month';

const Calender = (props) => {
    const classes = useStyles();

    const [selectedDate, handleSelectedDate] = useState(new Date());
    const [monthWeek, handleToggle] = useState("month");

    const dispatch = useDispatch();

    const handleSubmit = () => { 
        const parseDate = ({
            createdBy: props.user.result.email,
            month: selectedDate.getMonth(), 
            year: selectedDate.getFullYear(), 
            _id: String(selectedDate.getMonth()) + String(selectedDate.getFullYear()) + String(props.user.result._id) 
        });
        dispatch(createMonth(parseDate));
    }

    const grabMonth = () => {
        dispatch(getMonths(props.user.result.email));
    }

    // useEffect(() => {
        // if (props.user)
        // dispatch(getMonths(props.user.result.email));
    // }, [dispatch, props.user])

    /*
    formatWeekSelectLabel = (date, invalidLabel) => {
        let dateClone = date;
    
        return dateClone && isValid(dateClone)
          ? `Week of ${format(startOfWeek(dateClone), "MMM do")}`
          : invalidLabel;
    };
    
    renderWrappedWeekDay = (date, selectedDate, dayInCurrentMonth) => {
        const { classes } = this.props;
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
                        <RadioGroup row aria-label="View by" name="view" value={monthWeek} onChange={() => handleToggle( monthWeek === "month" ? "week" : "month")}>
                            <FormControlLabel value="month" control={<Radio />} label="Month" />
                            <FormControlLabel value="week" control={<Radio />} label="Week" />
                        </RadioGroup>
                    </FormControl>
                    { monthWeek === "month" ? (
                        <div>
                            <DatePicker
                                views={["year", "month"]}
                                label="Year / Month"
                                helperText="Select Year and a Month"
                                value={selectedDate}
                                onChange= { handleSelectedDate }
                            />
                            <Button onClick={ handleSubmit } variant="contained" color="primary" size="large" type="submit" fullWidth>Select Date</Button>
                            <Button onClick={ grabMonth } variant="contained" color="primary" size="large" type="submit" fullWidth>Grab Date</Button>
                        </div>
                    ) : (
                        <div>
                            Fix later!
                        </div>
                        // <DatePicker
                        //     label="Week of Year / Month"
                        //     helperText="Select Year, Month, and a Week"
                        //     value={this.state.selectedDate}
                        //     //onChange={handleWeekChange}
                        //     renderDay={this.renderWrappedWeekDay()}
                        //     labelFunc={this.formatWeekSelectLabel()}
                        // />
                    )}
                </CardContent>
            </Card>
        </Container>
    );
}

export default Calender;
import React, { useState, useRef, useEffect } from 'react';
import { Container, Card, Typography, List, Button, Input, TextField, CardContent } from '@material-ui/core';
import { ListItemButton, ListItem, ListItemText, TableContainer, Table, TableBody, TableCell, TableRow, Paper} from '@mui/material/';

import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@mui/icons-material/Add';

import { addItem, removeItem, selectedDetail } from '../../actions/month';
import { monthNames } from '../../constants/dateEnum';
import useStyles from './styles';


const Details = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const initialData = useSelector((store) => !store.month.selected.details ? [] : store.month.selected.details);
    const selectedMonth = useSelector((store) => !store.month.selected ? '' : store.month.selected);
    const months = useSelector((store) => store.month.months);

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const [details, setDetails] = useState(initialData);
    const [detail, setDetail] = useState('');

    const prevSelectedMonth = usePrevious(selectedMonth);

    useEffect(() => {
        if (prevSelectedMonth !== selectedMonth) {
            setDetails(selectedMonth.details);
            setDetail('');
        }
    })

    const handleChangeName = () => (event) => {
        setDetail(event.target.value);
        console.log(event.target.value)
        // dispatch selectedDetails
    }

    const handleChangeValue = () => (event) => {
        // setDetail(event.target.value);
        console.log("test", event.target.value);
        // dispatch selectedDetails
    }

    // Adds Detail to Details
    const handleAdd = () => (event) => {
        const parseDetail = {
            name: detail,
            items: [],
        }
        const newDetails = details.concat(parseDetail);

        setDetails(newDetails);

        dispatch(addItem(newDetails, selectedMonth));

        const index = months.findIndex((temp) => temp._id === selectedMonth._id);
        months[index] = selectedMonth;
    }

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
        console.log(details[index])
        dispatch(selectedDetail(details[index]));
    };

    // Removes Detail from Details
    const handleRemove = (name) => {
        const newDetails = details.filter((item) => item.name !== name);

        setDetails(newDetails);

        dispatch(removeItem(newDetails, selectedMonth));

        const index = months.findIndex((temp) => temp._id === selectedMonth._id);
        months[index] = selectedMonth;
    }

    // const test = () => {
    //     console.log(details)
    // }
    
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography className={classes.cardTitle} variant="h6">
                        { selectedMonth ? `Details for ${monthNames[selectedMonth.month]}` : 'Details (Select a Date please)' }
                    </Typography>
                </CardContent>
                {/* <Button onClick={test()}>Test</Button> */}
                
                <TableContainer component={Paper}>
                    <Table >
                        <TableBody>
                            { details?.map((item, index) => (
                                <TableRow>
                                    <TableCell />
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>100</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleRemove(item.name)}>
                                            <DeleteIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) }
                            <TableRow>
                                <TableCell>
                                    <Button onClick={handleAdd()}><AddIcon /></Button>
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        required
                                        label="Name"
                                        type="text"
                                        size="small"
                                        onChange={handleChangeName()}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        required
                                        label="Amount"
                                        type="number"
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <List>
                    { details?.map((item, index) => (
                        <div>
                            <ListItem>
                                <ListItemButton
                                    selected={ selectedIndex === index }
                                    onClick={() => handleListItemClick(index)}
                                >
                                <ListItemText primary={item.name} />
                                </ListItemButton>
                                <Button onClick={() => handleRemove(item.name)}>
                                    <DeleteIcon />
                                </Button>
                            </ListItem>
                        </div>
                    )) }
                </List>

                <AddItem
                    detail={detail}
                    onChange={handleChangeName()}
                    onAdd={handleAdd()}
                />
            </Card>
        </Container>
    )
}

export default Details;

const AddItem = ({ detail, onChange, onAdd }) => (
    <div>
        <Button onClick={onAdd}><AddIcon /></Button>
        <Input 
            type="text"
            value={detail}
            onChange={onChange}
        />
    </div>
);

const EditItem = ({  }) => (
    <div>
        <Button><EditIcon /></Button>
    </div>
)

const usePrevious = (oldValue) => {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = oldValue;
    }, [oldValue]);

    return ref.current;
}
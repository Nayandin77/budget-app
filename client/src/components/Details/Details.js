import React, { useState, useRef, useEffect } from 'react';
import { Container, Card, Typography, List, Button, Input, TextField, CardContent } from '@material-ui/core';
import { ListItemButton, ListItem, ListItemText, TableContainer, Table, TableBody, TableCell, TableRow, Paper, TableHead} from '@mui/material/';

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
    const [detailAmount, setDetailAmount] = useState('');

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

    const handleAddAmount = () => (event) => {
        setDetailAmount(event.target.value);
        console.log(event.target.value);
    }

    // Adds Detail to Details
    const handleAdd = () => (event) => {
        const parseDetail = {
            name: detail,
            amount: detailAmount,
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
        setSelectedIndex(null);

        // Set selectedDetail to null
        dispatch(selectedDetail(null));
        
        // Remove Item from list, and updated selectedMonth
        dispatch(removeItem(newDetails, selectedMonth));

        // Update Months array in localstorage
        const index = months.findIndex((temp) => temp._id === selectedMonth._id);
        months[index] = selectedMonth;
    }

    // const test = () => {
    //     console.log(details)
    // }
    
    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={6}>
                            { selectedMonth ? `Details for ${monthNames[selectedMonth.month]}` : 'Details (Select a Date please)' } 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} align="center">Detail</TableCell>
                            <TableCell colSpan={3} align="right">Amount left to spend</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { details?.map((item, index) => (
                            <TableRow className={classes.row} hover selected={ selectedIndex === index }>
                                <TableCell onClick={() => handleListItemClick(index)} colSpan={2} align="right">{item.name}</TableCell>
                                <TableCell onClick={() => handleListItemClick(index)} colSpan={3} align="right">{item.amount}</TableCell>
                            
                                <TableCell colSpan={1} size="small" align="right">
                                    <Button onClick={() => handleRemove(item.name)} color="secondary">
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) }
                        <TableRow>
                            <TableCell colSpan={1}>
                                <Button onClick={handleAdd()}><AddIcon /></Button>
                            </TableCell>
                            <TableCell colSpan={2}>
                                <TextField
                                    required
                                    label="Name"
                                    type="text"
                                    size="small"
                                    onChange={handleChangeName()}
                                />
                            </TableCell>
                            <TableCell colSpan={2}>
                                <TextField
                                    required
                                    label="Amount"
                                    type="number"
                                    size="small"
                                    onChange={handleAddAmount()}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
                
                
        /* <List>
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
        </List> */

        /* <AddItem
            detail={detail}
            onChange={handleChangeName()}
            onAdd={handleAdd()}
        /> */
       
    );
}

export default Details;


const usePrevious = (oldValue) => {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = oldValue;
    }, [oldValue]);

    return ref.current;
}

// const AddItem = ({ detail, onChange, onAdd }) => (
//     <div>
//         <Button onClick={onAdd}><AddIcon /></Button>
//         <Input 
//             type="text"
//             value={detail}
//             onChange={onChange}
//         />
//     </div>
// );

// const EditItem = ({  }) => (
//     <div>
//         <Button><EditIcon /></Button>
//     </div>
// )
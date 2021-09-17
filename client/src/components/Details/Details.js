import React, { useState, useRef, useEffect } from 'react';
import { Container, Card, Typography, List, Button, Input } from '@material-ui/core';
import { ListItemButton, IconButton, ListItem, ListItemText} from '@mui/material/';

import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@mui/icons-material/Add';

import { addItem, removeItem, selectedDetail } from '../../actions/month';


const Details = () => {
    const dispatch = useDispatch();

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

    const handleChange = () => (event) => {
        setDetail(event.target.value);

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
                {/* <Button onClick={test()}>Test</Button> */}
                <Typography>
                    { selectedMonth ? 'Details' : 'Details (Select a Date please)' }
                </Typography>
                
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
                    onChange={handleChange()}
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
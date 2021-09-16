import React, { useState, useRef, useEffect } from 'react';
import { Container, Card, Typography, List, ListItem, Button, Input } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';

import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import { addItem } from '../../actions/month';

const testData = [
    {
        id: 1,
        name: "Groceries",
        items: {
            0: "test 0",
            1: "test 1",
            2: "test 2",
        },
    },
    {
        id: 2,
        name: "Sports",
        items: {
            0: "test 0",
            1: "test 1",
            2: "test 2",
        },
    },
    {
        id: 3,
        name: "Miscellaneous",
        items: {
            0: "test 0",
            1: "test 1",
            2: "test 2",
        }
    },
    {
        id: 4,
        name: "House Hold Items",
        items: {
            0: "test 0",
            1: "test 1",
            2: "test 2",
        }
    },
];


const Details = () => {
    const dispatch = useDispatch();

    const initialData = useSelector((store) => !store.month.selected.details ? [] : store.month.selected.details);
    const selectedMonth = useSelector((store) => !store.month.selected ? '' : store.month.selected);
    const months = useSelector((store) => store.month.months);

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(index);
      };

      // fix selected Index on Frontend

    // const [details, setDetails] = useState(testData);
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
    }

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

    const test = () => {
        console.log(details)
    }
    
    return (
        <Container>
            <Card>
                <Button onClick={test()}>Test</Button>
                <Typography>
                    Details
                </Typography>
                
                <List>
                    { details.map((item, index) => (
                        <ListItemButton
                            selected={ selectedIndex === {index} }
                            onClick={(event) => handleListItemClick(event, index)}
                        >
                            {item.name}
                            <EditItem />
                            <RemoveItem /> 
                        </ListItemButton>
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
        <Button onClick={onAdd}>Add</Button>
        <Input 
            type="text"
            value={detail}
            onChange={onChange}
        />
    </div>
);

// const DetailsList = ({ list, selected }) => (
//     <List>
        
//         { list.map((item, index) => (
//             <ListItemButton
//                 selected={selected === index}
//                 onClick={(event) => handleListItemClick(event, index)}
//             >
//                 {item.name}
//                 {index}
//                 <EditItem />
//                 <RemoveItem /> 
//             </ListItemButton>
//         )) }
//     </List>
// );

const RemoveItem = ({  }) => (
    <div>
        <Button><DeleteForeverIcon /></Button>
    </div>
)

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
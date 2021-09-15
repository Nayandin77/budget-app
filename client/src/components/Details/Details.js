import React, { useState } from 'react';
import { Container, Card, Typography, List, ListItem, Button, Input } from '@material-ui/core';

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
    const [details, setDetails] = useState(testData);
    const [detail, setDetail] = useState('');

    const handleChange = () => (event) => {
        setDetail(event.target.value);
    }

    const handleAdd = () => (event) => {
        const _id = details.length;
        const parseDetail = {
            id: _id,
            name: detail,
            items: [],
        }
        const newDetails = details.concat(parseDetail);

        setDetails(newDetails);
    }

    const test = () => {
        console.log(details);
    }
    
    return (
        <Container>
            <Card>
                <Button onClick={test}>Test Details</Button>
                <Typography>
                    Details
                </Typography>
                
                <List>
                    { details.map((item) => (
                        <ListItem>{item.name}</ListItem>
                    )) }
                </List>

                <div>
                    <Button onClick={handleAdd()}>Add</Button>
                    <Input 
                        type="text"
                        value={detail}
                        onChange={handleChange()}
                    />
                </div>
                
            </Card>
        </Container>
    )
}

export default Details;

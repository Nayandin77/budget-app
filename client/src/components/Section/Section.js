import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Typography, ListItem } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { List } from '@mui/material/';


const Section = () => {
    const selectedDetail = useSelector((store) => !store.month.selectedDetail ? [] : store.month.selectedDetail);
    const prevSelectedDetail = usePrevious(selectedDetail);

    const selectedMonth = useSelector((store) => !store.month.selected ? '' : store.month.selected);
    const prevSelectedMonth = usePrevious(selectedMonth);

    const [detail, setDetail] = useState(selectedDetail);

    useEffect(() => {
        if (prevSelectedMonth !== selectedMonth) {
            setDetail([]);
        }
        if (prevSelectedDetail !== selectedDetail) {
            setDetail(selectedDetail);
        }
    })

    return (
        <Container>
            <Card>
                <Typography>
                    {!detail ? "Section (Select a Detail please)" : `Section: ${detail.name}` }
                </Typography>
                <List>
                    { detail.items?.map((item, index) => (
                        <div>
                            <ListItem>
                                {item}
                            </ListItem>
                        </div>
                    ))}
                    {/* { details?.map((item, index) => (
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
                    )) } */}
                </List>
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

export default Section;

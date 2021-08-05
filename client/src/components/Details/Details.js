import React from 'react';
import { Container, Card, Typography, List } from '@material-ui/core';

const Details = () => {
    /*
    const testData = {
        '0' : {
            'name': "Groceries",
            'items': {
                0: "test 0",
                1: "test 1",
                2: "test 2",
            },
        },
        '1' : {
            'name': "Sports",
            'items': {
                0: "test 0",
                1: "test 1",
                2: "test 2",
            },
        },
        '2' : {
            'name': "Miscellaneous",
            'items': {
                0: "test 0",
                1: "test 1",
                2: "test 2",
            }
        },
        '3' : {
            'name': "House Hold Items",
            'items': {
                0: "test 0",
                1: "test 1",
                2: "test 2",
            }
        },
    }
    */

    const parseData = () => {
        // console.log(testData);

        // return (
        //     <div>
        //         { testData?.map((item) => {
        //             console.log(item); 
        //             ( <ListItem>{item}</ListItem> )
        //         })
        //         }
        //     </div>
            
        // );
    }


    return (
        <Container>
            <Card>
                <Typography>
                    Details
                </Typography>
                <List>
                    {/* <ListItem button={true}>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                    <ListItem>Item 4</ListItem>
                    <ListItem>Item 5</ListItem> */}
                    { parseData() }
                </List>
            </Card>
        </Container>
    )
}

export default Details;

import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


const AddOrders = () => {
    const [orders, setOrders] = useState({})
    const handleOrderSubmit = (e) => {
        e.preventDefault();
        console.log("This is the New order", orders)
        fetch('https://frozen-journey-31409.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order Added Successfully");
                    e.target.reset();
                }
            })


    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orders };
        newOrderData[field] = value;
        setOrders(newOrderData);

    }
    return (
        <Container>
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'info.main', mb: 3 }}>
                ADD AN ORDER
            </Typography>
            <form onSubmit={handleOrderSubmit}>
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Customer Name"
                    name="cutomerName"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Mobile No"
                    name="mobileNo"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Email"
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Address"
                    name="address"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Product Id"
                    name="productId"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Product Name"
                    name="productName"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Price"
                    name="price"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Delivery Date"
                    name="deliveryDate"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Oder Status"
                    name="orderStatus"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Source of order"
                    name="sourceofOrder"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Purchase Date"
                    name="purchaseDate"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <br />
                <Button sx={{
                    width: '75%',
                    m: 1
                }} variant="contained" type='submit'>Add Orders</Button>



            </form>
        </Container>
    );
};

export default AddOrders;
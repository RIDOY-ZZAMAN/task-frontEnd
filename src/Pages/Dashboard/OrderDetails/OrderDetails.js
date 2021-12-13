import { CircularProgress, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://frozen-journey-31409.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    return (
        <Container>
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'info.main', mb: 3 }}>
                MANAGE ALL ORDERS
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="Appoinments table">
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Product Id</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Customer Name</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Mobile</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Email</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Address</TableCell>

                                    <TableCell sx={{ fontWeight: 600 }} align="left">Product Name</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Price</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Delivery Date</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Order Status</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Source of Order</TableCell>
                                    <TableCell sx={{ fontWeight: 600 }} align="left">Purchase Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                                    :
                                    orders.map((order) => (
                                        <TableRow
                                            key={order._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                        >
                                            <TableCell align="left">{order.productId
                                            }</TableCell>
                                            <TableCell component="th" scope="row" align="left" >
                                                {order.cutomerName}
                                            </TableCell>
                                            <TableCell align="left">{order.mobileNo}</TableCell>
                                            <TableCell align="left">{order.email}</TableCell>
                                            <TableCell align="left">{order.address}</TableCell>

                                            <TableCell align="left">{order.productName}</TableCell>
                                            <TableCell align="left">{order.price}</TableCell>
                                            <TableCell align="left">{order.deliveryDate}</TableCell>
                                            <TableCell align="left">{order.orderStatus}</TableCell>
                                            <TableCell align="left">{order.sourceofOrder}</TableCell>
                                            <TableCell align="left">{order.purchaseDate
                                            }</TableCell>



                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>


        </Container>
    );
};

export default OrderDetails;
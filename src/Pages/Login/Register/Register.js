import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not matched');
            return
        }
        registerUser(loginData.email, loginData.password, history, loginData.name)
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={4}>
                    <h3>Note</h3>
                    <p>Email should have @ </p>
                    <p>Password Must be 6 Characters</p>
                    <p>Same user can't be create again</p>
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={8}>
                    <Typography variant="h4" gutterBottom>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />

                        <Button sx={{
                            width: '75%',
                            m: 1
                        }} variant="contained" type='submit'>Sign Up</Button>

                        <NavLink style={{ textDecoration: "none" }}
                            to="/login">
                            <Button variant="text">Already Sign Uped? Plesase Login</Button>
                        </NavLink>

                    </form>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Created Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>


            </Grid>

        </Container>
    );
};

export default Register;
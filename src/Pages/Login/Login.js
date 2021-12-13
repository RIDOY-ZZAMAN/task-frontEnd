import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={4}>
                    <h3>Note</h3>
                    <p>Email should have @ </p>
                    <p>Password Must be 6 Characters</p>
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={8}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{
                                width: '75%',
                                m: 1
                            }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
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
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button sx={{
                            width: '75%',
                            m: 1
                        }} variant="contained" type='submit'>Login</Button>

                        <NavLink style={{ textDecoration: "none" }}
                            to="/register">
                            <Button variant="text">New User? Please Sign Up</Button>
                        </NavLink>
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Login Successfully</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>

                        }
                    </form>
                    <p>--------------------OR--------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>



                </Grid>




            </Grid>

        </Container>
    );
};

export default Login;
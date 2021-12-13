import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'

            },
            navLogo: {
                [theme.breakpoints.down('sm')]: {
                    textAlign: "right !important"

                },

            }

        }
    })
    const { navIcon, navItemContainer, navLogo } = useStyle();
    const [state, setState] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <List>

                <ListItem button>
                    <ListItemText>
                        <Link to="/home" style={{ textDecoration: "none", }}>Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />


                {user.email ? <Box>
                    <ListItem button>
                        <ListItemText>
                            <Link to="/dashboard" style={{ textDecoration: "none", }}>Dashboard</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                            <span style={{ color: "blue", fontWeight: "bold", paddingTop: "10px" }}>{user ? user.displayName : user.email}</span>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                            <Button onClick={logOut} color="inherit">Logout</Button>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </Box>
                    :
                    <Box>
                        <ListItem button>
                            <ListItemText>
                                <Link to="/login" style={{ textDecoration: "none", }}>Login</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </Box>
                }


            </List>

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TASK
                        </Typography>
                        <Link className={navItemContainer} to="/home" style={{ textDecoration: "none", color: "white" }}><Button color="inherit">Home</Button></Link>


                        {
                            user?.email ?
                                <Box className={navItemContainer}>
                                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/dashboard"> <Button color="inherit">Dashboard</Button></NavLink>
                                    <span style={{ color: "white", fontWeight: "bold", paddingTop: "10px" }}>{user ? user.displayName : user.email}</span>
                                    <Button onClick={logOut} color="inherit">Logout</Button>
                                </Box>

                                :
                                <NavLink className={navItemContainer} style={{ textDecoration: "none", color: "white" }} to="/login"> <Button color="inherit">Login</Button></NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>

                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>

    );
};

export default Header;
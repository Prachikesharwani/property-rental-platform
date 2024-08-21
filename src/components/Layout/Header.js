import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="bg-blue-500">
            <Toolbar className="container mx-auto flex justify-between">
                <Typography variant="h6" className="font-bold">
                    <Link to="/" className="text-white no-underline">
                        Property Rental
                    </Link>
                </Typography>

                <div className="hidden md:flex space-x-4">
                    <Button color="inherit">
                        <Link to="/" className="text-white no-underline">
                            Home
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/login" className="text-white no-underline">
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/register" className="text-white no-underline">
                            Register
                        </Link>
                    </Button>
                </div>

                {/* Hamburger Menu for Mobile View */}
                <div className="md:hidden">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/" className="text-black no-underline">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/login" className="text-black no-underline">
                                Login
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/register" className="text-black no-underline">
                                Register
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


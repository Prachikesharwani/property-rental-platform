import React from 'react';
import { TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Implement login logic
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="max-w-sm w-full bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <TextField label="Email" type="email" variant="outlined" fullWidth required />
                </div>
                <div className="mb-4">
                    <TextField label="Password" type="password" variant="outlined" fullWidth required />
                </div>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
                <div className="mt-4 text-center">
                New user?
                    <Link component={RouterLink} to="/register" variant="body2" className=" no-underline">
                         Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;

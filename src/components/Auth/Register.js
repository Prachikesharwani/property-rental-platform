import React from 'react';
import { TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        // Implement registration logic
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="max-w-sm w-full bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">Register</h2>
                <div className="mb-4">
                    <TextField label="Name" type="text" variant="outlined" fullWidth required />
                </div>
                <div className="mb-4">
                    <TextField label="Email" type="email" variant="outlined" fullWidth required />
                </div>
                <div className="mb-4">
                    <TextField label="Password" type="password" variant="outlined" fullWidth required />
                </div>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
                <div className="mt-4 text-center">
                Already have an account?
                    <Link component={RouterLink} to="/login" variant="body2" className="no-underline">
                         Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;

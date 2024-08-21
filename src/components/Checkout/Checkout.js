import React from 'react';
import { TextField, Button, Typography, Box, List, ListItem, ListItemText, Modal, Container } from '@mui/material';

const Checkout = ({ bookings, totalCost, onConfirm, open, handleClose }) => {
    const [contactInfo, setContactInfo] = React.useState({ name: '', email: '' });
    const [paymentDetails, setPaymentDetails] = React.useState({ cardNumber: '', expiryDate: '' });

    const handleConfirm = () => {
        // Validate and send booking details
        onConfirm({ bookings, contactInfo, paymentDetails });
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Container 
                maxWidth="sm" 
                sx={{ 
                    mt: 5, 
                    mb: 5, 
                    bgcolor: 'background.paper', 
                    borderRadius: 2, 
                    p: 4,
                    height: '90vh', // Fixed height
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box 
                    sx={{
                        overflowY: 'auto', // Enable vertical scrolling
                        flex: 1, // Allow this section to grow and shrink
                        mb: 2 // Margin for spacing
                    }}
                >
                    <Typography variant="h6" gutterBottom>Checkout</Typography>

                    {/* Cart Details */}
                    <Box mb={2}>
                        <Typography variant="subtitle1" gutterBottom>Cart Details</Typography>
                        <List>
                            {bookings.length > 0 ? bookings.map(booking => (
                                <ListItem key={booking.id}>
                                    <ListItemText 
                                        primary={`${booking.title} (x${booking.quantity})`} 
                                        secondary={`Price: $${booking.price * booking.quantity}`}
                                    />
                                </ListItem>
                            )) : (
                                <ListItem>
                                    <ListItemText primary="No items in cart" />
                                </ListItem>
                            )}
                        </List>
                        <Typography variant="h6" gutterBottom>Total Cost: ${totalCost}</Typography>
                    </Box>

                    {/* Contact Information */}
                    <Box mb={2}>
                        <Typography variant="subtitle1">Contact Information</Typography>
                        <TextField 
                            label="Name" 
                            value={contactInfo.name} 
                            onChange={e => setContactInfo({ ...contactInfo, name: e.target.value })} 
                            fullWidth 
                            margin="normal"
                        />
                        <TextField 
                            label="Email" 
                            type="email" 
                            value={contactInfo.email} 
                            onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })} 
                            fullWidth 
                            margin="normal"
                        />
                    </Box>

                    {/* Payment Details */}
                    <Box mb={2}>
                        <Typography variant="subtitle1">Payment Details</Typography>
                        <TextField 
                            label="Card Number" 
                            value={paymentDetails.cardNumber} 
                            onChange={e => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} 
                            fullWidth 
                            margin="normal"
                        />
                        <TextField 
                            label="Expiry Date" 
                            value={paymentDetails.expiryDate} 
                            onChange={e => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })} 
                            fullWidth 
                            margin="normal"
                        />
                    </Box>
                </Box>

                {/* Confirm Button */}
                <Button 
                    onClick={handleConfirm} 
                    variant="contained" 
                    color="primary"
                    fullWidth
                >
                    Confirm Booking
                </Button>
            </Container>
        </Modal>
    );
};

export default Checkout;

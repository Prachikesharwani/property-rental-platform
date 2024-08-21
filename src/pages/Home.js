import React, { useState } from 'react';
import PropertyList from '../components/Listings/PropertyList';
import BookingCart from '../components/Booking/BookingCart';
import Checkout from '../components/Checkout/Checkout';
import ImageCarousel from '../components/Carousel/ImageCarousel';

const Home = () => {
    const [bookings, setBookings] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);

    const handleAddBooking = (property) => {
        setBookings(prevBookings => {
            const existingBooking = prevBookings.find(b => b.id === property.id);
            if (existingBooking) {
                return prevBookings.map(b =>
                    b.id === property.id
                        ? { ...b, quantity: b.quantity + 1 }
                        : b
                );
            }
            return [...prevBookings, { ...property, quantity: 1 }];
        });
    };

    const handleRemoveBooking = (id) => {
        setBookings(prevBookings => prevBookings.filter(b => b.id !== id));
    };

    const handleUpdateBooking = (id, quantity) => {
        setBookings(prevBookings => 
            prevBookings.map(b =>
                b.id === id ? { ...b, quantity } : b
            )
        );
    };

    const handleConfirmBooking = (bookingDetails) => {
        // Process bookingDetails and clear the cart
        console.log('Booking confirmed', bookingDetails);
        setBookings([]);
        setShowCheckout(false);
    };

    const handleCloseCheckout = () => {
        setShowCheckout(false);
    };

    return (
        <div className="container mx-auto ">
            <ImageCarousel/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-3">
                <div className="col-span-2">
                    <PropertyList onBook={handleAddBooking} />
                </div>
                <div className="col-span-1">
                    <BookingCart 
                        bookings={bookings} 
                        onRemove={handleRemoveBooking} 
                        onUpdate={handleUpdateBooking} 
                    />
                    <button 
                        onClick={() => setShowCheckout(true)} 
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
            <Checkout 
                open={showCheckout}
                handleClose={handleCloseCheckout}
                bookings={bookings} 
                totalCost={bookings.reduce((sum, booking) => sum + (booking.price * booking.quantity), 0)} 
                onConfirm={handleConfirmBooking} 
            />
        </div>
    );
};

export default Home;

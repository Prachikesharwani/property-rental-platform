import React from 'react';

const BookingCart = ({ bookings, onRemove, onUpdate }) => {
    const totalCost = bookings.reduce((sum, booking) => sum + (booking.price * booking.quantity), 0);

    return (
        <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Your Bookings</h3>
            {bookings.length === 0 ? (
                <p>No bookings yet.</p>
            ) : (
                <div>
                    {bookings.map(booking => (
                        <div key={booking.id} className="mb-4">
                            <h4>{booking.title}</h4>
                            <p>Price: ${booking.price} per night</p>
                            <p>Booking Date: {booking.date}</p>
                            <div className="flex gap-2 items-center">
                                <button 
                                    onClick={() => onUpdate(booking.id, booking.quantity - 1)} 
                                    disabled={booking.quantity === 1}
                                    className="bg-gray-200 py-1 px-2 rounded"
                                >
                                    -
                                </button>
                                <span>{booking.quantity}</span>
                                <button 
                                    onClick={() => onUpdate(booking.id, booking.quantity + 1)} 
                                    className="bg-gray-200 py-1 px-2 rounded"
                                >
                                    +
                                </button>
                                <button 
                                    onClick={() => onRemove(booking.id)} 
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <h4>Total: ${totalCost}</h4>
                </div>
            )}
        </div>
    );
};

export default BookingCart;

import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const BookingItem = ({ item, onRemove, onUpdate }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p>${item.price} / night</p>
            </div>
            <div className="flex items-center">
                <IconButton onClick={() => onUpdate(item.id, item.quantity - 1)}>
                    <Remove />
                </IconButton>
                <span>{item.quantity}</span>
                <IconButton onClick={() => onUpdate(item.id, item.quantity + 1)}>
                    <Add />
                </IconButton>
                <IconButton onClick={() => onRemove(item.id)}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    );
};

export default BookingItem;

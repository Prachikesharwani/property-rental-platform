import React from 'react';

const PropertyCard = ({  property, onBook }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg p-4">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-2">{property.description}</p>
            <p className="text-gray-800 mb-2">Price: ${property.price}</p>
            <p className="text-gray-800 mb-2">Bedrooms: {property.bedrooms}</p>
            <p className="text-gray-800 mb-4">Location: {property.location}</p>
            <p className="text-gray-800 mb-4">Amenities: {property.amenities.join(', ')}</p>
            <button onClick={() => onBook(property)} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                Book Now
            </button>
        </div>
    );
};

export default PropertyCard;

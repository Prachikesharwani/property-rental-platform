import React, { useState } from 'react';

const Filter = ({ onFilter, onResetFilters }) => {
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [amenities, setAmenities] = useState('');

    const handleFilterChange = () => {
        const filters = {};
        if (location) filters.location = location;
        if (priceRange) filters.priceRange = parseInt(priceRange, 10);
        if (bedrooms) filters.bedrooms = parseInt(bedrooms, 10);
        if (amenities) filters.amenities = amenities.split(',').map(a => a.trim());

        onFilter(filters);
    };

    const handleResetFilters = () => {
        setLocation('');
        setPriceRange('');
        setBedrooms('');
        setAmenities('');
        onResetFilters();
    };

    return (
        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Location"
                    className="border p-2 rounded w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Price Range"
                    className="border p-2 rounded w-full"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Number Of Bedrooms"
                    className="border p-2 rounded w-full"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Amenities"
                    className="border p-2 rounded w-full"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                />
                <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col md:flex-row gap-4">
                    <button
                        onClick={handleFilterChange}
                        className="bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
                    >
                        Apply Filters
                    </button>
                    <button
                        onClick={handleResetFilters}
                        className="bg-red-500 text-white py-2 px-4 rounded w-full md:w-auto"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;

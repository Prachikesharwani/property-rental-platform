import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import Filter from './Filter';
import appartment1 from '../../images/cottage1.jpeg';
import appartment2 from '../../images/cottage3.jpeg';
    
const properties = [
        {
            id: 1,
            title: 'Luxury Apartment',
            description: 'A beautiful apartment in the city center.',
            price: 150,
            bedrooms: 2,
            location: 'New York',
            amenities: ['WiFi', 'Pool'],
            image: appartment1,
        },
        {
            id: 2,
            title: 'Cozy Cottage',
            description: 'A cozy, charming cottage nestled in the countryside.',
            price: 100,
            bedrooms: 3,
            location: 'Colorado',
            amenities: ['Parking', 'Garden'],
            image: appartment2,
        },
        {
            id: 3,
            title: 'Luxury Apartment',
            description: 'A beautiful apartment in the city center.',
            price: 150,
            bedrooms: 2,
            location: 'New York',
            amenities: ['WiFi', 'Pool'],
            image: appartment1,
        },
        {
            id: 4,
            title: 'Cozy Cottage',
            description: 'A cozy, charming cottage nestled in the countryside.',
            price: 100,
            bedrooms: 3,
            location: 'Colorado',
            amenities: ['Parking', 'Garden'],
            image: appartment2,
        },
        {
            id: 5,
            title: 'Luxury Apartment',
            description: 'A beautiful apartment in the city center.',
            price: 150,
            bedrooms: 2,
            location: 'New York',
            amenities: ['WiFi', 'Pool'],
            image: appartment1,
        },
        {
            id: 6,
            title: 'Cozy Cottage',
            description: 'A cozy, charming cottage nestled in the countryside.',
            price: 300,
            bedrooms: 4,
            location: 'Colorado',
            amenities: ['Parking', 'Garden', 'Gym'],
            image: appartment2,
        },
        // Add more properties...
    ];
    
    const PropertyList = ({ onBook }) => {
        const [filteredProperties, setFilteredProperties] = useState(properties);
    
        const handleFilter = (filters) => {
            const filtered = properties.filter(property => 
                (filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
                (filters.priceRange ? property.price <= filters.priceRange : true) &&
                (filters.bedrooms ? property.bedrooms === filters.bedrooms : true) &&
                (filters.amenities && filters.amenities.length > 0 ? filters.amenities.every(amenity => property.amenities.includes(amenity)) : true)
            );
            setFilteredProperties(filtered);
        };
    
        const handleResetFilters = () => {
            setFilteredProperties(properties);
        };
    
        return (
            <div>
                <Filter onFilter={handleFilter} onResetFilters={handleResetFilters} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProperties.map(property => (
                        <PropertyCard 
                            key={property.id} 
                            property={property} 
                            onBook={() => onBook({ ...property, date: new Date().toLocaleDateString() })} 
                        />
                    ))}
                </div>
            </div>
        );
    };
    
    export default PropertyList;
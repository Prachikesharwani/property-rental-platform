# Property Rental Platform

## Overview

The Property Rental Platform is a web application designed to showcase various properties available for rent. Users can browse through a list of properties, filter them based on different criteria, and add properties to their booking cart. The platform provides a seamless user experience, allowing users to manage their bookings efficiently.

## Features

- **Property Listing**: Displays a list of properties with details such as title, description, price, location, and amenities.
- **Filtering**: Users can filter properties based on location, price range, number of bedrooms, and amenities.
- **Booking Cart**: Users can add properties to their cart, manage the quantity of bookings, and view the total cost.
- **Responsive Design**: The application is designed to be responsive and works well on different device sizes.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces. The application is structured using React components, which manage the UI and the state of the application.
- **Tailwind CSS**: A utility-first CSS framework that provides a responsive design out-of-the-box. It was used for styling the components, ensuring a clean and consistent UI.
- **Material UI**: A React component library that implements Google's Material Design. Used for additional UI components like buttons, modals, etc.

### Additional Tools
- **JavaScript (ES6+)**: The primary language for writing logic and managing the state within React components.
- **Webpack/Babel**: For bundling and transpiling JavaScript code.

## Project Structure

- **`src/components/PropertyList.js`**: This component is responsible for rendering the list of properties and applying filters. It also includes the `BookingCart` component, which handles the booking cart logic.
  
- **`src/components/PropertyCard.js`**: A reusable component that displays individual property details and a button to book the property.

- **`src/components/Filter.js`**: A component that allows users to filter properties based on location, price, bedrooms, and amenities.

- **`src/components/BookingCart.js`**: Manages the state of the booking cart, allowing users to increase/decrease the quantity of bookings, remove properties from the cart, and view the total cost.

## Approach

### Component Structure

The application is divided into reusable components, each responsible for a specific part of the UI. This modular approach makes the application easy to maintain and scale.

### State Management

State is managed using React’s `useState` hook. The `PropertyList` component maintains the state for filtered properties and passes the relevant data to `PropertyCard` components. The `BookingCart` component independently manages the state of the cart, handling all logic related to booking, updating quantities, and removing items.

### Styling

Tailwind CSS is used for most of the styling, ensuring a responsive and modern design. Material UI is selectively used for additional UI elements that require more complex interactions or specific design guidelines.

### Cart Logic

The cart logic was originally managed within the `PropertyList` component but was refactored to reside entirely within the `BookingCart` component. This separation of concerns ensures that the cart logic is encapsulated within its component, making the codebase cleaner and more maintainable.

### Future Enhancements

- **Backend Integration**: Integrate with a backend API to fetch real-time property data and manage user bookings persistently.
- **Authentication**: Implement user authentication to save and manage user-specific bookings.
- **Payment Gateway**: Integrate a payment gateway for users to complete their bookings directly within the platform.
- **Advanced Filtering**: Add more sophisticated filtering options like date availability, property type, and user ratings.

## How to Run the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/property-rental-platform.git
    cd property-rental-platform
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```
    The application will be accessible at `http://localhost:3000`.

4. **Build the project for production**:
    ```bash
    npm run build
    ```
    This will create an optimized build of the project in the `build` directory.







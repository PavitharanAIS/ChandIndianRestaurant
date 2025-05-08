import React, { useState } from 'react';
import '../css/LocationDropdown.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const   LocationDropdown = () => {

// Initialize state to store selected restaurant
      const [selectedRestaurant, setSelectedRestaurant] = useState('');
    
      // Array of restaurant options
      const restaurants = ['Torbay','Rothesay Bay'];
    
      // Handle selection change
      const handleSelect = (event) => {
        setSelectedRestaurant(event.target.value);
      };

    return (
                <>

                    <FontAwesomeIcon className='form-location-icon' icon={faLocationDot} />
                    <select
                        id="restaurant"
                        value={selectedRestaurant}
                        onChange={handleSelect}
                        className="form-drop-down"
                    >
                        <option value="" disabled>Choose Restaurant</option>
                        {restaurants.map((restaurant, index) => (
                        <option key={index} value={restaurant}>
                            {restaurant}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default LocationDropdown;
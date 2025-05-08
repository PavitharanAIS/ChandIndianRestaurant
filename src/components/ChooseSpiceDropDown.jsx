import React, { useState } from 'react';
import '../css/ChooseSpiceDropDown.css';



const   ChooseSpiceDropDown = ({ selectedSpice, setSelectedSpice }) => {

// Initialize state to store selected restaurant
    //   const [selectedSpice, setSelectedSpice] = useState('');
    
      // Array of restaurant options
      const spices = ['Mild', 'Medium', 'Hot'];
    
      // Handle selection change
      const handleSelect = (event) => {
        setSelectedSpice(event.target.value);
      };

    return (
                <>
                    <select
                        id="size"
                        value={selectedSpice}
                        onChange={handleSelect}
                        className="form-spice-drop-down"
                    >
                        <option value="" disabled>Choose Spice Level</option>
                        {spices.map((spice, index) => (
                        <option key={index} value={spice}>
                            {spice}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default ChooseSpiceDropDown;
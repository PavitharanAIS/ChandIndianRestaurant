import React, { useState } from 'react';
import '../css/ChooseCurryDropDown.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const   ChooseCurryDropDown = ({ selectedCurry, setSelectedCurry }) => {

    
      // Array of restaurant options
      const curries = ['Madras Chicken', 'Korma Chicken', 'Tikka Masala Chicken', 'Rogan Josh Chicken'];
    
      // Handle selection chang
      const handleSelect = (event) => {
        setSelectedCurry(event.target.value);
      };

    return (
                <>
                    <select
                        id="curry"
                        value={selectedCurry}
                        onChange={handleSelect}
                        className="form-curry-drop-down"
                    >
                        <option value="" disabled>Choose Curry</option>
                        {curries.map((curry, index) => (
                        <option key={index} value={curry}>
                            {curry}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default ChooseCurryDropDown;
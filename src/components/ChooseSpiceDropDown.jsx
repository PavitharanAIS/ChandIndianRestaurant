import React, { useState } from 'react';
import '../css/ChooseSpiceDropDown.css';



const   ChooseSpiceDropDown = ({ selectedSpice, setSelectedSpice }) => {


      const spices = ['Mild', 'Medium', 'Hot'];
    
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
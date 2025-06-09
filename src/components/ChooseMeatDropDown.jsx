import React, { useState } from 'react';
import '../css/ChooseMeatDropDown.css';



const   ChooseMeatDropDown = ({ selectedMeat, setSelectedMeat }) => {


      const meats = ['Chicken', 'Lamb', 'Beef +$1.00', 'Goat'];
    
      const handleSelect = (event) => {
        setSelectedMeat(event.target.value);
      };

    return (
                <>
                    <select
                        id="meat"
                        value={selectedMeat}
                        onChange={handleSelect}
                        className="form-meat-drop-down"
                    >
                        <option value="" disabled>Choose Meat Type</option>
                        {meats.map((meat, index) => (
                        <option key={index} value={meat}>
                            {meat}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default ChooseMeatDropDown;
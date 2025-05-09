import React, { useState } from 'react';
import '../css/ChoosePortionDropDown.css';



const   ChoosePortionDropDown = ({ selectedPortion, setSelectedPortion }) => {

      const portions = ['Half', 'Full'];
    
            const handleSelect = (event) => {
        setSelectedPortion(event.target.value);
      };

    return (
                <>
                    <select
                        id="portion"
                        value={selectedPortion}
                        onChange={handleSelect}
                        className="form-portion-drop-down"
                    >
                        <option value="" disabled>Choose Portion</option>
                        {portions.map((portion, index) => (
                        <option key={index} value={portion}>
                            {portion}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default ChoosePortionDropDown;
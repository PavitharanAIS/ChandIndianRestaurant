import React, { useState } from 'react';
import '../css/ChooseSizeDropDown.css';



const   ChooseSizeDropDown = ({ selectedSize, setSelectedSize }) => {


      const sizes = ['Regular', 'Medium', 'Large'];
    
      const handleSelect = (event) => {
        setSelectedSize(event.target.value);
      };

    return (
                <>
                    <select
                        id="size"
                        value={selectedSize}
                        onChange={handleSelect}
                        className="form-size-drop-down"
                    >
                        <option value="" disabled>Choose Size</option>
                        {sizes.map((size, index) => (
                        <option key={index} value={size}>
                            {size}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default ChooseSizeDropDown;
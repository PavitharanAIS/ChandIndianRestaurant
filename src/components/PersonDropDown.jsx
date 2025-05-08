import React, { useState } from 'react';
import '../css/PersonDropdown.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const   PersonDropdown = () => {

// Initialize state to store selected restaurant
      const [selectedPerson, setSelectedPerson] = useState('');
    
      // Array of restaurant options
      const persons = ['1','2','3','4','5','6','7','8','9','10'];
    
      // Handle selection change
      const handleSelect = (event) => {
        setSelectedPerson(event.target.value);
      };

    return (
                <>

                    <FontAwesomeIcon className='form-person-icon' icon={faUser} />
                    <select
                        id="person"
                        value={selectedPerson}
                        onChange={handleSelect}
                        className="form-person-drop-down"
                    >
                        <option value="" disabled>Select Number of People</option>
                        {persons.map((person, index) => (
                        <option key={index} value={person}>
                            {person}
                        </option>
                        ))}
                    </select>

                </>
            );
};

export default PersonDropdown;
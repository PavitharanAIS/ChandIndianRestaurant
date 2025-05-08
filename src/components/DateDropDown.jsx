import React, { useState } from 'react';
import '../css/DateDropDown.css'; // Import same CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const DateDropDown = () => {
  // Initialize state to store selected date
  const [selectedDate, setSelectedDate] = useState('');

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
            <>
                <FontAwesomeIcon className='form-date-icon' icon={faCalendar} />       

                <input
                id="date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="form-date-drop-down"
                />
                {/* <div className="selected-date">
                <p>Selected Date: {selectedDate || 'None selected'}</p>
                </div> */}
            </>
            
  );
};

export default DateDropDown;

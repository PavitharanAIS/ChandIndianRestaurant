import React, { useState } from 'react';
import '../css/TimeDropDown.css'; // Import same CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const TimeDropDown = () => {
  // Initialize state to store selected time
  const [selectedTime, setSelectedTime] = useState('');

  // Function to generate time options (30-minute intervals)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const formattedMinute = minute === 0 ? '00' : '30';
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  };

  // Handle selection change
  const handleSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <>

        <FontAwesomeIcon className='form-time-icon' icon={faClock} />       
        <select
        id="time"
        value={selectedTime}
        onChange={handleSelect}
        className="form-time-drop-down"
      >
        <option value="" disabled>Select Time</option>
        {generateTimeOptions().map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

    </>
      
  );
};

export default TimeDropDown;

import '../css/ModalStart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const ModalStart = ({ onRestaurantSelect }) => {

  
          const [preferredRestaurant, setPreferredRestaurant] = useState('');
        
         
          const restaurants = ['Torbay','Rothesay Bay'];

          const handleSelect = (event) => {
            setPreferredRestaurant(event.target.value);
          };

          const handleSubmit = () => {

            onRestaurantSelect(preferredRestaurant); // Pass selected restaurant to Home component
        };


        const navigate = useNavigate();
        const handleSubmitOrderOnline = () => {

            onRestaurantSelect(preferredRestaurant); // Pass selected restaurant to Home component
            navigate('/pages/Menu');
        };


    return (
        <>
            <div className="modal-container">
                <div className="modal-logo">
                    <img className="modal-logo-img" src="../images/Logo.png" alt="Logo" />
                </div>
                <div className='modal-title'>
                    <h2>Please select your preferred location.</h2>
                </div>
                <div className='modal-dropdown'>
                    <FontAwesomeIcon className='modal-form-location-icon' icon={faLocationDot} />
                    <select
                        id="restaurant"
                        value={preferredRestaurant}
                        onChange={handleSelect}
                        className="modal-form-drop-down"
                    >
                        <option value="" disabled>Choose Restaurant</option>
                        {restaurants.map((restaurant, index) => (
                        <option key={index} value={restaurant}>
                            {restaurant}
                        </option>
                        ))}
                    </select>
                </div>

                {preferredRestaurant && (
                    <div className='modal-button-order-online'>
                        <button onClick={handleSubmitOrderOnline}>Order Online</button>
                    </div>
                )}
    
                <div
                    className={`modal-button-enter-website ${!preferredRestaurant ? 'modal-button-enter-website-center' : ''}`}
                >
                    <button onClick={handleSubmit}>Enter Website</button>
                </div>
            </div>
        </>
        
    );
}

export default ModalStart;
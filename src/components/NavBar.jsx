import '../css/NavBar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { useState } from 'react';

function NavBar({ preferredRestaurant, onLocationBtnClick, cartCount }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const scrollToReservation = () => {
        const element = document.getElementById('reserve-table');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToDineIn = () => {
        const element = document.getElementById('dine-in');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">

            <div className='nav-reservations nav-links'>
                <Link onClick={scrollToReservation}>Reservations</Link>
            </div>

            <div className='nav-order-online nav-links'>
                <Link to="../pages/Menu">Order Online</Link>
            </div>

            <div className='nav-logo'>
                <a href='/' className="logo-link"><img className="logo-img" src="../images/Logo.png" alt="Logo" /></a>
            </div>

            <div className='nav-location'>
                <button className='location-btn' onClick={onLocationBtnClick}>
                <FontAwesomeIcon className='location-icon' icon={faLocationDot} />
                {preferredRestaurant || 'Select Location'}
                <FontAwesomeIcon className='down-arrow-icon' icon={faSortDown} /></button>
            </div>

            <div className='nav-cart-icon'>
                <Link to="../pages/Checkout">
                    <i className='cart-btn'><FontAwesomeIcon className='menu-icon' icon={faCartShopping} /></i>
                </Link>
            </div>

            <div className='nav-cart-count'>
                <Link to="../pages/Checkout">
                    <span className='cart-count'>{cartCount}</span>
                </Link>     
            </div>

            <div className='nav-menu-icon'>
                
                <button className='menu-btn' onClick={toggleNav}><FontAwesomeIcon className='menu-icon' icon={faBars} /></button>
            </div>

            {/* Sliding Menu */}
            <div className={`sliding-nav ${isNavOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="sliding-nav-links">
                    <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                    <li onClick={toggleNav}><Link onClick={scrollToDineIn} >Locations</Link></li>
                    <li onClick={toggleNav}><Link onClick={scrollToReservation}>Reservation</Link></li>
                    <li onClick={toggleNav}><Link to="../pages/Menu">Order Online</Link></li>
                    <li><Link to="/">Feedback</Link></li>
                    <li onClick={toggleNav}><Link to="../pages/AboutUs">About</Link></li>
                </ul>
            </div>

            {/* Backdrop Overlay */}
            <div className={`sliding-nav-overlay ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}></div>

        </header>
    );
}

export default NavBar;

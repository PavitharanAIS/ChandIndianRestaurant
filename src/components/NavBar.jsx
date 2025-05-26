import '../css/NavBar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../components/CartContext';
import DishDetailModal from './DishDetailModal';

function NavBar({ preferredRestaurant, onLocationBtnClick }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();

    const { cart, setCart } = useContext(CartContext);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [showModal, setShowModal] = useState(false);
    const [editingDish, setEditingDish] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleQuantityChange = (index, change) => {
        setCart(prevCart => {
            return prevCart.map((item, i) => {
                if (i !== index) return item;
                const newQuantity = Math.max(1, item.quantity + change); // Prevent going below 1
                return { ...item, quantity: newQuantity };
            });
        });
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const goToCheckout = () => {
        toggleCart();
        navigate('../pages/Checkout');
    };

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

    
    const subtotal = cart.reduce((acc, item) => {
        const price = item.price ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) : 0;
        return acc + price * item.quantity;
    }, 0);

    const serviceFee = 2.99;
    const total = subtotal + serviceFee;
    

    return (
        <>
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
                    <button className='cart-btn' onClick={toggleCart}>
                        <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
                    </button>
                </div>

                <div className='nav-cart-count'>
                        <span className='cart-count'>{cartCount}</span>    
                </div>

                {/* Sliding Cart Panel */}
                <div className={`sliding-cart ${isCartOpen ? 'open' : ''}`}>

                    <div className='sliding-cart-header'>

                        <div className="cart-title">
                            <h3>{preferredRestaurant}</h3>
                        </div>
                        <button className="cart-close-btn" onClick={toggleCart}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        
                    </div>

                    <div className='sliding-cart-summary'>
                        <div className='sliding-cart-dishes'>

                            {cart.map((item, index) => {
                                            const itemPrice = item.price ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) : 0;
                                            const totalItemPrice = item.quantity * itemPrice;

                                            return (
                                                <div className='order-description-container' key={index}>
                                                    <div className='order-image-container'>
                                                        <img className='order-image' src={item.image || '../images/placeholder.jpg'} alt={item.name} />
                                                    </div>
                                                    <div className='order-details-container'>
                                                        <div className='order-name'><h3>{item.name}</h3></div>
                                                        <div className='order-quantity-price'>
                                                            <div className='order-counter-section'>
                                                                <button className='order-counter-section-plus-btn' onClick={() => handleQuantityChange(index, -1)}>-</button>
                                                                <span className='order-counter-section-quantity'>{item.quantity}</span>
                                                                <button className='order-counter-section-minus-btn' onClick={() => handleQuantityChange(index, 1)}>+</button>
                                                            </div>

                                                            <div className='multiply-symbol-section'>
                                                                <span className='multiply-symbol'>x</span>
                                                            </div>

                                                            <div className='dish-price-per-serving-section'>
                                                                <span className='dish-price-per-serving'>{item.price}</span>
                                                            </div>
                                                        </div>
                                                        <div className='order-details'>
                                                            <p>Curry: {item.curry}</p>
                                                            <p>Spice Level: {item.spiceLevel}</p>
                                                            <p>Size: {item.size}</p>
                                                            <p>Portion: {item.portion}</p>
                                                        </div>
                                                        <button onClick={() => {
                                                            setEditingDish(item);
                                                            setEditingIndex(index);
                                                            setShowModal(true);
                                                            toggleCart();
                                                        }} className='order-edit'>Edit</button>
                                                    </div>
                                                    <p className='order-price'>${totalItemPrice.toFixed(2)}</p>
                                                </div>
                                            );
                                    })}

                        </div>

                    </div>

                    <div className='sliding-cart-deals'>

                            <div className='sliding-deal-section'>
                                <p className='sliding-deal-text'>Please select a deal below</p>
                                <select className='sliding-deal-form'>
                                    <option value="0">Select Deal</option>
                                    <option value="1">Deal 1</option>
                                    <option value="2">Deal 2</option>
                                    <option value="3">Deal 3</option>
                                </select>
                            </div>
                            <p className='sliding-or-text'>OR</p>
                            <div className='sliding-voucher-code-section'>
                                <input className='sliding-input-voucher-code' type="text" placeholder="Enter Voucher Code" required />
                                <button className='sliding-add-button'>Add</button>
                            </div>

                    </div>

                    <div className='sliding-total-pay-container'>

                            <div className='sliding-total-pay-details-container'>

                                <div className='sliding-total-pay-subtotal-section'>
                                    <p className='sliding-subtotal-text'>Subtotal</p>
                                    <span className='sliding-subtotal-amount'>${subtotal.toFixed(2)}</span>
                                </div>
                            
                                <div className='sliding-total-pay-service-fee-section'>
                                    <p className='sliding-service-fee-text'>Service Fee</p>
                                    <span className='sliding-service-fee-amount'>${serviceFee.toFixed(2)}</span>
                                </div>

                            </div>

                            <div className='sliding-total-pay-amount-container'>
                                <p className='sliding-total-pay-text'>Total</p>
                                <span className='sliding-total-pay-amount'>${total.toFixed(2)}</span>
                            </div>
                    </div>

                    <div className='sliding-go-to-pay-container'>
                        <button className='sliding-go-to-pay-btn' onClick={goToCheckout}>Go to Checkout</button>
                    </div>
                    
                </div>

                {/* Cart Overlay */}
                <div className={`sliding-cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}></div>

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
                        <li onClick={toggleNav}><Link to="../pages/Feedback">Feedback</Link></li>
                        <li onClick={toggleNav}><Link to="../pages/AboutUs">About</Link></li>
                    </ul>
                </div>

                {/* Backdrop Overlay */}
                <div className={`sliding-nav-overlay ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}></div>

            </header>

            {showModal && (
            <DishDetailModal
                dish={editingDish}
                editingIndex={editingIndex}
                onClose={() => setShowModal(false)}
                cart={cart}
                setCart={setCart}
            />
            )}

        </>

    );
}

export default NavBar;

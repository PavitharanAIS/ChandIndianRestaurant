import '../css/Checkout.css';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function Checkout() {

    const [restaurantName, setRestaurantName] = useState(''); 
    const [address, setAddress] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('pickup');
    const [quantity, setQuantity] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isAgreed, setIsAgreed] = useState('');
    const [cart, setCart] = useState([]);

    const handleQuantityChange = (index, change) => {
    setCart(prevCart => {
        return prevCart.map((item, i) => {
            if (i !== index) return item;
            const newQuantity = Math.max(1, item.quantity + change); // Prevent going below 1
            return { ...item, quantity: newQuantity };
        });
    });
};


    useEffect(() => {
        const storedName = localStorage.getItem('preferredRestaurant');
        

        if (storedName) {
            setRestaurantName(storedName);
        }

        const storedCart = localStorage.getItem('cart');


        if (storedCart) {
        try {
            const parsedCart = JSON.parse(storedCart);
            setCart(parsedCart);
        } catch (err) {
            console.error("Error parsing cart from localStorage:", err);
        }

        console.log(cart);

    }

    }, []);

    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return acc + price * item.quantity;
    }, 0);

    const serviceFee = 2.99;
    const total = subtotal + serviceFee;


    return (
        <>

            <div className='checkout-container'>
                <div className='checkout-order-summary'>
                    <div className='restaurant-details'>
                        <img className='restaurant-logo' src="../images/Logo.png" alt="Logo" />
                        <div className='restaurant-name-address'>
                            <h2>{`Chand ` + restaurantName || 'Restaurant Name'}</h2>
                            <p>603 Beach Road, Rothesay Bay 0630</p>
                        </div>
                    </div>

                    <div className='delivery-option-container'>
                            <h2>Delivery Option</h2>
                            
                            <div className='pickup-takeaway-buttons'>
                                <button className={deliveryOption === 'pickup' ? 'selected' : 'not-selected'}
                                    onClick={() => setDeliveryOption('pickup')}>
                                    Pickup
                                </button>
                                <button className={deliveryOption === 'takeaway' ? 'selected' : 'not-selected'} id = 'takeaway-button'
                                onClick={() => setDeliveryOption('takeaway')}>
                                    Takeaway
                                </button>
                            </div>
                            {deliveryOption === 'pickup' && (
                                <div className='pickup-time-container'>
                                    <form className='time-form'>
                                        <FontAwesomeIcon icon={faClock} />
                                        <input type='datetime-local' />
                                    </form>
                                </div>
                            )}

                    </div>

                    <div className='customer-details-container'>
                                <h2>Your Details</h2>
                                <form className='customer-form'>
                                    <input className='input-firstname' type="text" placeholder="FirstName" required />
                                    <input className='input-lastname' type="text" placeholder="LastName" required />
                                    <input className='input-email' type="email" placeholder="Email" required />
                                    <input className='input-mobile' type="tel" placeholder="Mobile Number" required />
                                    <textarea className='input-address' placeholder="Instructions(optional)"></textarea>
                                </form>
                                
                    </div>

                    <div className='order-summary-container'>

                                <h2>Order Summary</h2>
                                <div className='select-deal-section'>
                                    <p className='select-deal-text'>Please select a deal below</p>
                                    <select className='select-deal-form'>
                                        <option value="0">Select Deal</option>
                                        <option value="1">Deal 1</option>
                                        <option value="2">Deal 2</option>
                                        <option value="3">Deal 3</option>
                                    </select>
                                </div>
                                <p className='or-text'>OR</p>
                                <div className='voucher-code-section'>
                                    <input className='input-voucher-code' type="text" placeholder="Enter Voucher Code" required />
                                    <button className='add-button'>Add</button>
                                </div>


                                {cart.map((item, index) => {
                                        const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
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
                                                    <p className='order-edit'>Edit</p>
                                                </div>
                                                <p className='order-price'>${totalItemPrice.toFixed(2)}</p>
                                            </div>
                                        );
                                })}

                                
                    </div>

                </div>


                <div className='checkout-payment'>

                    <div className='total-pay-container'>
                        <h2 className='total-pay-title'>Order Payment</h2>

                        <div className='total-pay-details-container'>

                            <div className='total-pay-subtotal-section'>
                                <p className='subtotal-text'>Subtotal</p>
                                <span className='subtotal-amount'>${subtotal.toFixed(2)}</span>
                            </div>
                        
                            <div className='total-pay-service-fee-section'>
                                <p className='service-fee-text'>Service Fee</p>
                                <span className='service-fee-amount'>${serviceFee.toFixed(2)}</span>
                            </div>

                        </div>

                        <div className='total-pay-amount-container'>
                            <p className='total-pay-text'>Total</p>
                            <span className='total-pay-amount'>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className='payment-method-container'>
                            <h2 className='payment-method-title'>Choose Payment Method</h2>
                            <div className='radio-btn-elements'>
                                
                                    <input className='card-btn radio-elements'
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                    />
                                    <FontAwesomeIcon className='radio-icons' icon={faCreditCard} />
                                    <p className='radio-text'>Card</p>

                                    <p className='payment-info'>Card Debit/Visa/Master Card/Amex or (Apple Pay/ Google Pay)</p>
                            
                            </div>
                            <div className='radio-btn-elements'>
                                
                                    <input className='onlineEftpos-btn radio-elements'
                                    type="radio"
                                    name="payment"
                                    value="onlineEftpos"
                                    checked={paymentMethod === 'onlineEftpos'}
                                    onChange={() => setPaymentMethod('onlineEftpos')}
                                    />
                                    <FontAwesomeIcon className='radio-icons' icon={faMobileScreen} />
                                    <p className='radio-text'>Online EFTPOS</p>

                                    <p className='payment-info'>App Payment (Pay directly from your bank app. Available to ASB, ANZ, Westpac, BNZ and The Co-operative Bank users) Note: No Surcharge</p>
                                
                            </div>
                            <div className='radio-btn-elements'>
                    
                                    <input className='bank-btn radio-elements' 
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    checked={paymentMethod === 'bank'}
                                    onChange={() => setPaymentMethod('bank')}
                                    />
                                    <FontAwesomeIcon className='radio-icons' icon={faBuildingColumns} />
                                    <p className='radio-text'>Bank</p>

                                    <p className='payment-info'>Account2Account (Pay directly from your bank account, ANZ, ASB, BNZ, Kiwibank, Westpac or TSB - Windcave) Note: No Surcharge</p>
                                    
                                
                            </div>
                            {/* <div className='radio-btn-elements'>
                                    <input className='afterpay-btn radio elements'
                                    type="radio"
                                    name="payment"
                                    value="afterpay"
                                    checked={paymentMethod === 'afterpay'}
                                    onChange={() => setPaymentMethod('afterpay')}
                                    />
                                    <img src='../images/Afterpay_Sticker_BlackonMint.svg' className='afterpay-logo' alt='Afterpay Logo'></img>
                                    <p className='afterpay-text'>Afterpay</p>

                                    <p className='payment-info'>Eat now pay later</p>
                            
                            </div> */}

                            {/* <div className='afterpay-description-container'>
                                <p className='afterpay-badge-description'>or 4 interest-free payments of $10.71 with</p>
                                <img className='afterpay-badge' src='../images/Afterpay_Badge_BlackonMint.jpg'></img>
                                <FontAwesomeIcon className='afterpay-description-info-icon' icon={faCircleInfo} />
                            </div> */}

                            <div className='surcharge-warning-container'>
                                <p className='surcharge-text'>There will be an extra 2.00% surcharge for online payment processing (for payments made by all Eftpos Debit Cards & Credit Cards) - Extra 2.00% surcharge on this order will be $0.75</p>
                            </div>

                            <div className='agreement-container'>
                                <label>
                                    <input
                                    type="checkbox"
                                    name="agreement"
                                    checked={isAgreed}
                                    onChange={(e) => setIsAgreed(e.target.checked)}
                                    />
                                    I agree to the Order Meal Terms & Conditions and Privacy Policy
                                </label>
                            </div>

                            <button className='pay-now-btn'>Pay Now</button>

                            <div className='gst-allergy-text-container'>
                                <p className='gst-text'>All prices are in NZD and GST inclusive</p>
                                <p className='allergy-text'>Do you have an allergy?</p>
                            </div>
                    </div>
                    
                </div>

            </div>

            <Footer /> 

        </>
        
    );
}

export default Checkout;
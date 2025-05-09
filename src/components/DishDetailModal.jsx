import '../css/DishDetailModal.css';
import ChooseCurryDropDown from './ChooseCurryDropDown';
import ChooseSizeDropDown from './ChooseSizeDropDown';
import ChooseSpiceDropDown from './ChooseSpiceDropDown';
import ChoosePortionDropDown from './ChoosePortionDropDown';
import { useEffect, useRef, useState } from 'react';


function DishDetailModal({ dish, onClose, setCartCount }) {
    const modalRef = useRef();
    const [quantity, setQuantity] = useState(1); // Counter state
    const [selectedCurry, setSelectedCurry] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedSpice, setSelectedSpice] = useState('');
    const [selectedPortion, setSelectedPortion] = useState('');

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Minimum 1
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: dish.id,
            name: dish.name,
            image: dish.image,
            price: dish.price,
            quantity: quantity,
            curry: selectedCurry,
            size: selectedSize,
            spiceLevel: selectedSpice,
            portion: selectedPortion
        };

  
       const existingCart = JSON.parse(localStorage.getItem('cart')) || [];


       existingCart.push(cartItem);

    
       localStorage.setItem('cart', JSON.stringify(existingCart));

    
       setCartCount(existingCart.length);

   
       onClose();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>

                <div className='modal-image-container'>
                    <img className='modal-image' src={dish.image} alt={dish.name} />
                    <h2 className='modal-image-heading'>{dish.name}</h2>
                </div>

                <div className='modal-details-container'>

                    <div className='details-form'>

                    <div className='details-form-choose-portion'>
                            <ChoosePortionDropDown selectedPortion={selectedPortion} setSelectedPortion={setSelectedPortion} />
                        </div>

                        <div className='details-form-choose-curry'>
                            <ChooseCurryDropDown selectedCurry={selectedCurry} setSelectedCurry={setSelectedCurry} />
                        </div>

                        <div className='details-form-choose-size'>
                            <ChooseSizeDropDown selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                        </div>

                        <div className='details-form-choose-spice-level'>
                            <ChooseSpiceDropDown selectedSpice={selectedSpice} setSelectedSpice={setSelectedSpice} />
                        </div>



                    </div>

                    <div className='details-buttons'>
                        <div className='quantity-selector'>
                            <button onClick={handleDecrement} className='quantity-button-minus'>-</button>
                            <div className='quantity-count'>{quantity}</div>
                            <button onClick={handleIncrement} className='quantity-button-plus'>+</button>
                        </div>
                        <button  onClick={handleAddToCart} className='details-button-add-to-cart'>Add to Cart</button>
                    </div>

                    

                    
                </div>
                
            </div>
        </div>
    );
}

export default DishDetailModal;


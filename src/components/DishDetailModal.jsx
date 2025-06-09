import '../css/DishDetailModal.css';
import ChooseCurryDropDown from './ChooseCurryDropDown';
import ChooseMeatDropDown from './ChooseMeatDropDown';
import ChooseSpiceDropDown from './ChooseSpiceDropDown';
import ChoosePortionDropDown from './ChoosePortionDropDown';
import { useEffect, useRef, useState, useContext } from 'react';
import { CartContext } from './CartContext';


function DishDetailModal({ dish, onClose, editingIndex }) {

    const { cart, setCart } = useContext(CartContext);

    const modalRef = useRef();
    const [quantity, setQuantity] = useState(1); // Counter state
    const [selectedCurry, setSelectedCurry] = useState('');
    const [selectedMeat, setSelectedMeat] = useState('');
    const [selectedSpice, setSelectedSpice] = useState('');
    const [selectedPortion, setSelectedPortion] = useState('');
    const [price, setPrice] = useState(dish.price || 0);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Minimum 1
    };

    const handleAddToCart = () => {
        const updatedItem = {
        ...dish,
        quantity,
        curry: selectedCurry,
        meat: selectedMeat,
        spiceLevel: selectedSpice,
        portion: selectedPortion,
        price: price
    };

    setCart(prevCart => {
        if (editingIndex === undefined || editingIndex < 0 || editingIndex >= prevCart.length) {
            // Optionally add new item if editingIndex is invalid:
            return [...prevCart, updatedItem];
        }
        const updatedCart = [...prevCart];
        updatedCart[editingIndex] = updatedItem;
        return updatedCart;
    });

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

    useEffect(() => {
    if (dish) {
        setQuantity(dish.quantity || 1);
        setSelectedCurry(dish.curry || '');
        setSelectedMeat(dish.meat || '');
        setSelectedSpice(dish.spiceLevel || '');
        setSelectedPortion(dish.portion || '');
    }
    }, [dish]);

    useEffect(() => {
    if (dish) {
        if (selectedPortion === 'Half' && dish.priceHalf !== undefined) {
            setPrice(dish.priceHalf);
        } else if (selectedPortion === 'Full' && dish.priceFull !== undefined) {
            setPrice(dish.priceFull);
        } else {
            setPrice(dish.price);
        }
    }
    }, [selectedPortion, dish]);

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
                            <ChooseMeatDropDown selectedMeat={selectedMeat} setSelectedMeat={setSelectedMeat} />
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


import Footer from '../components/Footer';
import dishes from '../data/dishes';
import DishDetailModal from '../components/DishDetailModal';
import { useState } from 'react';
import '../css/Menu.css';

function Menu({setCartCount}) {


    const [selectedDish, setSelectedDish] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDish(null);
    };

    const renderDishCards = (category) => (
        dishes.filter(item => item.category === category).map(item => (
            <div className='menu-card-container' key={item.id}>
                <div className='menu-card-image-holder'>
                    <img className='menu-card-image' src={item.image} alt={item.name} />
                </div>

                <div className='menu-card-details'>
                    <h3>{item.name}</h3>
                    <p className='dish-details'>{item.description}</p>

                    {item.price ? (
                        <p className='dish-price'>{item.price}</p>
                    ) : (
                        <p className='dish-price-half'>Half - {item.priceHalf}</p>
                    )}

                    {item.priceFull && <p className='dish-price-full'>Full - {item.priceFull}</p>}

                    <div className='menu-card-button-container'>
                        
        
                                    <button
                                        className='menu-card-button-default'
                                        onClick={() => {
                                            setSelectedDish(item);
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                

                    </div>
    

                        
                </div>
            </div>
        ))
    );



    return (
        <>

            <div className='menu-page-container'>
                <h1 className='menu-page-title'>Menu</h1>

                <h2 className='menu-page-subtitle'>Starters</h2>
                <section className='menu-starters-container'>
                    {renderDishCards("Starters")}
                </section>

                <h2 className='menu-page-subtitle'>Mains</h2>
                <section className='menu-mains-container'>
                    {renderDishCards("Starters")}
                </section>

                <h2 className='menu-page-subtitle'>Desserts</h2>
                <section className='menu-desserts-container'>
                    {renderDishCards("Starters")}
                </section>

                <h2 className='menu-page-subtitle'>Drinks</h2>
                <section className='menu-drinks-container'>
                    {renderDishCards("Starters")}
                </section>
            </div>
            <Footer />


            {isModalOpen && (
                <DishDetailModal 
                    dish={selectedDish} 
                    onClose={handleCloseModal} 
                    setCartCount={setCartCount}
                />
            )}
            
        </>

    );

    
}

export default Menu;
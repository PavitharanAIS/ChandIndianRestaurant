import Home from './pages/Home';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Feedback from './pages/Feedback';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ModalStart from './components/ModalStart';
import Starters from './pages/Starters';
import Mains from './pages/Mains';
import Desserts from './pages/Desserts';
import Drinks from './pages/Drinks';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(true); 
  const [preferredRestaurant, setPreferredRestaurant] = useState('');

      useEffect(() => {
        const savedRestaurant = localStorage.getItem('preferredRestaurant'); // **Fetch from localStorage**
        if (savedRestaurant) {
            setPreferredRestaurant(savedRestaurant); 
            setIsModalOpen(false); 
        }
    }, []);

    const handleRestaurantChange = (restaurant) => {
      setPreferredRestaurant(restaurant);
      localStorage.setItem('preferredRestaurant', restaurant); // **Save to localStorage**
      setIsModalOpen(false);
  };

    const openModalAgain = () => {
      setIsModalOpen(true);
      setPreferredRestaurant('');
      localStorage.removeItem('preferredRestaurant'); // **Remove from localStorage**
  };


  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartCount, setCartCount] = useState(0);

   useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0)); // Sum up quantities for the cart count
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
  }, [cart]);



  return (
    <main className="main-content">

      {isModalOpen && <div className="home-overlay"></div>}

      {isModalOpen && <ModalStart onRestaurantSelect={handleRestaurantChange} />}
      <NavBar preferredRestaurant={preferredRestaurant} onLocationBtnClick={openModalAgain} cartCount={cartCount} cart={cart} setCart={setCart} setCartCount={setCartCount}  />

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/Menu" element={<Menu cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
        <Route path="/pages/Checkout" element={<Checkout setCart={setCart} />} />
        <Route path="/pages/Feedback" element={<Feedback />} /> 
        <Route path="/pages/Starters" element={<Starters cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
        <Route path="/pages/Mains" element={<Mains cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
        <Route path="/pages/Desserts" element={<Desserts cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
        <Route path="/pages/Drinks" element={<Drinks cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
      </Routes>

      

    </main>
  );
}

export default App;

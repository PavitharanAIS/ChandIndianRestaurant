import Home from './pages/Home';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Feedback from './pages/Feedback';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ModalStart from './components/ModalStart';

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





  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Read cart from localStorage (if it exists) when app first loads
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <main className="main-content">

      {isModalOpen && <div className="home-overlay"></div>}

      {isModalOpen && <ModalStart onRestaurantSelect={handleRestaurantChange} />}
      <NavBar preferredRestaurant={preferredRestaurant} onLocationBtnClick={openModalAgain} cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/Menu" element={<Menu setCartCount={setCartCount} />} />
        <Route path="/pages/Checkout" element={<Checkout setCartCount={setCartCount} />} />
        <Route path="/pages/Feedback" element={<Feedback setCartCount={setCartCount} />} />

      </Routes>

    </main>
  );
}

export default App;

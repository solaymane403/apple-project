import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Promo from './pages/Promo';
import About from './pages/About';

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toasts, removeToast } = useCart();

  return (
    <>
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Toast toasts={toasts} removeToast={removeToast} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;

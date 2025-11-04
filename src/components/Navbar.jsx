import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Moon, Sun, Apple } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = ({ onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount, isDark, toggleDarkMode } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Promo', path: '/promo' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Apple size={24} />
        </Link>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <button onClick={toggleDarkMode} className="icon-btn" aria-label="Toggle dark mode">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button onClick={onSearchOpen} className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>

          <Link to="/cart" className="icon-btn cart-btn" aria-label="Shopping cart">
            <ShoppingBag size={20} />
            {getItemCount() > 0 && (
              <span className="cart-badge">{getItemCount()}</span>
            )}
          </Link>

          <button
            className="mobile-menu-btn icon-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

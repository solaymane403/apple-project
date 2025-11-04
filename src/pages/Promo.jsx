import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShoppingCart, Star, Zap, Gift, TrendingUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Promo.css';

const PROMO_PRODUCTS = [
  {
    id: 'promo-1',
    name: 'iPhone 15 Pro - Black Friday',
    description: 'Limited time offer on the latest iPhone 15 Pro with titanium finish',
    price: 11999,
    oldPrice: 14999,
    discount: 20,
    badge: 'Hot Deal',
    category: 'flash',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop'
  },
  {
    id: 'promo-2',
    name: 'MacBook Air M3 Bundle',
    description: 'Get MacBook Air M3 + AirPods Pro 2 + Magic Mouse at special price',
    price: 13999,
    oldPrice: 17999,
    discount: 22,
    badge: 'Bundle',
    category: 'bundle',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop'
  },
  {
    id: 'promo-3',
    name: 'iPad Pro 12.9" + Apple Pencil',
    description: 'Ultimate creative package with M2 iPad Pro and Apple Pencil Pro',
    price: 13499,
    oldPrice: 16499,
    discount: 18,
    badge: 'Creative Pack',
    category: 'bundle',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop'
  },
  {
    id: 'promo-4',
    name: 'Apple Watch Ultra 2 - Sport',
    description: 'Adventure-ready smartwatch with precision GPS and action button',
    price: 7499,
    oldPrice: 8999,
    discount: 17,
    badge: 'Limited',
    category: 'flash',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop'
  },
  {
    id: 'promo-5',
    name: 'AirPods Max - Space Gray',
    description: 'Premium over-ear headphones with computational audio',
    price: 4999,
    oldPrice: 6499,
    discount: 23,
    badge: 'Best Seller',
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop'
  },
  {
    id: 'promo-6',
    name: 'Mac Studio M2 Max',
    description: 'Desktop powerhouse for creative professionals',
    price: 24999,
    oldPrice: 29999,
    discount: 17,
    badge: 'Pro Deal',
    category: 'pro',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop'
  }
];

function Promo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 45
  });
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="promo-page">
      {/* Promo Hero */}
      <motion.section 
        className="promo-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="promo-hero-background">
          <div className="promo-gradient-orb promo-orb-1"></div>
          <div className="promo-gradient-orb promo-orb-2"></div>
          <div className="promo-gradient-orb promo-orb-3"></div>
        </div>
        <div className="hero-content">
          <motion.div
            className="promo-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Gift size={48} />
          </motion.div>
          <motion.h1 
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Special Offers
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Limited time deals you don't want to miss
          </motion.p>

          {/* Countdown Timer */}
          <motion.div 
            className="promo-timer"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="timer-box">
              <span className="timer-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="timer-label">Minutes</span>
            </div>
            <div className="timer-box">
              <span className="timer-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="timer-label">Seconds</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Deal */}
      <section className="featured-deal">
        <div className="container">
          <div className="deal-content">
            <motion.div 
              className="deal-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop" 
                alt="Featured Deal" 
              />
              <div className="deal-badge">
                <Star className="badge-icon" />
                <span className="discount">-20%</span>
              </div>
            </motion.div>

            <motion.div 
              className="deal-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="deal-tag">
                <Zap size={16} />
                Deal of the Day
              </span>
              <h2>iPhone 15 Pro Max Special Edition</h2>
              <p className="deal-description">
                Experience the pinnacle of smartphone technology with our exclusive special edition iPhone 15 Pro Max. 
                Featuring titanium design, A17 Pro chip, and professional camera system. Limited quantities available.
              </p>

              <div className="deal-features">
                <div className="feature-item">
                  <Clock size={24} />
                  <span>1 Year Apple Warranty</span>
                </div>
                <div className="feature-item">
                  <TrendingUp size={24} />
                  <span>Free Shipping</span>
                </div>
                <div className="feature-item">
                  <Gift size={24} />
                  <span>Free AirTag Included</span>
                </div>
                <div className="feature-item">
                  <Star size={24} />
                  <span>30-Day Return Policy</span>
                </div>
              </div>

              <div className="deal-pricing">
                <div className="price-box">
                  <span className="old-price">16,999 DH</span>
                  <span className="new-price">11,999 DH</span>
                </div>
                <button 
                  className="btn-buy-now"
                  onClick={() => handleAddToCart(PROMO_PRODUCTS[0])}
                >
                  <ShoppingCart size={20} />
                  Buy Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promo Grid */}
      <section className="promo-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">More Great Deals</h2>
            <p className="section-subtitle">Don't miss out on these amazing offers</p>
          </div>

          <div className="promo-grid">
            {PROMO_PRODUCTS.slice(1).map((product, index) => (
              <motion.div
                key={product.id}
                className="promo-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <span className={`promo-badge ${product.category}`}>
                  {product.badge}
                </span>
                <div className="promo-image">
                  <img src={product.image} alt={product.name} />
                  <div className="discount-overlay">
                    <span className="discount-text">-{product.discount}%</span>
                  </div>
                </div>
                <div className="promo-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="promo-price">
                    <span className="price-old">{product.oldPrice.toLocaleString()} DH</span>
                    <span className="price-new">{product.price.toLocaleString()} DH</span>
                  </div>
                  <button
                    className="btn-promo"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Promo;

import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Shield, Truck, Star, ArrowRight, Award, TrendingUp, Users, Globe, Heart, CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Home.css';

const FEATURED_PRODUCTS = [
  {
    id: 'featured-1',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: '14,999 DH',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop',
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'featured-2',
    name: 'MacBook Pro',
    tagline: 'Mind-blowing. Head-turning.',
    price: '28,999 DH',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'featured-3',
    name: 'AirPods Pro',
    tagline: 'Adaptive Audio. Now playing.',
    price: '2,999 DH',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&h=600&fit=crop',
    color: 'from-pink-600 to-red-600'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Best Apple store in Morocco! Fast delivery and authentic products. My MacBook Pro arrived in perfect condition.'
  },
  {
    id: 2,
    name: 'Ahmed Benali',
    role: 'Software Developer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    text: 'Amazing customer service! They helped me choose the perfect iPhone 15 Pro. Highly recommended!'
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    role: 'Designer',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'Love the experience! Great prices and the warranty coverage gives me peace of mind. Will buy again!'
  }
];

function Home() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      showToast('Successfully subscribed to newsletter!', 'success');
      setEmail('');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The future is here
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience innovation at its finest with our premium Apple products
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/shop" className="btn-primary">
              Shop Now
              <ArrowRight size={20} />
            </Link>
            <Link to="/promo" className="btn-secondary">
              View Deals
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Users size={40} />
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ShoppingBag size={40} />
              <h3>100K+</h3>
              <p>Products Sold</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Globe size={40} />
              <h3>30+</h3>
              <p>Cities Covered</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Award size={40} />
              <h3>4.9/5</h3>
              <p>Customer Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Featured Products</h2>
            <p>Discover our most popular devices</p>
          </motion.div>

          <div className="featured-grid">
            {FEATURED_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                className="featured-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className={`featured-image bg-gradient-to-br ${product.color}`}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="featured-info">
                  <h3>{product.name}</h3>
                  <p>{product.tagline}</p>
                  <div className="featured-footer">
                    <span className="featured-price">{product.price}</span>
                    <Link to="/shop" className="btn-featured">
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Us</h2>
            <p>Premium service and authentic products guaranteed</p>
          </motion.div>

          <div className="features-grid">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Truck size={40} />
              <h3>Free Shipping</h3>
              <p>Fast and free delivery on all orders over 500 DH</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Shield size={40} />
              <h3>1 Year Warranty</h3>
              <p>Full coverage on all Apple products</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Zap size={40} />
              <h3>Fast Support</h3>
              <p>24/7 customer service at your fingertips</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Star size={40} />
              <h3>Best Quality</h3>
              <p>Premium products guaranteed authentic</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Award size={40} />
              <h3>Official Products</h3>
              <p>100% genuine Apple products only</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Heart size={40} />
              <h3>Customer Love</h3>
              <p>Trusted by thousands of happy customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real people</p>
          </motion.div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail size={48} />
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive deals and latest product launches</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-newsletter">
                Subscribe
              </button>
            </form>
            <div className="newsletter-benefits">
              <div className="benefit">
                <CheckCircle size={20} />
                <span>Exclusive deals</span>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <span>Early access</span>
              </div>
              <div className="benefit">
                <CheckCircle size={20} />
                <span>No spam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ShoppingBag size={64} />
            <h2>Ready to upgrade?</h2>
            <p>Discover our latest collection of premium Apple products</p>
            <Link to="/shop" className="btn-cta">
              Explore Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Filter, DollarSign, SortAsc } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Shop.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system',
    price: 14999,
    oldPrice: 16999,
    badge: 'New',
    category: 'iphone',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    description: 'Supercharged by M3 Pro and M3 Max. Longest battery life ever in a Mac',
    price: 28999,
    oldPrice: 32999,
    badge: 'Pro',
    category: 'mac',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'iPad Pro 12.9"',
    description: 'The ultimate iPad experience with M2 chip and stunning Liquid Retina XDR display',
    price: 12499,
    oldPrice: 14999,
    badge: 'New',
    category: 'ipad',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'AirPods Pro 2',
    description: 'Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio',
    price: 2999,
    oldPrice: 3499,
    badge: 'Popular',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop'
  },
  {
    id: 5,
    name: 'Apple Watch Ultra 2',
    description: 'The most rugged and capable Apple Watch. Precision GPS, depth gauge, and dual-frequency',
    price: 8999,
    oldPrice: 9999,
    badge: 'Gaming',
    category: 'watch',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'iMac 24" M3',
    description: 'Strikingly thin design. Brilliant 4.5K Retina display. The best camera and mics in a Mac',
    price: 15999,
    oldPrice: 18999,
    badge: 'Pro',
    category: 'mac',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop'
  },
  {
    id: 7,
    name: 'Mac Mini M2 Pro',
    description: 'Desktop-class performance in an impossibly compact design. Pro performance, everyday price',
    price: 7999,
    oldPrice: 9499,
    badge: 'New',
    category: 'mac',
    image: 'https://images.unsplash.com/photo-1717632463998-dc3ee6717d8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fE1hYyUyME1pbmklMjBNMiUyMFByb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
  },
  {
    id: 8,
    name: 'iPhone 15',
    description: 'Dynamic Island. 48MP Main camera. USB-C. All-day battery life',
    price: 9999,
    oldPrice: 11999,
    badge: 'Popular',
    category: 'iphone',
    image: 'https://images.unsplash.com/photo-1695048064952-44b984f2af6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
  },
  {
    id: 9,
    name: 'Magic Keyboard Pro',
    description: 'Wireless, rechargeable with numeric keypad. Pairs automatically with your Mac',
    price: 1499,
    oldPrice: 1999,
    badge: 'Accessories',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1622531633799-4b4abdaf88d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632'
  }
];

function Shop() {
  const [products, setProducts] = useState(PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'default'
  });
  const { addToCart } = useCart();

  useEffect(() => {
    applyFilters();
  }, [filters, searchQuery]);

  const applyFilters = () => {
    let filtered = [...PRODUCTS];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Price filter
    if (filters.priceRange !== 'all') {
      filtered = filtered.filter(p => {
        if (filters.priceRange === 'low') return p.price < 10000;
        if (filters.priceRange === 'mid') return p.price >= 10000 && p.price <= 25000;
        if (filters.priceRange === 'high') return p.price > 25000;
        return true;
      });
    }

    // Sort
    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setProducts(filtered);
  };

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
    <div className="shop-page">
      {/* Hero Section */}
      <motion.section 
        className="shop-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="shop-hero-background">
          <div className="shop-gradient-orb shop-orb-1"></div>
          <div className="shop-gradient-orb shop-orb-2"></div>
          <div className="shop-gradient-orb shop-orb-3"></div>
        </div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Shop
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Discover our latest collection
          </motion.p>
        </div>
      </motion.section>

      {/* Shop Section */}
      <section className="shop-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Cutting-edge technology at your fingertips</p>
          </div>

          {/* Filter Bar */}
          <motion.div 
            className="filter-bar"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Search */}
            <div className="filter-group">
              <label>
                <Search size={18} />
                Search:
              </label>
              <input
                type="text"
                className="filter-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="filter-group">
              <label>
                <Filter size={18} />
                Category:
              </label>
              <select
                className="filter-select"
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
              >
                <option value="all">All Products</option>
                <option value="iphone">iPhone</option>
                <option value="mac">Mac</option>
                <option value="ipad">iPad</option>
                <option value="watch">Watch</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            {/* Price */}
            <div className="filter-group">
              <label>
                <DollarSign size={18} />
                Price:
              </label>
              <select
                className="filter-select"
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="all">All Prices</option>
                <option value="low">Under 10,000 DH</option>
                <option value="mid">10,000 - 25,000 DH</option>
                <option value="high">Above 25,000 DH</option>
              </select>
            </div>

            {/* Sort */}
            <div className="filter-group">
              <label>
                <SortAsc size={18} />
                Sort:
              </label>
              <select
                className="filter-select"
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="shop-grid">
            {products.length === 0 ? (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
              </div>
            ) : (
              products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="shop-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="shop-card-image">
                    <img src={product.image} alt={product.name} />
                    <span className={`shop-badge ${product.badge.toLowerCase()}`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="shop-card-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="price-tag">
                      <span className="price-current">{product.price.toLocaleString()} DH</span>
                      {product.oldPrice && (
                        <span className="price-old">{product.oldPrice.toLocaleString()} DH</span>
                      )}
                    </div>
                    <button
                      className="btn-add-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import './SearchModal.css';

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '14,999 DH', category: 'iPhone', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop' },
  { id: 2, name: 'MacBook Pro 16"', price: '28,999 DH', category: 'Mac', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop' },
  { id: 3, name: 'iPad Pro 12.9"', price: '12,499 DH', category: 'iPad', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100&h=100&fit=crop' },
  { id: 4, name: 'AirPods Pro 2', price: '2,999 DH', category: 'Accessories', image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=100&h=100&fit=crop' },
  { id: 5, name: 'Apple Watch Ultra 2', price: '8,999 DH', category: 'Watch', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop' },
  { id: 6, name: 'iMac 24" M3', price: '15,999 DH', category: 'Mac', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop' },
  { id: 7, name: 'Mac Mini M2 Pro', price: '7,999 DH', category: 'Mac', image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=100&h=100&fit=crop' },
  { id: 8, name: 'iPhone 15', price: '9,999 DH', category: 'iPhone', image: 'https://images.unsplash.com/photo-1696446702363-3ae6206cdc08?w=100&h=100&fit=crop' },
  { id: 9, name: 'Magic Keyboard Pro', price: '1,499 DH', category: 'Accessories', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&h=100&fit=crop' },
];

function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = SAMPLE_PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          // This will be handled by parent
        }
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setResults([]);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="search-modal-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-header">
              <Search size={24} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search products... (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className="close-search" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="search-results">
              {searchQuery && results.length === 0 && (
                <div className="no-results">
                  <p>No products found for "{searchQuery}"</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="results-list">
                  {results.map((product) => (
                    <motion.a
                      key={product.id}
                      href="/shop"
                      className="search-result-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 8, backgroundColor: 'var(--light-gray)' }}
                      onClick={onClose}
                    >
                      <img src={product.image} alt={product.name} />
                      <div className="result-info">
                        <h4>{product.name}</h4>
                        <span className="result-category">{product.category}</span>
                      </div>
                      <span className="result-price">{product.price}</span>
                    </motion.a>
                  ))}
                </div>
              )}

              {!searchQuery && (
                <div className="search-suggestions">
                  <p className="suggestions-title">Popular Searches</p>
                  <div className="suggestion-tags">
                    {['iPhone', 'MacBook', 'iPad', 'AirPods', 'Watch'].map((tag) => (
                      <button
                        key={tag}
                        className="suggestion-tag"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;

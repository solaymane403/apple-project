import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="cart-page">
      <motion.section 
        className="cart-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="cart-hero-background">
          <div className="cart-gradient-orb cart-orb-1"></div>
          <div className="cart-gradient-orb cart-orb-2"></div>
          <div className="cart-gradient-orb cart-orb-3"></div>
        </div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ShoppingBag size={64} />
            Shopping Cart
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </motion.p>
        </div>
      </motion.section>

      <section className="cart-section">
        <div className="container">
          {cart.length === 0 ? (
            <motion.div 
              className="empty-cart"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ShoppingBag size={80} strokeWidth={1} />
              <h2>Your cart is empty</h2>
              <p>Add some products to get started!</p>
              <a href="/shop" className="btn-primary">
                Continue Shopping
              </a>
            </motion.div>
          ) : (
            <div className="cart-content">
              <div className="cart-table-wrapper">
                <table className="modern-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td>
                          <div className="product-cell">
                            <img src={item.image} alt={item.name} />
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td className="price-cell">{item.price.toLocaleString()} DH</td>
                        <td>
                          <div className="quantity-controls">
                            <button
                              className="qty-btn"
                              onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                              className="qty-btn"
                              onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="total-cell">
                          {(item.price * item.quantity).toLocaleString()} DH
                        </td>
                        <td>
                          <button
                            className="btn-delete"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-right"><strong>Grand Total:</strong></td>
                      <td className="grand-total">{getCartTotal().toLocaleString()} DH</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <motion.div 
                className="cart-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a href="/shop" className="btn-secondary">
                  Continue Shopping
                </a>
                <button className="btn-primary">
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cart;

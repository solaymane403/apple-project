import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github,
  Globe,
  Linkedin,
  Heart
} from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Apple Store</h3>
            <p>Your premium destination for the latest Apple products and accessories.</p>
            <div className="social-links">
              <a href="https://github.com/solaymane403" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://ohara4solaymane.netlify.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <Globe size={20} />
              </a>
              <a href="https://www.linkedin.com/in/soulaiman-haddash-06a15b387/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:soulaimanok@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/promo">Promotions</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>Me</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+212 631-843619</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>soulaimanok@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for exclusive offers and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter">
              <input 
                type="email" 
                name="soulaimanok@gmail.com"
                placeholder="Your email" 
                required 
              />
              <button type="submit">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            Made with <Heart size={16} className="heart-icon" /> © {currentYear} Solaymane Store. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Sweet Delights</h3>
            <p>Baking happiness since 2010. We create delicious pastries, bread, and desserts using only the finest ingredients and traditional recipes.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="social-icon">📸</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" aria-label="Pinterest">
                <span className="social-icon">📌</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>📌 123 Bakery Street, Sweetville, SV 12345</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@sweetdelights.com</li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates and special offers.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sweet Delights. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

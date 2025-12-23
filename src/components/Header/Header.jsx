// src/components/Header/Header.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItems, toggleCart } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Calculate total items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Small delay to ensure the home page has loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Don't render anything if user is not logged in
  if (!user) {
    return null;
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Crumb & Cream</Link>
      </div>
      <nav className="nav">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("menu")}>Menu</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("testimonials")}>
          Testimonials
        </button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
      <div className="header-actions">
        <div className="user-actions">
          <Link to="/profile" className="profile-button" title="Profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          <button onClick={logout} className="logout-button" title="Logout">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
        <button className="cart-icon-button" onClick={toggleCart}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
};

export default Header;

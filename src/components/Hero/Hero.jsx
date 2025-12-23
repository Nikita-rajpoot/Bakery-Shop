// src/components/Hero/Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      // Small delay to ensure the home page has loaded
      setTimeout(() => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Welcome to Crumb & Cream</h1>
        <p>Freshly baked delights made with love and the finest ingredients</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleViewMenu}>
            View Menu
          </button>
          <button className="btn btn-secondary">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
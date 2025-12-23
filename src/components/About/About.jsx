import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
            alt="Our Bakery" 
          />
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p className="highlight">Baking with passion since 2010</p>
          <p>
            Welcome to Sweet Delights, where every bite tells a story of passion, tradition, and love for baking. 
            Founded by master baker Sarah Johnson, our bakery brings together time-honored recipes and innovative 
            techniques to create unforgettable treats.
          </p>
          <p>
            We source only the finest ingredients, from organic flours to farm-fresh eggs and seasonal fruits. 
            Each morning, our bakers arrive before dawn to ensure that every pastry, loaf of bread, and dessert 
            is made fresh daily.
          </p>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🍞</div>
              <h4>Fresh Daily</h4>
              <p>Baked fresh every morning</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌱</div>
              <h4>Quality Ingredients</h4>
              <p>Locally sourced & organic</p>
            </div>
            <div className="feature">
              <div className="feature-icon">❤️</div>
              <h4>Made with Love</h4>
              <p>Passion in every bite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Food Blogger',
    content: "The croissants here are absolutely divine! Flaky, buttery, and perfectly baked. My go-to place for breakfast every weekend.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/43.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Local Resident',
    content: "Best sourdough in town! The crust is perfect and the inside is so airy and flavorful. I buy a loaf every other day.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    role: 'Pastry Chef',
    content: "As a professional baker, I'm very particular about pastries. The quality and taste of their products are exceptional. Highly recommend!",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

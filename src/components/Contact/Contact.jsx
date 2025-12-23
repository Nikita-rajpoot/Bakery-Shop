import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_9j2ay3l';
      const templateId = 'template_dvpigap';
      const publicKey = 'bs2lX3vQpnEbvWkpo';
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'nikitarajpoot028@gmail.com' // Your email address
        },
        publicKey
      );
      
      setStatus('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">We'd love to hear from you! Send us a message or visit our bakery.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Our Location</h4>
                <p>123 Bakery Street, Sweetville, SV 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone Number</h4>
                <p>+91 0000000000</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>nikitarajpoot028@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h4>Opening Hours</h4>
                <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <span className="social-icon">📘</span>
            </a>
            <a href="#" aria-label="Instagram">
              <span className="social-icon">📸</span>
            </a>
            <a href="#" aria-label="Twitter">
              <span className="social-icon">🐦</span>
            </a>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          {status && (
            <div className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>
              {status}
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="How can we help you?"
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

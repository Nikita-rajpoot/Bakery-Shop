import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'YOUR_EMAIL@example.com' // Your email address
        },
        publicKey
      );
      
      setStatus('Message sent successfully!');
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
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {status && <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>{status}</div>}
      
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
            rows="5"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

// src/components/Checkout/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal, createOrder, closeCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'cod',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Close cart when component mounts
  useEffect(() => {
    closeCart();
  }, [closeCart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const orderData = {
        userId: 'current-user-id', // Replace with actual user ID
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          postalCode: formData.zipCode,
          country: 'India' // Or get from form if needed
        },
        paymentMethod: formData.paymentMethod,
        // Add other necessary fields
      };

      const order = await createOrder(orderData);
      navigate(`/order-confirmation/${order._id}`);
    } catch (error) {
      console.error('Order submission failed:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="btn">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Shipping Information</h2>
          <div className="form-group">
            <div className="form-row">
              <div className={`form-field ${errors.firstName ? 'error' : ''}`}>
                <label>First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div className={`form-field ${errors.lastName ? 'error' : ''}`}>
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-field ${errors.email ? 'error' : ''}">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-field ${errors.phone ? 'error' : ''}">
              <label>Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-field ${errors.address ? 'error' : ''}">
              <label>Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-row">
              <div className={`form-field ${errors.city ? 'error' : ''}`}>
                <label>City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>
              <div className={`form-field ${errors.zipCode ? 'error' : ''}`}>
                <label>ZIP Code*</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                />
                {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
              </div>
            </div>
          </div>

          <h2>Payment Method</h2>
          <div className="payment-methods">
            <label className="payment-method">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="payment-method">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={formData.paymentMethod === 'online'}
                onChange={handleChange}
              />
              <span>Online Payment</span>
            </label>
          </div>

          <div className="checkout-actions">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-outline"
              disabled={isSubmitting}
            >
              Back to Cart
            </button>
            <button
              type="submit"
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="order-item-image" />
                <div className="order-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} × {item.quantity}</p>
                </div>
                <div className="order-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="order-totals">
            <div className="order-total-row">
              <span>Subtotal</span>
              <span>${cartTotal().toFixed(2)}</span>
            </div>
            <div className="order-total-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="order-total-row grand-total">
              <span>Total</span>
              <span>${cartTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
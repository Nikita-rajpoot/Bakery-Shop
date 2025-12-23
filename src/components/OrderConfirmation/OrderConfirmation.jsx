import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { orderDetails, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear cart on component mount
    return () => {
      if (orderDetails) {
        clearCart();
      }
    };
  }, [orderDetails, clearCart]);

  if (!orderDetails) {
    return (
      <div className="order-confirmation">
        <div className="confirmation-container">
          <h2>Order Not Found</h2>
          <p>We couldn't find your order details. Please check your order history or contact support.</p>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { id, items, total, customer, createdAt } = orderDetails;
  const orderDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="order-confirmation">
      <div className="confirmation-container">
        <div className="confirmation-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        
        <h1>Thank You for Your Order!</h1>
        <p className="order-number">Order #{id}</p>
        <p className="confirmation-message">
          Your order has been received and is being processed. We'll send you a confirmation email shortly.
        </p>
        
        <div className="order-details">
          <div className="detail-row">
            <span>Order Date</span>
            <span>{orderDate}</span>
          </div>
          <div className="detail-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="detail-row">
            <span>Payment Method</span>
            <span>{orderDetails.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit/Debit Card'}</span>
          </div>
        </div>

        <div className="shipping-address">
          <h3>Shipping Address</h3>
          <p>{customer.firstName} {customer.lastName}</p>
          <p>{customer.address}</p>
          <p>{customer.city}, {customer.zipCode}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>

        <div className="order-items-summary">
          <h3>Order Summary</h3>
          {items.map(item => (
            <div key={item.id} className="order-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
                <span className="quantity">{item.quantity}</span>
              </div>
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)} each</p>
              </div>
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="confirmation-actions">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/menu')}
          >
            Continue Shopping
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => {
              // In a real app, this would navigate to order tracking
              alert('Order tracking will be available soon!');
            }}
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

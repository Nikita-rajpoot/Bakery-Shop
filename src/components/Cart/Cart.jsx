import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    closeCart,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    // Here you would typically integrate with a payment processor
    alert(`Order placed successfully! Total: $${cartTotal().toFixed(2)}`);
    clearCart();
    closeCart();
  };

  if (!isCartOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  return (
    <div className="cart-overlay" onClick={handleOverlayClick}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={closeCart}>
            &times;
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <button 
              className="btn" 
              onClick={closeCart}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="cart-total">
                <span>Total:</span>
                <span>${cartTotal().toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button 
                  className="btn btn-outline"
                  onClick={closeCart}
                >
                  Continue Shopping
                </button>
                <button 
                  className="btn"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

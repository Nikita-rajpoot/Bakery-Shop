// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  getCart, 
  addToCart as addToCartApi, 
  updateCartItem as updateCartItemApi, 
  removeFromCart as removeFromCartApi, 
  clearCart as clearCartApi,
  createOrder as createOrderApi
} from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load cart from API on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        setIsLoading(true);
        // You'll need to get the current user's ID from your auth context
        const userId = 'current-user-id'; // Replace with actual user ID
        const cart = await getCart(userId);
        setCartItems(cart.items || []);
      } catch (err) {
        setError(err.message);
        console.error('Failed to load cart:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, []);

  const addToCart = useCallback(async (product, quantity = 1) => {
    try {
      setIsLoading(true);
      const userId = 'current-user-id'; // Replace with actual user ID
      const cart = await addToCartApi(userId, {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
      setCartItems(cart.items);
      return cart;
    } catch (err) {
      setError(err.message);
      console.error('Failed to add to cart:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateQuantity = useCallback(async (productId, newQuantity) => {
    try {
      if (newQuantity <= 0) {
        await removeFromCart(productId);
        return;
      }

      setIsLoading(true);
      const userId = 'current-user-id'; // Replace with actual user ID
      const cart = await updateCartItemApi(userId, productId, newQuantity);
      setCartItems(cart.items);
    } catch (err) {
      setError(err.message);
      console.error('Failed to update quantity:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeFromCart = useCallback(async (productId) => {
    try {
      setIsLoading(true);
      const userId = 'current-user-id'; // Replace with actual user ID
      const cart = await removeFromCartApi(userId, productId);
      setCartItems(cart.items || []);
    } catch (err) {
      setError(err.message);
      console.error('Failed to remove from cart:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearCart = useCallback(async () => {
    try {
      setIsLoading(true);
      const userId = 'current-user-id'; // Replace with actual user ID
      await clearCartApi(userId);
      setCartItems([]);
    } catch (err) {
      setError(err.message);
      console.error('Failed to clear cart:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createOrder = useCallback(async (orderData) => {
    try {
      setIsLoading(true);
      const order = await createOrderApi(orderData);
      // Clear the cart after successful order
      await clearCart();
      return order;
    } catch (err) {
      setError(err.message);
      console.error('Failed to create order:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [clearCart]);

  const cartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const itemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    isCartOpen,
    isLoading,
    error,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount,
    createOrder,
    toggleCart: () => setIsCartOpen(prev => !prev),
    closeCart: () => setIsCartOpen(false),
    openCart: () => setIsCartOpen(true)
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
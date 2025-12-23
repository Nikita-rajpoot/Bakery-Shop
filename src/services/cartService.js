// src/services/cartService.js

// Helper function to get cart from localStorage
const getCartFromStorage = (userId) => {
  const cart = localStorage.getItem(`cart_${userId}`);
  return cart ? JSON.parse(cart) : { items: [] };
};

// Helper function to save cart to localStorage
const saveCartToStorage = (userId, cart) => {
  localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
};

// Helper function to get orders from localStorage
const getOrdersFromStorage = (userId) => {
  const orders = localStorage.getItem(`orders_${userId}`);
  return orders ? JSON.parse(orders) : [];
};

// Helper function to save orders to localStorage
const saveOrdersToStorage = (userId, orders) => {
  localStorage.setItem(`orders_${userId}`, JSON.stringify(orders));
};

export const getCart = async (userId) => {
  try {
    return getCartFromStorage(userId);
  } catch (error) {
    console.error('Failed to fetch cart:', error);
    return { items: [] };
  }
};

export const addToCart = async (userId, item) => {
  try {
    const cart = getCartFromStorage(userId);
    const existingItemIndex = cart.items.findIndex(i => i.productId === item.productId);
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cart.items[existingItemIndex].quantity += item.quantity || 1;
    } else {
      // Add new item
      cart.items.push({
        ...item,
        quantity: item.quantity || 1
      });
    }
    
    saveCartToStorage(userId, cart);
    return cart;
  } catch (error) {
    console.error('Failed to add item to cart:', error);
    throw error;
  }
};

export const updateCartItem = async (userId, productId, quantity) => {
  try {
    const cart = getCartFromStorage(userId);
    const itemIndex = cart.items.findIndex(item => item.id === productId);
    
    if (itemIndex >= 0) {
      if (quantity > 0) {
        cart.items[itemIndex].quantity = quantity;
      } else {
        cart.items.splice(itemIndex, 1);
      }
      saveCartToStorage(userId, cart);
    }
    
    return cart;
  } catch (error) {
    console.error('Failed to update cart item:', error);
    throw error;
  }
};

export const removeFromCart = async (userId, productId) => {
  try {
    const cart = getCartFromStorage(userId);
    cart.items = cart.items.filter(item => item.id !== productId);
    saveCartToStorage(userId, cart);
    return cart;
  } catch (error) {
    console.error('Failed to remove item from cart:', error);
    throw error;
  }
};

export const clearCart = async (userId) => {
  try {
    localStorage.removeItem(`cart_${userId}`);
    return { items: [] };
  } catch (error) {
    console.error('Failed to clear cart:', error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    // Generate a random order ID
    const orderId = `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const order = {
      ...orderData,
      id: orderId,
      orderDate: new Date().toISOString(),
      status: 'completed'
    };
    
    // Save order to localStorage
    const orders = getOrdersFromStorage(orderData.userId);
    orders.push(order);
    saveOrdersToStorage(orderData.userId, orders);
    
    // Clear the cart after successful order
    if (orderData.userId) {
      await clearCart(orderData.userId);
    }
    
    return order;
  } catch (error) {
    console.error('Failed to create order:', error);
    throw error;
  }
};

export const getOrders = async (userId) => {
  try {
    // Fetch orders from localStorage
    const orders = getOrdersFromStorage(userId);
    return orders;
  } catch (error) {
    console.error('Failed to fetch orders:', error);
    return [];
  }
};
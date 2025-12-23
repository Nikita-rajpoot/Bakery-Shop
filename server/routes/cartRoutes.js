const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Get user's cart
router.get('/:userId', async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.params.userId });
    
    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({
        userId: req.params.userId,
        items: []
      });
      await cart.save();
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cart', error: error.message });
  }
});

// Add item to cart
router.post('/:userId/items', async (req, res) => {
  try {
    const { productId, name, price, image, quantity = 1 } = req.body;
    
    let cart = await Cart.findOne({ userId: req.params.userId });
    
    if (!cart) {
      // Create new cart if it doesn't exist
      cart = new Cart({
        userId: req.params.userId,
        items: []
      });
    }
    
    // Check if item already exists in cart
    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    
    if (itemIndex > -1) {
      // Update quantity if item exists
      cart.items[itemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({ productId, name, price, image, quantity });
    }
    
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to cart', error: error.message });
  }
});

// Update cart item quantity
router.put('/:userId/items/:productId', async (req, res) => {
  try {
    const { quantity } = req.body;
    
    const cart = await Cart.findOne({ userId: req.params.userId });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(item => item.productId === req.params.productId);
    
    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        cart.items.splice(itemIndex, 1);
      } else {
        // Update quantity
        cart.items[itemIndex].quantity = quantity;
      }
      
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update cart', error: error.message });
  }
});

// Remove item from cart
router.delete('/:userId/items/:productId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const itemIndex = cart.items.findIndex(item => item.productId === req.params.productId);
    
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item from cart', error: error.message });
  }
});

// Clear cart
router.delete('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = [];
    await cart.save();
    
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to clear cart', error: error.message });
  }
});

module.exports = router;

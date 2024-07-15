import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, removeFromCart, onCheckout }) {
  const navigate = useNavigate();
  const [removedMessage, setRemovedMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      onCheckout();

      const itemIdsToRemove = cartItems.map(item => item.id);
      removeFromCart(itemIdsToRemove);
      setRemovedMessage('Cart items removed after checkout.');
      setTotalPrice(0);
      navigate('/checkout');
    }
  };

  const handleRemove = (id, name) => {
    removeFromCart(id);
    setRemovedMessage(`${name} removed from cart`);
    setTimeout(() => {
      setRemovedMessage('');
    }, 3000);
    calculateTotalPrice();
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => handleRemove(item.id, item.name)} className="remove-button">Remove</button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p><strong>Total:</strong> ${totalPrice.toFixed(2)}</p>
          <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
      {}
      {removedMessage && <div className="removed-message">{removedMessage}</div>}
    </div>
  );
}

export default Cart;

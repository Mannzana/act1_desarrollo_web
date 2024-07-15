import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, removeFromCart, onCheckout }) {
  const navigate = useNavigate();
  const [removedMessage, setRemovedMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Calcular el precio total del carrito
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // Lógica para procesar el pedido (simulada por onCheckout)
      onCheckout(); // Llama a la función de checkout proporcionada por el padre

      // Limpiar el carrito después de completar el checkout
      const itemIdsToRemove = cartItems.map(item => item.id);
      removeFromCart(itemIdsToRemove); // Eliminar productos del carrito
      setRemovedMessage('Cart items removed after checkout.'); // Mensaje de eliminación
      setTotalPrice(0); // Reiniciar el precio total a cero
      navigate('/checkout'); // Redirigir a la página de checkout
    }
  };

  const handleRemove = (id, name) => {
    removeFromCart(id); // Lógica para remover un item del carrito
    setRemovedMessage(`${name} removed from cart`); // Establecer el mensaje de eliminación
    setTimeout(() => {
      setRemovedMessage('');
    }, 3000); // Limpiar el mensaje después de 3 segundos
    calculateTotalPrice(); // Recalcular el precio total después de la eliminación
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
      {/* Mostrar el mensaje de eliminación */}
      {removedMessage && <div className="removed-message">{removedMessage}</div>}
    </div>
  );
}

export default Cart;

import React, { useState, useEffect } from 'react';
import './OrderHistory.css';

function OrderHistory({ orderHistory }) {
  const [returnStatus, setReturnStatus] = useState({});

  useEffect(() => {
    const storedReturnStatus = localStorage.getItem('returnStatus');
    if (storedReturnStatus) {
      setReturnStatus(JSON.parse(storedReturnStatus));
    }
  }, []);

  const handleReturnOrder = (orderIndex) => {
    const updatedStatus = { ...returnStatus };
    updatedStatus[orderIndex] = true; // Marcar el pedido como en proceso de devolución
    setReturnStatus(updatedStatus);
    localStorage.setItem('returnStatus', JSON.stringify(updatedStatus)); // Guardar en el localStorage
  };

  const isOrderInReturnProcess = (orderIndex) => {
    return returnStatus.hasOwnProperty(orderIndex) && returnStatus[orderIndex];
  };

  if (!orderHistory) {
    return (
      <div className="order-history-container">
        <h2>Your Order History</h2>
        <p>No orders yet.</p>
      </div>
    );
  }

  return (
    <div className="order-history-container">
      <h2>Your Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="order-list">
          {orderHistory.map((order, index) => (
            <div key={index} className="order-item">
              <div className="order-item-details">
                <h3>Order #{index + 1}</h3>
                <p>Total: ${calculateTotal(order).toFixed(2)}</p>
              </div>
              <div className="order-item-products">
                {order.map((product, prodIndex) => (
                  <div key={prodIndex} className="product-item">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">${product.price.toFixed(2)}</span>
                  </div>
                ))}
                {!isOrderInReturnProcess(index) && (
                  <button onClick={() => handleReturnOrder(index)} className="return-button">Return to Cart</button>
                )}
                {isOrderInReturnProcess(index) && <span className="return-message">In process of return</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function calculateTotal(order) {
  return order.reduce((total, product) => total + product.price, 0);
}

export default OrderHistory;

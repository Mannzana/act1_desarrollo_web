import React, { useState } from 'react';
import './ReturnOrder.css';

function ReturnOrder({ returnOrder }) {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order ID:', orderId);
    console.log('Reason:', reason);
    
    returnOrder({ orderId, reason });

    setOrderId('');
    setReason('');
  };

  return (
    <div className="return-order">
      <div className="container">
        <h2>Return Order</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <label htmlFor="reason">Reason for return:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Return</button>
        </form>
      </div>
    </div>
  );
}

export default ReturnOrder;

import React, { useState } from 'react';
import './ReturnOrder.css';

function ReturnOrder({ returnOrder }) {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías validar los campos y enviar la solicitud de devolución
    // Por simplicidad, sólo consoleamos la información para este ejemplo
    console.log('Order ID:', orderId);
    console.log('Reason:', reason);
    
    // Llamar a la función de devolución proporcionada por el padre
    returnOrder({ orderId, reason });

    // Limpiar los campos después de enviar
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

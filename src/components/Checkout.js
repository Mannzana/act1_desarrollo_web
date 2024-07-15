import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', zip: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shipping Info:', shippingInfo);
    console.log('Payment Info:', paymentInfo);
    setTimeout(() => {
      setOrderPlaced(true);
    }, 2000); 
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {!orderPlaced ? (
        <form onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleShippingChange}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={shippingInfo.zip}
            onChange={handleShippingChange}
          />
          <h3>Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date"
            value={paymentInfo.expiryDate}
            onChange={handlePaymentChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
          />
          <button type="submit">Place Order</button>
        </form>
      ) : (
        <div className="order-placed">
          <p>Your order has been placed successfully!</p>
          <p>We will send you a confirmation email shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;

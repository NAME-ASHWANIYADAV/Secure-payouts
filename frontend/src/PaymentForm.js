import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css'; // Import CSS file for styles
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const PaymentForm = () => {
  const [paymentId, setPaymentId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/payments', { paymentId });
      setMessage(response.data.message);
      setPaymentStatus(response.data.payment.paymentStatus);
    } catch (error) {
      setMessage('Payment failed. Please try again.');
    }
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={paymentId} onChange={(e) => setPaymentId(e.target.value)} placeholder="Payment ID" />
        <button type="submit">Process Payment</button>
      </form>
      {message && <p className="message">{message}</p>}
      {paymentStatus && <p className="payment-status">Payment Status: {paymentStatus}</p>}
    </div>
  );
};

export default PaymentForm;

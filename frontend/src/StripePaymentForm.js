import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error('Error creating PaymentMethod:', error);
        setPaymentError(error.message);
        setPaymentSuccess(null);
      } else {
        setPaymentError(null);
        setPaymentSuccess(paymentMethod.id);

        // Send paymentMethod.id and paymentAmount to your backend for processing
        const response = await axios.post('http://localhost:5000/api/payments/process-payment', {
          paymentId: paymentMethod.id,
          amount: paymentAmount,
        });
        console.log(response.data); // Log the response from your backend
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      setPaymentError('An error occurred. Please try again.');
      setPaymentSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
        placeholder="Enter payment amount"
      />
      <CardElement />
      <button type="submit">Pay</button>
      {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
      {paymentSuccess && <p style={{ color: 'green' }}>Payment successful! Payment ID: {paymentSuccess}</p>}
    </form>
  );
};

export default StripePaymentForm;



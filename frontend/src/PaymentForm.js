import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css'; // Import CSS file for styles
import {loadStripe} from '@stripe/stripe-js'

const PaymentForm = ({ history }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Generate a random payment ID (you can use any method to generate a unique ID)
  //     const paymentId = Math.random().toString(36).substr(2, 9);

      

  //     setMessage(response.data.message);
  //     setPaymentStatus(response.data.payment.paymentStatus);

  //     // Redirect to StripePaymentForm.js after processing the payment
  //     history.push('/stripe-payment', { paymentId, paymentAmount });
  //   } catch (error) {
  //     setMessage('Payment failed. Please try again.');
  //   }
  // };

  // payment integration
  // const makePayment = async() =>{
  //   const stripe = await loadStripe("pk_test_51OxwfiSHo9QORuto9btV2wKOgNIK65CLOuspbU62EMLhmPIXSHkWTU1vamFipbwQfUaLH2j2XlYct4oNLSmQprre00dNz6driG")
  //   const body = {
  //     amount: paymentAmount
  //   }
  //   const headers = {
  //     "Content-Type":"application/json"
  //   }
  //   const response = await axios.post("http://localhost:7000/api/create-checkout-session",{
  //     method: "POST",
  //     headers:headers,
  //     body:JSON.stringify(body)
  //   });

  //  const session = await response.json();

  //  const result = stripe.redirectToCheckout({
  //   sessionId:session.id
  //  });

  //  if(result.error){
  //   console.log(result.error);
  //  }
  // }

//   const makePayment = async () => {
//     const body = {
//         amount: parseFloat(paymentAmount), // Convert to float if needed
//     };

//     try {
//         const response = await axios.post(
//             "http://localhost:7000/api/create-checkout-session",
//             body
//         );

//         const { id } = response.data;
//         // Redirect to Stripe Checkout
//         const stripe = await loadStripe(
//             "pk_test_your_stripe_publishable_key"
//         );
//         const { error } = await stripe.redirectToCheckout({ sessionId: id });

//         if (error) {
//             console.error("Error redirecting to Checkout:", error);
//             // Handle error
//         }
//     } catch (error) {
//         console.error("Error making payment:", error);
//         // Handle error
//     }
// };
const makePayment = async () => {
  // Convert paymentAmount to an array with a single element
  const amountArray = [parseFloat(paymentAmount)];

  const body = {
      amount: amountArray, // Send amount as an array to the backend
  };

  try {
      const response = await axios.post(
          "http://localhost:7000/api/create-checkout-session",
          body
      );

      const { id } = response.data;
      // Redirect to Stripe Checkout
      const stripe = await loadStripe(
          "pk_test_51OxwfiSHo9QORuto9btV2wKOgNIK65CLOuspbU62EMLhmPIXSHkWTU1vamFipbwQfUaLH2j2XlYct4oNLSmQprre00dNz6driG"
      );
      const { error } = await stripe.redirectToCheckout({ sessionId: id });

      if (error) {
          console.error("Error redirecting to Checkout:", error);
          // Handle error
      }
  } catch (error) {
      console.error("Error making payment:", error);
      // Handle error
  }
};

  return (
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form onSubmit={makePayment}>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          placeholder="Enter payment amount"
        />
        <button type="submit" >Proceed to Pay</button>
      </form>
      {message && <p className="message">{message}</p>}
      {paymentStatus && <p className="payment-status">Payment Status: {paymentStatus}</p>}
    </div>
  );
};

export default PaymentForm;

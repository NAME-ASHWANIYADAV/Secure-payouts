const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51OxwfiSHo9QORuto1Uo0bN4gZT0o3c0qgvEEFlJey5SWcPFRLDa2OAiheAQyylvSxqKsPw7FtO6htJ1A3ltlLINo00S6IF4yHL'); // Import Stripe library and initialize with your secret key

// POST /api/payments/process-payment - Process a payment
router.post('/process-payment', async (req, res) => {
  const { paymentId, amount } = req.body; // Extract paymentId and amount from request body

  try {
    // Create a PaymentIntent using Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert amount to cents (Stripe expects amount in cents)
      currency: 'usd', // Change to your desired currency
      payment_method: paymentId,
      confirm: true,
    });

    // Check paymentIntent status and update database accordingly
    if (paymentIntent.status === 'succeeded') {
      // Payment succeeded, update payment status in database or perform other actions
      res.status(200).json({ message: 'Payment processed successfully.', paymentIntent });
    } else {
      // Payment failed, handle accordingly
      res.status(400).json({ error: 'Payment processing failed.' });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;

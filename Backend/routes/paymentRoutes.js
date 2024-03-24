const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// POST /api/payments - Create a new payment
router.post('/', async (req, res) => {
  try {
    const { paymentId } = req.body;

    // Check if paymentId already exists
    const existingPayment = await Payment.findOne({ paymentId });
    if (existingPayment) {
      return res.status(400).json({ message: 'Payment with this ID already exists.' });
    }

    // Create a new payment
    const newPayment = new Payment({ paymentId });
    await newPayment.save();

    res.status(201).json({ message: 'Payment created successfully.', payment: newPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// PUT /api/payments/:id/status - Update payment status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    // Update payment status
    const updatedPayment = await Payment.findByIdAndUpdate(id, { paymentStatus }, { new: true });
    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment not found.' });
    }

    res.json({ message: 'Payment status updated successfully.', payment: updatedPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OxwfiSHo9QORuto1Uo0bN4gZT0o3c0qgvEEFlJey5SWcPFRLDa2OAiheAQyylvSxqKsPw7FtO6htJ1A3ltlLINo00S6IF4yHL"
);
const paymentRoutes = require("./routes/paymentRoutes"); // Import payment routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/payment_gateway", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Use payment routes
app.use("/api/payments", paymentRoutes);

// Stripe webhook endpoint
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        "whsec_8UKrWP7q25RR5s4662hZBJDM2J9RPaJ8"
      ); // Replace 'YOUR_WEBHOOK_SECRET' with your actual webhook secret
    } catch (err) {
      console.error("Webhook error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event based on its type
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent was successful:", paymentIntent);
        // Update payment status in your database based on paymentIntent.id
        break;
      case "payment_intent.payment_failed":
        const paymentFailedIntent = event.data.object;
        console.log("PaymentIntent failed:", paymentFailedIntent);
        // Handle payment failure, update status in your database, send notification, etc.
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

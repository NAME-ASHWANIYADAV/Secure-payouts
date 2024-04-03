const express = require("express");
const app = express();
const cors = require("cors");
const stripe =require("stripe")("sk_test_51OxwfiSHo9QORuto1Uo0bN4gZT0o3c0qgvEEFlJey5SWcPFRLDa2OAiheAQyylvSxqKsPw7FtO6htJ1A3ltlLINo00S6IF4yHL")

app.use(express.json());
app.use(cors());


//checkout api

app.post("/api/create-checkout-session", async (req, res) => {
    const { amountArray } = req.body;

    if (!Array.isArray(amountArray)) {
        return res.status(400).json({ error: "Amount should be an array." });
    }

    const line_items = amountArray.map((item) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: item,
            },
            unit_amount: item * 100, // Assuming item is the amount in INR
        },
        quantity: 1, // Assuming you want one unit of each item
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: line_items,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

     // Set a cookie with SameSite=None and Secure attributes
     res.cookie("session_id", session.id, {
        sameSite: "None",
        secure: true,
    });

    res.json({ id: session.id });
});


app.listen(7000,()=>{
    console.log("server start")
})
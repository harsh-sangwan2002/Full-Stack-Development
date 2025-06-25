const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.json({
        message: "All good"
    })
})

app.post('/api/make-payment', async (req, res) => {
    try {
        const { token, amount } = req.body;

        const paymentIntent = await stripe.charges.create({
            amount: amount, // Amount in cents
            currency: "usd",
            receipt_email: token.email,
            source: "tok_visa",
            description: "Testing Stripe Integration"
        });
        console.log(paymentIntent);

        res.send({
            success: true,
            message: "Payment Processing. You will receive a confirmation once the payment is complete.",
            transactionId: paymentIntent.id,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Cannot process payment: " + err.message,
        });
    }
})

app.post.get('/api/send-email', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            auth: {
                user: "apiKey",
                pass: ""
            }
        })

        // Define the email details
        const mailOptions = {
            from: "hsangwan2002@gmail.com",
            to: "hsangwan2002@gmail.com",
            subject: "Welcome to Scaler, buddy",
            html: "<h3>Welcome to Scaler</h3>",
            text: "Testing text"
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to send email"
        })
    }
})

app.use((req, res) => {
    res.status(404).json({
        error: "Page Not Found"
    })
})

app.listen(3000, () => {
    console.log('Backend server is running on port 3000');
});
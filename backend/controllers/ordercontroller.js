import ordermodel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Function to place an order from frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";  // Frontend URL for success/cancel redirect

    try {
        // Create a new order in the database
        const newOrder = new ordermodel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        // Save the order to the database
        await newOrder.save();

        // Reset the cart data for the user after placing an order
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Create line items for Stripe checkout session
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 // Stripe expects the price in cents
            },
            quantity: item.quantity
        }));

        // Add delivery charges as a line item
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 200 // Delivery charges in cents
            },
            quantity: 1
        });

        // Create a Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`, // URL for successful payment
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`  // URL for canceled payment
        });

        // Debugging: Log the session details to verify if it's being created correctly
        console.log('Stripe session created:', session); // Log the session object for debugging

        // Send back the session URL to the frontend for redirection
        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error); // Log the error for debugging
        res.json({ success: false, message: error.message }); // Send error message to frontend
    }
};

export { placeOrder };

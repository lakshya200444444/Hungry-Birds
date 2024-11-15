import ordermodel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5173";  // Frontend URL for success/cancel redirect

    try {
        
        const newOrder = new ordermodel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        
        await newOrder.save();

       
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        
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

       
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 200 
            },
            quantity: 1
        });

       
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`, 
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`  
        });

        console.log('Stripe session created:', session); 


        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error); 
        res.json({ success: false, message: error.message }); 
    }
};

export { placeOrder };

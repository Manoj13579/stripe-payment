import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const stripePayment = async(req,res)=>{
    const {products} = req.body;

//price by quantity automatically calculated by stripe
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            //shows these in stripe checkout
            product_data:{
                name:product.name,
                images:[product.image]
            },
            /* Stripe expects unit_amount to be an integer value in the smallest currency unit (e.g., cents for USD). When you multiply a floating-point number like 19.1 by 100, the result is 1910.0000000000002 due to JavaScript's floating-point arithmetic imprecision, which causes Stripe to throw an error because it expects an integer. so Math.round used */
            // convert from cents to dollars.
            unit_amount: Math.round(product.price * 100),
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({   
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:`${process.env.FRONTEND_URL}/success`,
        cancel_url:`${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({id:session.id})
console.log("session" ,session.id);
 
}
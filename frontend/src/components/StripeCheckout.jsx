import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import carts from "./carts.js";



const StripeCheckout = () => {

 
  const makePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

    const body = {
      products: carts,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/create-checkout-session`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      toast.error(result.error.message);
      console.log(result.error);
    }
  };

  return (
    <section>
     {
      carts.map((cart) => (
          <div key={cart.id} style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
            <img src={cart.image} alt={cart.name} style={{ width: "20%" }} />
            <p>{cart.name}</p>
            <p>quantity: {cart.quantity}</p>
            <p>price: ${cart.price}</p>
          </div>
      ))
     }
      <button onClick={makePayment} style={{margin: "1rem", cursor: "pointer"}}>
        Checkout
      </button>
    </section>
  );
};

export default StripeCheckout;

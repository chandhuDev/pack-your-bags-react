import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckOutForm";
import "./Strapi.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe('pk_test_51MVZhjSI2utUDiQBNLDEcihkiqvlCMFUV33v1wElwPWw12458FeO4Hvs1DnTAp0TuVzGGOdA4JhQdWMcDKDZdDsC00XfGcZWPz');

export default function Strapi({location}) {
  const id=location&&location.state.id
  const seats=location&&location.state.seats
  const [clientSecret, setClientSecret] = useState("");
  console.log("clientsecret",clientSecret)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3010/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: { id,
    seats } }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm id={id} seats={seats}/>
        </Elements>
      )}
    </div>
  );
}
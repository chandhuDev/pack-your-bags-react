import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from 'react-router-dom';
import {CheckOutForm} from "./index"
import "../css/Strapi.css";



const stripePromise = loadStripe('pk_test_51MVZhjSI2utUDiQBNLDEcihkiqvlCMFUV33v1wElwPWw12458FeO4Hvs1DnTAp0TuVzGGOdA4JhQdWMcDKDZdDsC00XfGcZWPz');

export default function Strapi() {
  const location = useLocation();
  const id=location.state&&location.state.id
  const seats=location.state&&location.state.seats
  const totalSeats=location.state&&location.state.totalSeats
  const [clientSecret, setClientSecret] = useState("");
 // console.log("id and seats",id,seats)
 

  useEffect(() => {
    fetch("http://localhost:3010/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  
        items: { 
          id,
          seats 
         } 
        }),
    }).then((res) =>res.json()).then((data) => {
       // console.log(data)
        setClientSecret(data.clientSecret)});
  }, []);


 // console.log(clientSecret)

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
          <CheckOutForm id={id} seats={seats} totalSeats={totalSeats}/>
        </Elements>
      )}
    </div>
  );
}
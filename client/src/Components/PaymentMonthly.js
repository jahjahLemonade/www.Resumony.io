// This page will be used to process payments using the stripe api.

import { useState, useCallback } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe("pk_test_51PPTq1P7QEN5uEyKRMmEfbhmziSz1VjQ4DhLz19Ck7fMGEb4MRZU30o6VTdvjab7WlehGegy8urZfnN7H3IqjvjC00OXqpbZvb");

const Payment = () => {

    const fetchClientSecret = useCallback(() => {
        //axios call to create a checkout session
        return axios.post('http://localhost:3001/create-checkout-session-monthly')
            .then((res) => res.data.clientSecret);
    }, []);

    const options = { fetchClientSecret };

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default Payment;
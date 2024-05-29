import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const CheckoutForm = () => {
    // const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()
    const toTalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(toTalPrice);
    useEffect(() => {
        if (toTalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: toTalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, toTalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        // create payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment method error', error);
            // setError(error.message)
            if (error) {
                toast.error(error.message)
            }
        }
        else {
            console.log('payment method', paymentMethod);
            // setError('')

        }






    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary my-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
                {/* <p className="text-red-400">{error}</p> */}

            </form>

        </div>
    );
};

export default CheckoutForm;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm';




const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);
    return (

        <div>

            <Elements stripe={stripePromise}>

                <CheckoutForm></CheckoutForm>

            </Elements>

        </div>

    );
};

export default Payment;
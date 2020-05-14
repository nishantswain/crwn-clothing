import React from 'react'
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey='pk_test_BtcZal4Jo2kQJqSrzGtcfGZx006O7bi4Rm';

   const onToken = token =>{

        alert('Payment Sucessful',token);
    }
return(
    <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panellabel = 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
)

}


export default StripeCheckoutButton;
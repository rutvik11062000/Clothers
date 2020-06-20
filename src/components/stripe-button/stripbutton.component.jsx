import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export const StripeButton = ({price}) => {

    const ontoken = token => {
        console.log(token)
        alert("Payment Successful");
    }


    const stirpePrice = price*100;
    return (
        <StripeCheckout
        label="Pay Now!"
        name='Clothers LTD.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`your total is $${price}`}
        amount={stirpePrice}
        panelLabel='Pay Now'
        token={ontoken}
        />
    )
}

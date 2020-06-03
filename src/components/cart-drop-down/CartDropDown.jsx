import './CartDropDownStyles.scss'
import CustomButton from '../custombutton/CustomButton'
import React from 'react'

const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <CustomButton>Go Check Out</CustomButton>
        </div>
    )
}

export default CartDropDown;

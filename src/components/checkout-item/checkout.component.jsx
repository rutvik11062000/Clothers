import "./checkout.styles.scss";

import React from "react";
import {
  removeItem,
  addItem,
  decreaseItemByOne,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/cart.utils";
import { StripeButton } from "../stripe-button/stripbutton.component";

const CheckoutItem = ({ cartItem, clearItem, addItem, deleteItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => deleteItemFromCart(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItem(item)),
  deleteItemFromCart: (item) => dispatch(decreaseItemByOne(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

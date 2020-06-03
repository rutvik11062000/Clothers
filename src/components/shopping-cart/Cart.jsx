import { ReactComponent as ShoppingIcon } from "../../assets/logo/ShoppingIcon.svg";
import { connect } from "react-redux";
import  {toggleCarthidden}  from "../../redux/cart/cart.actions";
import React from "react";
import "./CartStyles.scss";

const Cart = ({ toggleCarthidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCarthidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count"> 0 </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCarthidden: () => dispatch(toggleCarthidden()),
});

export default connect(null, mapDispatchToProps)(Cart);

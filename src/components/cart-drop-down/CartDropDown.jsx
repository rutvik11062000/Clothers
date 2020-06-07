import "./CartDropDownStyles.scss";
import CustomButton from "../custombutton/CustomButton";
import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-items/cartItem.component";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCarthidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">No Items In cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("checkout");
          dispatch(toggleCarthidden());
        }}
      >
        Go Check Out
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

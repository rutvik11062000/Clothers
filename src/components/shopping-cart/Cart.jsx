import { ReactComponent as ShoppingIcon } from "../../assets/logo/ShoppingIcon.svg";
import { connect } from "react-redux";
import { toggleCarthidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import React from "react";
import "./CartStyles.scss";

import {createStructuredSelector} from "reselect";

const Cart = ({ toggleCarthidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCarthidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCarthidden: () => dispatch(toggleCarthidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

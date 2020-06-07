import React from "react";
import "./HeaderStyle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import Cart from "../../components/shopping-cart/Cart";
import CartDropDown from "../cart-drop-down/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin" isGoogleSignIn>
            SIGN IN
          </Link>
        )}
        <Cart></Cart>
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProp)(Header);

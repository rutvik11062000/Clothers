import React from "react";
import "./HeaderStyle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { auth } from "../../firebase/firebase.utils";



export const Header = ({currentUser}) => {
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
        {currentUser ? 
        <div className="option" onClick={() => auth.signOut()} > SIGN OUT</div>:
        <Link className="option" to='/signin' isGoogleSignIn>SIGN IN</Link>
      }
      </div>
    </div>
  );
};

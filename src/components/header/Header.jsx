import React from "react";
import "./HeaderStyle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";

export const Header = () => {
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
      </div>
    </div>
  );
};

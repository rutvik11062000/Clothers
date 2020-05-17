import React from "react";
import SignIn from "../signin/SignIn";
import SignUp from "../../signup/SignUp";
import './sign-in-sign-up.Styles.scss'

export const SignSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

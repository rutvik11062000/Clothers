import React, { Component } from "react";
import { FormInput } from "../formInput/FormInput";
import "./SignInStyles.scss";
import { CustomButton } from "../custombutton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an Account</h2>
        <span>Sign in with Email And Password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id=""
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            id=""
            value={this.state.password}
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

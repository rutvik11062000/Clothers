import React, { Component } from "react";
import { FormInput } from "../formInput/FormInput";
import "./SignInStyles.scss";
import CustomButton  from "../custombutton/CustomButton";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
            <CustomButton type="submit" value="Submit Form" onClick={this.handleSubmit}>
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

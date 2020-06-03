// import "./SignUpStyles.scss";
import './SignUpStyles.scss';

import React, { Component } from "react";
import { FormInput } from "../components/formInput/FormInput";
// import { CustomButton } from "../custombutton/CustomButton";
import CustomButton from'../components/custombutton/CustomButton';
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayname, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayname });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password </span>
        
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />



          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
          
        </form>
      </div>
    );
  }
}

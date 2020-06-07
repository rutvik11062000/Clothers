import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import  CheckoutPage from "./pages/checkout/checkoutPage.component";
import ShopPage from "./pages/homepage/shop/Shop";

import "./App.css";
// import { Header } from "./components/header/Header";
import { SignSignUpPage } from "./components/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Header from "./components/header/Header";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          // console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Header></Header> */}
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignSignUpPage />
            }
          />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProp = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProp)(App);

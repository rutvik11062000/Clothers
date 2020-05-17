import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/homepage/shop/Shop";

import "./App.css";
import { Header } from "./components/header/Header";
import { SignSignUpPage } from "./components/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }); 

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={SignSignUpPage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

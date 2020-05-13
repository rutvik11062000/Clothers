import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/homepage/shop/Shop";

import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

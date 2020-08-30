import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage/index";
import Cart from "../components/Cart/cart";
import Order from "../components/Orders/orders";

const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
            <HomePage  />
        )}
      />
      <Route
        path="/cart"
        render={() => (
           <Cart/>
        )}
      />
       <Route
        path="/order"
        render={() => (
           <Order/>
        )}
      />
    </Switch>
  </div>
);

export default Routes;

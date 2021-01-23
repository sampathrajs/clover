import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";

import { Provider } from "react-redux";
import Customer from "../customer";
import AddCustomer from "../customer/add";
type Props = {
  store: any;
};
export const AppRouter: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store as any}>
      <Router>
        <Fragment>
          <App>
            <Switch>
              <Route exact path="/" component={Customer} />
              <Route exact path="/add" component={AddCustomer} />
              <Route exact path="/edit/:id" component={AddCustomer} />
            </Switch>
          </App>
        </Fragment>
      </Router>
    </Provider>
  );
};

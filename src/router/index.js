import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";

import { Provider } from "react-redux";
import Customer from "../customer";
import AddCustomer from "../customer/add";
import PropTypes from "prop-types";

export const AppRouter = ({ store }) => {
  return (
    <Provider store={store}>
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
AppRouter.propTypes = {
  store: PropTypes.object,
};

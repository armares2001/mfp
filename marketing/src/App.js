import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default ({ history }) => {
  return (
    <Fragment>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </Fragment>
  );
};

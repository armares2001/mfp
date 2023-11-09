import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

export default ({ history, onSignIn }) => {
  return (
    <Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              path="/auth/signin"
              children={<SignIn onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              children={<SignUp onSignIn={onSignIn} />}
            />
          </Switch>
        </Router>
      </StylesProvider>
    </Fragment>
  );
};

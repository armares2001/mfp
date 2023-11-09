import React, { lazy } from "react";
import Header from "./components/Header";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import { createGenerateClassName } from "@material-ui/core";
import { Suspense } from "react";
import { Progress } from "./components/Progress";
import { useState } from "react";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));
const DashboardApp = lazy(() => import("./components/DashboardApp"));
import { createBrowserHistory } from "history";
import { useEffect } from "react";

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route
              path="/auth"
              children={<AuthApp onSignIn={() => setIsSignedIn(true)} />}
            />
            <Route
              path="/dashboard"
              children={
                (!isSignedIn && <Redirect to="/" />) || <DashboardApp />
              }
            />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
        {/*<App/>*/}
      </StylesProvider>
    </Router>
  );
};

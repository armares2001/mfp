import React, { lazy } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import { createGenerateClassName } from "@material-ui/core";
import { Suspense } from "react";
import { Progress } from "./components/Progress";
import { useState } from "react";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
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

            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
        {/*<App/>*/}
      </StylesProvider>
    </BrowserRouter>
  );
};

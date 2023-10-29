import React, { Fragment } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

import MarketingApp from "./components/MarketingApp";

// import { mount as marketingMount } from "marketing/App";
// import App from "marketing/jsx";
import { StylesProvider } from "@material-ui/core";
import { createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />

        <MarketingApp />

        {/*<App/>*/}
      </StylesProvider>
    </BrowserRouter>
  );
};

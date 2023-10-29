import React, { Fragment } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

import MarketingApp from "./components/MarketingApp";

// import { mount as marketingMount } from "marketing/App";
// import App from "marketing/jsx";

export default () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />

        <MarketingApp />

        {/*<App/>*/}
      </Fragment>
    </BrowserRouter>
  );
};

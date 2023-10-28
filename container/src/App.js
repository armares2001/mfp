import React, { Fragment } from "react";
import MarketingApp from "./components/MarketingApp";
// import Header from "./components/Header";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
// import { mount as marketingMount } from "marketing/App";
// import App from "marketing/jsx";

export default () => {
  return (
    <Fragment>
      <Header />
      <p>Hi!</p>
      <hr />
      <MarketingApp />
      {/*<App/>*/}
    </Fragment>
  );
};

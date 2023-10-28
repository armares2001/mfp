import React, { Fragment } from "react";
// import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import { Link as RouterLink } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
// import { mount as marketingMount } from "marketing/App";
// import App from "marketing/jsx";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <RouterLink to="/">ciAo</RouterLink>
        <p>Hi!</p>
        <hr />
        {/* <MarketingApp /> */}
        {/*<App/>*/}
      </div>
    </BrowserRouter>
  );
};

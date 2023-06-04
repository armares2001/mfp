import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount=(el)=>{
    if (!el) return;
    ReactDOM.render(
        <App/>,
        el
    );
};



if (process.env.NODE_ENV==="development") mount(document.querySelector("#_feed-dev-root"));

export { mount };
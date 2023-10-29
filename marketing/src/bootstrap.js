import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

const mount = (el) => {
  if (!el) return;
  const history = createMemoryHistory();
  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development")
  mount(document.querySelector("#_feed-dev-root"));

export { mount };

import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate = () => console.log("no navigate") }) => {
  if (!el) return;
  const history = createMemoryHistory();
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development")
  mount(document.querySelector("#_feed-dev-root"), {});

export { mount };

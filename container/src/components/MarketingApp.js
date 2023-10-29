import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/App";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("marketing", history);
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }

        console.log(nextPathname);
      },
    });
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;

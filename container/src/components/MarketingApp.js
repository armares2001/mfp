import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/App";

const MarketingApp = ({ history }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
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

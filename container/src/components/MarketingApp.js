import React, { Fragment } from "react";
import { useEffect, useRef } from "react";
import { mount } from "marketing/App";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => {
        console.log("navigate");
      },
    });
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;

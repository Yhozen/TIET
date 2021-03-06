import React, { useEffect } from "react";
import Vivus from "vivus";

export default ({ height = "350px", duration = 200 }) => {
  useEffect(() => {
    new Vivus("logo", { duration });
  }, []);
  return (
    <>
      <svg id="logo" height={height} viewBox="0 0 238.1 238.1">
        <path d="M119.4 13.1c-50.7 0-93.3 34.4-105.1 80.7C24 88.7 34 83.9 34 83.9s29.5-11.6 43.3-11.4c0-5.9 9.9-21.9 22.9-14.6 11.3 6.4 10 23.7 10 23.7s22.8 9.8 28.4 12.7c12.8 7.2 11.4 17.9 11.4 17.9s24.2 12.9 32.5 15.2c15.5 4.4 2.6 17.6 2.6 17.6s.4 6.1 0 7c-.1 1-1.7 6.9-3.2 8-1 1-8.1 8-17.7 5.6-9.6-2.5-31.7 1.2-31.7 1.2-13.7 11-23.3 7.4-21.5 11.3s0 13.4 0 13.4-4.6 21.2 6.2 35c.7 0 1.5.1 2.2.1 59.8 0 108.4-47.8 108.4-106.8S179.3 13.1 119.4 13.1z" />
      </svg>
      <style jsx>{`
        path {
          stroke: #ffe;
          stroke-opacity: 1;
          fill-opacity: 0;
          fill: #fff;
          opacity: 1;
          stroke-width: 5;
          stroke-miterlimit: 4;
        }
        svg {
          filter: drop-shadow(1px 2px 0 #666);
        }
      `}</style>
    </>
  );
};

import React from "react";

export default ({ children, color = "#ffe" }) => (
  <>
    <h1>
      <span>{children}</span>
    </h1>

    <style jsx>{`
      h1 {
        font: 2em/1 Impact, sans-serif;
        text-align: center;
        margin-top: 4em;
        -webkit-transform: rotate(-10deg) skew(-10deg, 0);
        -moz-transform: rotate(-10deg) skew(-10deg, 0);
        -ms-transform: rotate(-10deg) skew(-10deg, 0);
        -o-transform: rotate(-10deg) skew(-10deg, 0);
        transform: rotate(-10deg) skew(-10deg, 0);
      }
      span {
        color: ${color};
        padding: 1em;
        text-shadow: 1px 2px 0 #666, 2px 3px 0 #888;
        text-transform: uppercase;
      }
    `}</style>
  </>
);

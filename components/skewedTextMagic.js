import React from "react";

export default React.forwardRef(({ children, color = "#ffe" }, ref) => (
  <>
    <h1 ref={ref}>
      <span>{children}</span>
    </h1>

    <style jsx>{`
      h1 {
        font: 2em/1 Avenir Next, Impact, "Raleway", sans-serif;
        font-weight: 900;
        text-align: center;
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
));

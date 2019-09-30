import React from "react";

export default ({ color = "white" }) => (
  <>
    <div />
    <style jsx>{`
      div {
        position: absolute;
        bottom: 0;
        left: 0;
        border-width: 100px 0 0 100vw;
        border-color: transparent transparent transparent ${color};
        border-style: solid;
      }
    `}</style>
  </>
);

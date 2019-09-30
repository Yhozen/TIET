import React from "react";

export default ({ color = "white" }) => (
  <>
    <div />
    <style jsx>{`
      div {
        position: absolute;
        left: 0;
        border-color: transparent ${color} transparent transparent;
        border-style: solid;
        bottom: 0;
        border-width: 100px 100vw 0 0;
      }
    `}</style>
  </>
);

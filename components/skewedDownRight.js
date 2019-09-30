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
        top: 0;
        border-width: 0 100vw 100px 0;
      }
    `}</style>
  </>
);

import React from "react";

export default ({ color = "transparent", children }) => (
  <>
    <section>{children}</section>
    <style jsx>{`
      section {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: ${color};
      }
    `}</style>
  </>
);

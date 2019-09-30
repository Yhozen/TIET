import React from "react";
import Color from "color";

export default ({
  backgroundColor = "#ff9800",
  color = "white",
  children,
  onClick
}) => {
  const hoverColor = Color(backgroundColor)
    .lighten(0.15)
    .hex();
  const activeColor = Color(backgroundColor)
    .lighten(0.4)
    .hex();
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          background-position: center;
          transition: background 0.8s;
        }
        button:hover {
          background: ${hoverColor}
            radial-gradient(circle, transparent 1%, ${hoverColor} 1%)
            center/15000%;
        }
        button:active {
          background-color: ${activeColor};
          background-size: 100%;
          transition: background 0s;
        }

        /* Button style */
        button {
          border: none;
          border-radius: 2px;
          padding: 12px 18px;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          color: ${color};
          background-color: ${backgroundColor};
          outline: none;
        }
      `}</style>
    </>
  );
};

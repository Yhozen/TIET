import React from "react";
import Color from "color";

export default ({
  backgroundColor = "#ff9800",
  color = "white",
  children,
  inside,
  onClick
}) => {
  const hoverColor = Color(backgroundColor)
    .lighten(0.15)
    .hex();
  const hoverBG = `${hoverColor} radial-gradient(circle, transparent 1%, ${hoverColor} 1%)`;
  const activeColor = Color(backgroundColor)
    .lighten(0.4)
    .hex();
  return (
    <>
      <button className={inside ? "inside" : ""} onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        button {
          background-position: center;
          transition: background 0.8s;
          display: inline-block;
        }
        button:hover {
          background: ${hoverBG} center/15000%;
        }
        button:active {
          background-color: ${activeColor};
          background-size: 100%;
          transition: background 0s;
        }
        .inside {
          margin-left: -48px;
        }

        /* Button style */
        button {
          border: none;
          border-radius: 2px;
          padding: 12px 24px;
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

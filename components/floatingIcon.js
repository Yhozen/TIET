import React, { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default ({ color = "white" }) => {
  const [divClassName, setDivClassName] = useState("");
  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < -100;
    setDivClassName("none");
  });
  const onPress = () => window.scrollTo(0, 110);
  return (
    <>
      <div className={divClassName}>
        <svg viewBox="0 0 24 24">
          <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12 		" />
          <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12 		" />
        </svg>
      </div>
      <style jsx>{`
        div {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .none {
          display: none;
        }
        svg {
          transform: rotate(90deg);
        }
        polygon {
          fill: ${color};
          stroke: rgba(10, 10, 10, 0.7);
          stroke-width: 0.2;

          -webkit-animation: pulse 1s ease infinite;
          animation: pulse 1s ease infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            transform-origin: center center;
            -webkit-transform: scale(0.95);
          }

          70% {
            transform: scale(1.05);
            transform-origin: center center;
            -webkit-transform: scale(1.05);
          }

          100% {
            transform: scale(0.95);
            transform-origin: center center;
            -webkit-transform: scale(0.95);
          }
        }
        @-webkit-keyframes pulse {
          0% {
            transform: scale(0.95);
            -webkit-transform: scale(0.95);
          }

          70% {
            transform: scale(1.05);
            -webkit-transform: scale(1.05);
          }

          100% {
            transform: scale(0.95);
            -webkit-transform: scale(0.95);
          }
        }
      `}</style>
    </>
  );
};

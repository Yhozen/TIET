import React from "react";
import Color from "color";

import Button from "./button";

export default ({
  backgroundColor = "#ff9800",
  color = "white",
  placeholder = "Your first name, e.g. Nicholas",
  label = "First name",
  onClick = e => e.preventDefault()
}) => (
  <>
    <form>
      <input type="email" placeholder="Your E-Mail Address" />
      <Button backgroundColor="#7f8ff4" inside onClick={onClick}>
        Send
      </Button>
    </form>

    <style jsx>{`
      form {
        max-width: 360px;
        width: 90%;
      }
      input {
        width: calc(100% - 90px);
        background: #fff;
        border-radius: 1px;
        color: #a3a3a3;
        font-size: 1em;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
        border: 0;
        outline: 0;
        padding: 22px 18px;
      }
      input:focus {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </>
);

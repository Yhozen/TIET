import React, { useEffect } from "react";
import Vivus from "vivus";

import Logo from "../images/logo.svg";

export default ({ height = "350px", duration = 200 }) => {
  useEffect(() => {
    new Vivus("logo", { duration });
  }, []);
  return <Logo id="logo" height={height} />;
};

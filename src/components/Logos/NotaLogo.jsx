import React from "react";

import "../../styles/variables.css";

import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";

const NotaLogo = ({ colorIndex = 0, width = "100px", height = "100px" }) => {
  const colorVars = ["var(--color-orange)", "var(--color-purple)", "var(--color-yellow)", "var(--color-pink)"];

  return <Logo style={{
    color: colorVars[colorIndex], width: width,
    height: height
  }} />;
}

// const NotaLogo = ({ colorIndex = 0 }) => {
//   const colorVars = ["var(--color-orange)", "var(--color-purple)", "var(--color-yellow)", "var(--color-pink)"];
//   return <Logo style={{ color: colorVars[colorIndex] }} />;
// };

export default NotaLogo;

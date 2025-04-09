import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import "../../styles/variables.css";

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

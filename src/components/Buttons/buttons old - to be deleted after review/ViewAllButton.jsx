import React from 'react';
import "../styles/variables.css";

function ViewAllButton() {

  const handleClick = () => {};

  return (
    <button
      style={{
        width: "79px",
        height: "27px",
        color: "#FFFFFF",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        fontSize: "var(--font-size-16)",
        fontWeight: "--font-weight-semibold",
        fontFamily: "var(--font-family-primary)",
      }}
      onClick={handleClick}
    >
        View all
    </button>
  );
}

export default ViewAllButton;
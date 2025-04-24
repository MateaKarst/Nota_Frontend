import React from 'react';

import "../../styles/variables.css";

function YellowTxtBtn({ text }) {
  const handleClick = () => { };

  return (
    <button
      style={{
        width: "153px",
        height: "28px",
        backgroundColor: "transparent",
        color: "var(--color-yellow)",
        borderRadius: "var(--border-radius-20)",
        borderColor: "var(--color-yellow)",
        fontSize: "var(--font-size-16)",
        fontFamily: "var(--font-family-primary)",
      }}
      onClick={handleClick}  /*makes it clickable */
    >
      {text}
    </button>
  );
}

export default YellowTxtBtn;

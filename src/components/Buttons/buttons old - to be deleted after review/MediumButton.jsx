
import React from 'react';
import "../styles/variables.css";

function MediumButton({ text }) {

  const handleClick = () => {};

    return (
      <button
        style={{
          width: "140px",
          height: "28px",
          backgroundColor: "var(--color-yellow)",
          color: "var(--color-black)",
          borderRadius: "var(--border-radius-20)",
          border: "none",
          fontSize: "var(--font-size-16)",
          fontFamily: "var(--font-family-primary)",
        }}
        onClick={handleClick}  /*makes it clickable */
      >
        {text}
      </button>
    );
  }
  
  export default MediumButton;
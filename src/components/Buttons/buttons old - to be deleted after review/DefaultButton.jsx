
import React from 'react';
import "../styles/variables.css";

function DefaultButton({ text }) {

  const handleClick = () => {};

    return (
      <button
        style={{
          width: "302px",
          height: "44px",
          backgroundColor: "var(--color-yellow)",
          color: "var(--color-black)",
          borderRadius: "var(--border-radius-20)",
          border: "none",
          fontSize: "var(--font-size-22)",
          fontFamily: "var(--font-family-primary)",
        }}
        onClick={handleClick}  /*makes it clickable */
      >
        {text}
      </button>
    );
  }
  
  export default DefaultButton;
  

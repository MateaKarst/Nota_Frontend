
import React from 'react';
import "../styles/variables.css";

function MainButton({ text }) {

  const handleClick = () => {};

    return (
      <button
        style={{
          width: "302px",
          height: "40px",
          backgroundColor: "var(--color-purple)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius-20)",
          border: "none",
          fontSize: "var(--font-size-24)",
          fontFamily: "var(--font-family-primary)",
        }}
        onClick={handleClick}  /*makes it clickable */
      >
        {text}
      </button>
    );
  }
  
  export default MainButton;

import React from 'react';
import { ReactComponent as ClipIcon } from '../icons/clip.svg'; // Imports SVG file as React component
import "../styles/variables.css";

function Small2StrokeButton({ text }) {

  const handleClick = () => {};

  return (
    <button
      style={{
        width: "103px",
        height: "28px",
        color: "var(--color-yellow)",
        backgroundColor: "var(--color-white)",
        borderRadius: "var(--border-radius-20)",
        borderColor: "var(--color-yellow)",
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--font-size-18)",
        fontFamily: "var(--font-family-primary)",
      }}
      onClick={handleClick}
    >
      <ClipIcon style={{ width: "13px", height: "17px" }} /> {/*using imported SVG as an icon */}
      {text}
    </button>
  );
}

export default Small2StrokeButton;
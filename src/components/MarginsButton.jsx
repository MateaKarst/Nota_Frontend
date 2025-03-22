import React from 'react';
import { ReactComponent as ClipIcon } from '../icons/clip.svg'; // Imports SVG file as React component

function MarginsButton({ text }) {

  const handleClick = () => {};

  return (
    <button
      style={{
        width: "103px",
        height: "28px",
        backgroundColor: "#F9E400",
        color: "#343331",
        borderRadius: "20px",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
      }}
      onClick={handleClick}
    >
      <ClipIcon style={{ width: "13px", height: "17px" }} /> {/*using imported SVG as an icon */}
      {text}
    </button>
  );
}

export default MarginsButton;

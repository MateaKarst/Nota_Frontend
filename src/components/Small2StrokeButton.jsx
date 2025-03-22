import React from 'react';
import { ReactComponent as ClipIcon } from '../icons/clip.svg'; // Imports SVG file as React component

function Small2StrokeButton({ text }) {

  const handleClick = () => {};

  return (
    <button
      style={{
        width: "103px",
        height: "28px",
        color: "#F9E400",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        borderColor: "#F9E400",
        borderStyle: "solid",
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

export default Small2StrokeButton;
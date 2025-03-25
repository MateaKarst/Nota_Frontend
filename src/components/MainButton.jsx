
import React from 'react';


function MainButton({ text }) {

  const handleClick = () => {};

    return (
      <button
        style={{
          width: "302px",
          height: "40px",
          backgroundColor: "#7C00FE",
          color: "#FFFFFF",
          borderRadius: "20px",
          border: "none",
          fontSize:"24px",
        }}
        onClick={handleClick}  /*makes it clickable */
      >
        {text}
      </button>
    );
  }
  
  export default MainButton;
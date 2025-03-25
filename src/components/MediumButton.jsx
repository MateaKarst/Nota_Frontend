
import React from 'react';


function MediumButton({ text }) {

  const handleClick = () => {};

    return (
      <button
        style={{
          width: "140px",
          height: "28px",
          backgroundColor: "#F9E400",
          color: "#343331",
          borderRadius: "20px",
          border: "none",
          fontSize: "16px",
        }}
        onClick={handleClick}  /*makes it clickable */
      >
        {text}
      </button>
    );
  }
  
  export default MediumButton;
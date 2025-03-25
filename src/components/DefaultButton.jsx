
import React from 'react';


function DefaultButton({ text }) {

  const handleClick = () => {};

    return (
      <button
        style={{
          width: "302px",
          height: "44px",
          backgroundColor: "#F9E400",
          color: "#343331",
          borderRadius: "20px",
          border: "none",
          fontSize: "22px",
        }}
        onClick={handleClick}  /*makes it clickable */
      >
        {text}
      </button>
    );
  }
  
  export default DefaultButton;
  

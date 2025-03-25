import React from 'react';
import { ReactComponent as SparkleIcon } from '../icons/sparkle.svg';

function ProButton() {

  const handleClick = () => {};

  return (
    <div style={{ position: "relative", display: "inline-block"}}> {/* Positioning container */}
      
      {/* button */}
      <button
        style={{
          width: "73px",
          height: "28px",
          background: "linear-gradient(0deg, #F5004F, #7C00FE)",
          color: "#FFFFFF",
          borderRadius: "20px",
          border: "none",
          fontSize: "18px",
          position: "relative",
        }}
        onClick={handleClick} 
      >
        Log In
      </button>

      {/* Pro label  */}
      <div
        style={{
          position: "absolute",
          top: "-8px", 
          right: "0px", 
          width: "40px",
          height: "12px",
          backgroundColor: "#7C00FE",
          color: "#FFFFFF", 
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
        }}
      >
         <SparkleIcon style={{ width: "6px", height: "8px" }} /> 
        Pro
      </div>

    </div>
  );
}

export default ProButton;

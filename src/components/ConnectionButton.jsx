import React, { useState } from 'react';

// Add your logo import here
import { ReactComponent as LogoIcon } from '../icons/yellowlogo.svg';

function ConnectionButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [isConnected, setIsConnected] = useState(false); // State to track if it's connected

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsConnected(true);
      setIsClicked(false);  // After shrinking, return to default state
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: isClicked ? "50px" : "140px",
        height: "28px",
        backgroundColor: isConnected ? "rgba(249, 228, 0, 0.55)" : (isClicked ? "transparent" : "#F9E400"), 
        color: isConnected ? "#FFFFFF" : (isClicked ? "#F9E400" : "#343331"), // Change text color to white when connected
        borderRadius: "20px",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "width 1s ease, background-color 1s ease",
        position: "relative",
      }}
    >
      {/* Show only logo when button shrinks */}
      {isClicked ? (
        <LogoIcon style={{ width: "28px", height: "28px" }} />
      ) : (
        isConnected ? "Connected" : "Connect" 
      )}
    </button>
  );
}

export default ConnectionButton;


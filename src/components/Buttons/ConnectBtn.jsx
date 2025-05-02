import React, { useState } from 'react';

import "../../styles/variables.css";

import { ReactComponent as LogoIcon } from '../../assets/logo/pinklogo.svg';

function ConnectBtn() {
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
        backgroundColor: isConnected ? "rgba(249, 228, 0, 0.55)" : (isClicked ? "transparent" : "var(--color-yellow)"),
        color: isConnected ? "var(--color-white)" : (isClicked ? "var(--color-yellow)" : "var(--color-black)"), // Change text color to white when connected
        borderRadius: "var(--border-radius-20)",
        border: "var(--border-radius-20)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "width 1s ease, background-color 1s ease",
        position: "relative",
        fontFamily: "var(--font-family-primary)",
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

export default ConnectBtn;

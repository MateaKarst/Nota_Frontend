import React from 'react';

function ViewAllButton() {

  const handleClick = () => {};

  return (
    <button
      style={{
        width: "79px",
        height: "27px",
        color: "#FFFFFF",
        backgroundColor: "transparent",
        border: "none",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        fontSize: "16px",
      }}
      onClick={handleClick}
    >
        View all
    </button>
  );
}

export default ViewAllButton;
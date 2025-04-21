import React, { useState }  from 'react';

import "../../styles/variables.css";

function PurpleTag({ text }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggles state between true and false
  };

  return (
    <button
      style={{
        width: "106px",
        height: "23px",
        backgroundColor: clicked ? "transparent" : "var(--color-purple)",
        color: clicked ? "var(--color-purple)" : "var(--color-white)",
        borderRadius: "var(--border-radius-20)",
        borderColor: "var(--color-purple)",
        fontSize: "var(--font-size-13)",
        fontFamily: "var(--font-family-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: "1px", // Ensures the border is visible
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default PurpleTag;

import React from 'react';

import "../../styles/variables.css";

import { ReactComponent as SparkleIcon } from '../../icons/sparkle.svg';

function ProBtn({ text }) {
  const handleClick = () => { };

  return (
    <div style={{ position: "relative", display: "inline-block" }}> {/* Positioning container */}

      {/* button */}
      <button
        style={{
          width: 'fit-content',
          height: "28px",
          background: "linear-gradient(0deg, #F5004F, #7C00FE)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius-20)",
          border: "none",
          fontSize: "var(--font-size-18)",
          position: "relative",
          fontFamily: "var(--font-family-primary)",
          padding: "var(--Spacing-xxs, 4px) var(--Spacing-sm, 12px)",
          bottom: "2px"
        }}
        onClick={handleClick}
      >
        {text}
      </button>

      {/* Pro label  */}
      <div
        style={{
          position: "absolute",
          top: "-6px",
          right: "0px",
          width: "40px",
          height: "12px",
          backgroundColor: "var(--color-purple)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius-20)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "var(--font-size-10)",
          fontFamily: "var(--font-family-secondary)",
        }}
      >
        <SparkleIcon style={{ width: "6px", height: "8px" }} />
        Pro
      </div>

    </div>
  );
}

export default ProBtn;

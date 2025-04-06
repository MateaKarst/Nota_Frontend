import React from 'react';
import { ReactComponent as SparkleIcon } from '../../icons/sparkle.svg';
import "../../styles/variables.css";

function ProBtn() {
  const handleClick = () => { };

  return (
    <div style={{ position: "relative", display: "inline-block" }}> {/* Positioning container */}

      {/* button */}
      <button
        style={{
          width: "73px",
          height: "28px",
          background: "linear-gradient(0deg, #F5004F, #7C00FE)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius-20)",
          border: "none",
          fontSize: "var(--font-size-18)",
          position: "relative",
          fontFamily: "var(--font-family-primary)",
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
          backgroundColor: "var(--color-purple)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius-20)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "var(--font-size-10)",
          fontFamily: "var(--font-family-primary)",
        }}
      >
        <SparkleIcon style={{ width: "6px", height: "8px" }} />
        Pro
      </div>

    </div>
  );
}

export default ProBtn;

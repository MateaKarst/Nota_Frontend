import React from "react";
import "../styles/variables.css";

const MusicTag = ({ text, colorIndex = 0 }) => {
  // Define color variables for background, text, and outline colors
  const textColors = [
    "var(--color-white)",
    "var(--color-white)",
    "var(--color-white)",
    "var(--color-white)",
    "var(--color-orange)",
    "var(--color-yellow)",
  ];

  const outlineColors = [
    "var(--color-purple)",
    "var(--color-purple)",
    "var(--color-orange)",
    "var(--color-orange)",
    "transparent",
    "transparent",
  ];

  const bgColors = [
    "transparent", 
    "var(--color-purple)",
    "transparent", 
    "var(--color-orange)",
    "transparent",
    "transparent",

  ];

  const fontSizes = [
    "var(--font-size-14)",
    "var(--font-size-14)",
    "var(--font-size-14)",
    "var(--font-size-14)",
    "var(--font-size-10)",
    "var(--font-size-10)",
  ];

  // Styles for the tag
  const tagStyles = {
    backgroundColor: bgColors[colorIndex], 
    color: textColors[colorIndex],
    borderRadius: "var(--border-radius-56)",
    padding: "8px 12px",
    border: `1px solid ${outlineColors[colorIndex]}`,
    fontSize: fontSizes[colorIndex],
    display: "inline-block",
    fontFamily: "var(--font-family-primary)",
  };

  return (
    <button className="tag-button" style={tagStyles}>
      #{text}
    </button>
  );
};

export default MusicTag;

/*  Calling the Tags

  Purple outline (Instrument tag)
<MusicTag text="Guitar" colorIndex={0} />

  Purple filled (Instrument tag)
<MusicTag text="Guitar" colorIndex={1} />
  
  Orange outline (Genre tag)
<MusicTag text="Guitar" colorIndex={2} />
  
  Orange filled (Genre tag)
<MusicTag text="Guitar" colorIndex={3} />

  Orange just text (Genre tag)
<MusicTag text="Guitar" colorIndex={4} />

  Yellow just text (Instrument tag)
<MusicTag text="Guitar" colorIndex={4} />
 */
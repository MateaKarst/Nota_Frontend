import React from "react";

import "../../styles/components/editor/editor-instrument.css";

const EditorInstrument = ({ icon: Icon, label, }) => {
  const colorMap = {
    Drum: "var(--color-pink)",
    Guitar: "var(--color-orange)",
    Bass: "var(--color-purple)",
    Vocal: "var(--color-pink)",
    Accordion: "var(--color-orange)",
    Ukulele: "var(--color-purple)", 
    Flute: "var(--color-pink)", 
    Piano: "var(--color-purple)",
    Saxophone: "var(--color-pink)", 
    Violin: "var(--color-orange)",
    Trombone: "var(--color-purple)"
  };

 const bgColor = colorMap[label] || "var(--color-pink)";


  return (
    <div className="editor-instrument" style={{ backgroundColor: bgColor }}>
      {Icon && <Icon className="icon" />}
      {label && <span className="label">#{label}</span>}

    </div>
  );
};

export default EditorInstrument;

import React from "react";
import "../styles/variables.css";
import "../styles/components/editorinstrument.css";

const EditorInstrument = ({ icon: Icon, label, }) => {
  const colorMap = {
    pink: "var(--color-pink)",
    orange: "var(--color-orange)",
    purple: "var(--color-purple)",
  };

  //get random color square
  const getRandomColor = () => {
    const colors = Object.values(colorMap); 
    const randomIndex = Math.floor(Math.random() * colors.length); 
    return colors[randomIndex]; 
  };

  const bgColor = getRandomColor();

 

  return (
    <div className="editor-instrument" style={{ backgroundColor: bgColor }}>
      {Icon && <Icon className="icon" />}
      {label && <span className="label">#{label}</span>}
      
    </div>
  );
};

export default EditorInstrument;

import React from "react";
import TrashIcon from "../../assets/icons/trash-icon.svg";
import "../../styles/components/editor/editor-instrument.css";

const EditorInstrument = ({ icon: Icon, label, id, onDelete }) => {
  const colorMap = {
    Drum: "var(--color-pink)",
    Guitar: "var(--color-orange)",
    Bass: "var(--color-purple)",
  };

  const bgColor = colorMap[label] || "var(--color-pink)";

  return (
    <div className="editor-instrument" style={{ backgroundColor: bgColor }}>
      {Icon && <Icon className="icon" />}
      {label && <span className="label">#{label}</span>}
      {onDelete && (
        <button
          className="delete-track-btn"
          onClick={() => onDelete(id)}
          title={`Delete ${label}`}
          style={{
            background: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <img src={TrashIcon} alt="Delete" width={20} height={20} />
        </button>
      )}
    </div>
  );
};

export default EditorInstrument;

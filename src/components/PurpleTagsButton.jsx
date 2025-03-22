
import React, { useState }  from 'react';


function PurpleTagsButton({ text }) {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggles state between true and false

  }; 

    return (
      <button
        style={{
          width: "106px",
          height: "23px",
          backgroundColor: clicked ? "transparent" : "#7C00FE",
        color: clicked ? "#7C00FE" : "#FFFFFF", 
          borderRadius: "20px",
          borderColor: "#7C00FE",
          fontSize: "13px",
        }}
        onClick={handleClick}  
      >
        {text}
      </button>
    );
  }
  
  export default PurpleTagsButton;
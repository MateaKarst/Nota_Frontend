import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg"; 
 // Імпортуємо SVG як компонент

 const NotaLogo = ({ colorIndex = 0 }) => {
    // Визначаємо кольори
    const colors = {
      0: "#FFA500", // Помаранчевий
      1: "#800080", // Фіолетовий
    };
  
    return (
      <Logo style={{ color: colors[colorIndex] }} />
    );
  };
export default NotaLogo;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PopupMenu from '../smallpopups'; 
import '../../styles/components/header.css';

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg';
import { ReactComponent as BackArrow } from '../../assets/icons/backarrow-icon.svg';


const headers = [
  {
    mode: "text",
    visibility: 1,
    backgroundColor: "var(--color-pink)",
    title: "text",
  },
  {
    mode: "edit",
    visibility: 1,
    backgroundColor: "var(--color-black)",
    hasEditIcon: true,
    hasMenuIcon: true,
  },
  {
    mode: "menu",
    visibility: 1,
    backgroundColor: "var(--color-black)",
    hasMenuIcon: true,
  },
  {
    mode: "black text",
    visibility: 1,
    backgroundColor: "var(--color-black)",
    title: "Echoes of Tomorrow",
  },
  {
    mode: "default",
    visibility: 1,
    backgroundColor: "var(--color-black)",
  },
  {
    mode: "user",
    visibility: 1,
    backgroundColor: "var(--color-black)",
    userImage: "../assets/avatars/profile.jpg",
    title: "Guitarist101",
    fontFamily: "var(--font-family-primary)"
  },
];

const HeaderVariants = ({ mode, title, storage_path }) => {

  const headerConfig = headers.find((h) => h.mode === mode);

  const [showPopup, setShowPopup] = useState(false);
  const menuBtnRef = useRef(null);                   
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target)
      ) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!headerConfig || !headerConfig.visibility) return null; 


const handleMenuClick = () => {
  setShowPopup(!showPopup);
};

  if (!headerConfig || !headerConfig.visibility) return null;
  

  const headerTitle = title || headerConfig.title;
  const isUserHeader = mode === "user";
  const isLeftAlignedHeader = mode === "text" || mode === "black text";

  const handleBackClick = () => {
    if (window.history.length > 2) {
      navigate("/home"); 
    } else {
      navigate("/home");
    }
  };

  return (
    <header
      className={`header ${isUserHeader ? "user-header" : ""}`}
      style={{ backgroundColor: headerConfig.backgroundColor, paddingTop: 40 }}
    >
      <div className="left-section">
        <button className="back-btn" onClick={handleBackClick}>
          <BackArrow className="icon-style" />
        </button>

        {isLeftAlignedHeader && headerTitle && (
          <span className="header-text" style={{ fontWeight: headerConfig.fontWeight }}>
            {headerTitle}
          </span>
        )}
      </div>

      {isUserHeader && (
        <div className="center-section">
          <img src={headerConfig.userImage} alt="User" className="user-avatar" />
          <span className="header-text">{headerConfig.title}</span>
        </div>
      )}

<div className="right-section" ref={menuBtnRef} style={{ position: "relative" }}>
  {headerConfig.hasEditIcon && (
    <button className="edit-btn" style={{ background: "none", border: "none" }}>
      <PencilIcon className="icon-style" />
    </button>
  )}
  {headerConfig.hasMenuIcon && (
    <button
      className="menu-btn"
      style={{ background: "none", border: "none" }}
      onClick={handleMenuClick}
    >
      <MenuIcon className="icon-style" />
    </button>
  )}
  {showPopup && (
    <div style={{ position: "absolute", top: "40px", right: 0, zIndex: 999 }}>
     <PopupMenu type="delete" storage_path="/public/audio/track.mp3" />

    </div>
  )}
</div>

      {!isUserHeader && !isLeftAlignedHeader && headerConfig.title && (
        <div className="header-title">
          <span className="header-text" style={{ fontWeight: headerConfig.fontWeight }}>
            {headerConfig.title}
          </span>
        </div>
      )}
    </header>
  );
};

export default HeaderVariants;

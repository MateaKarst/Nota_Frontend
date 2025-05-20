import React from "react";

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

const HeaderVariants = ({ mode, title }) => {
  const headerConfig = headers.find((h) => h.mode === mode);

  if (!headerConfig || !headerConfig.visibility) return null;

  const headerTitle = title || headerConfig.title;  

  const isUserHeader = mode === "user";
  const isLeftAlignedHeader = mode === "text" || mode === "black text";

  return (
    <header
      className={`header ${isUserHeader ? "user-header" : ""}`}
      style={{ backgroundColor: headerConfig.backgroundColor, paddingTop: 40 }}
    >

      <div className="left-section">
        <button className="back-btn">
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

      <div className="right-section">
        {headerConfig.hasEditIcon && (
          <button className="edit-btn" style={{ background: "none", border: "none" }}>
            <PencilIcon className="icon-style" />
          </button>
        )}
        {headerConfig.hasMenuIcon && (
          <button className="menu-btn" style={{ background: "none", border: "none" }}>
            <MenuIcon className="icon-style" />
          </button>
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

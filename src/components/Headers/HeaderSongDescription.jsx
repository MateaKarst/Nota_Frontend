//headers for when pop ups are needed (header variant layout is distorted when you add popup)

import React from 'react';
import {  useNavigate } from 'react-router-dom';

import '../../styles/variables.css';
import '../../styles/components/headersongdescription.css';

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu-icon.svg';
import { ReactComponent as BackArrow } from '../../assets/icons/backarrow-icon.svg';

const HeaderSongDescription = ({ mode = "default", title = "" }) => {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
    navigate(-1);
  };

  //mode for pink color/no icons
  const isPinkMode = mode === "pink" || mode === "pinkText";
  const backgroundColor = isPinkMode ? "var(--color-pink)" : "var(--color-black)";


  return (
  <header className="header" style={{ backgroundColor, paddingTop: "20px" }}>
    <div className='content'>
    <BackArrow onClick={handleBackClick} className="icon-style"/>
    
    {mode === "pinkText" && <p className="header-title">{title}</p>}
    </div>

   {(mode === "pink" || mode === "default") && (
  <div className='nav'>
    <PencilIcon className="icon-style" />
    <MenuIcon className="icon-style" />
  </div>
)}
  </header>
);
};

export default HeaderSongDescription;
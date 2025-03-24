import React from 'react';
import '../styles/components/header.css';
import '../components/LogoNota';
import NotaLogo from '../components/LogoNota'
import { ReactComponent as BellIcon } from '../assets/bell-icon.svg';
import { ReactComponent as MessageIcon } from '../assets/message-icon.svg';
import '../styles/variables.css'

const HeaderMain = ({ }) => (
  <header className="header" style={{  backgroundColor: 'var(--color-pink)', paddingTop: "40px"}}>
   < NotaLogo colorIndex={0} width="110px" height="83px" ></NotaLogo> 
   <div className='nav'>
      <BellIcon className="icon-style" />
      <MessageIcon className="icon-style" />
   </div>
  </header>
);
export default HeaderMain;



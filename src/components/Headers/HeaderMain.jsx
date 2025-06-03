import React from 'react';
import NotaLogo from '../Logos/NotaLogo';
import '../../styles/components/header.css';
import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message-icon.svg';
import { Link } from 'react-router-dom';

const HeaderMain = () => (
  <header className="header" style={{ backgroundColor: 'var(--color-pink)', paddingTop: "40px", height: 200, alignItems: "flex-start" }}>
    <div className="content">
      <NotaLogo colorIndex={0} width="110px" height="83px" />
      <div className='nav'>
        <Link to="/notifications">
          <BellIcon className="icon-style" />
        </Link>
        <Link to="/chat-overview">
          <MessageIcon className="icon-style" />
        </Link>
      </div>
    </div>
  </header>
);

export default HeaderMain;

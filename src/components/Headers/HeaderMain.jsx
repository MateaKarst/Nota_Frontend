import React from 'react';
import NotaLogo from '../Logos/NotaLogo';

import '../../styles/components/header.css';

import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message-icon.svg';

const HeaderMain = () => (
  <header className="header" style={{ backgroundColor: 'var(--color-pink)', paddingTop: "40px", height: 237 }}>
    <div className="content">
    <NotaLogo colorIndex={0} width="110px" height="83px" ></NotaLogo>
    <div className='nav'>
      <BellIcon className="icon-style" />
      <MessageIcon className="icon-style" />
    </div>
    </div>
  </header>
);
export default HeaderMain;

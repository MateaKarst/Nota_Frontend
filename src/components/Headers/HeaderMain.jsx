import React from 'react';
import NotaLogo from '../Logos/NotaLogo';
import '../../styles/components/header.css';
import { ReactComponent as BellIcon } from '../../assets/icons/bell-icon.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/message-icon.svg';
import { useNavigate } from 'react-router-dom';

const HeaderMain = () => {
  const navigate = useNavigate();

  const handleNotificationsClick = () => {
    navigate('/notifications');
  };

  const handleMessagesClick = () => {
    navigate('/chatoverview');
  };

  return(
  <header className="header" style={{ backgroundColor: 'var(--color-pink)', paddingTop: "40px", height: 200, alignItems: "flex-start" }}>
    <div className="content">
      <NotaLogo colorIndex={0} width="110px" height="83px" />
      <div className='nav'>
          <BellIcon className="icon-style" onClick={handleNotificationsClick}/> 
          <MessageIcon className="icon-style" onClick={handleMessagesClick} />
      </div>
    </div>
  </header>
);
};

export default HeaderMain;

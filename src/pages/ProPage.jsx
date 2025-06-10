import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/backgrounds/pro-page-back.jpeg'
import NotaLogo from '../components/Logos/NotaLogo';
import { ReactComponent as DevIcon } from '../assets/icons/dev-icon.svg';
import { ReactComponent as MusicLineIcon } from '../assets/icons/musicline-icon.svg';
import { ReactComponent as HeadphonesIcon } from '../assets/icons/headphones-icon.svg';
import BasicBtn from '../components/Buttons/BasicBtn';

import '../styles/pages/pro-page.css';
const ProPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/home'); 
  };

  const handleDiscover = () => {
    navigate('/plans'); 
  };

  return (
    <div className="pro-page">
        <div className='top-pro'>
      <button className="close-button" onClick={handleClose}>×</button>
      <NotaLogo colorIndex={3} width="110px" height="30px" ></NotaLogo>
      </div>
      <div className='middle'>
      <h1 className="title-pro">Try Pro version<br />with new opportunities</h1>
<div className='middle2'>
      <div className="feature feature-green">
        <span className="icon"> <HeadphonesIcon width={24} height={24} /></span>
        <span>Experiment with music on the new level in editor</span>
      </div>

      <div className="feature feature-orange">
        <span className="icon"> <MusicLineIcon width={28} height={28} /></span>
        <span>Increase quality of your tracks</span>
      </div>

      <div className="feature feature-red">
        <span className="icon"><DevIcon width={24} height={24} /></span>
        <span>Explore new collaborations opportunity</span>
      </div>
      </div>
</div>
      <BasicBtn type="main" text="Discover plans" onClick={handleDiscover} />
    </div>
  );
};

export default ProPage;

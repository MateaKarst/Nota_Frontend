import React from 'react';

import '../../styles/components/header.css';

import { ReactComponent as PinkLogo } from '../../assets/logo/pinklogo.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings-icon.svg';
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil-icon.svg';

const HeaderProfile = () => (
  <header className="header" style={{ backgroundColor: 'var(--color-black)', paddingTop: "20px" }}>
    < PinkLogo colorIndex={0} width="55px" height="55px" ></PinkLogo>
    <div className='nav'>
      <SettingsIcon className="icon-style" />
      <PencilIcon className="icon-style" />
    </div>
  </header>
);

export default HeaderProfile;

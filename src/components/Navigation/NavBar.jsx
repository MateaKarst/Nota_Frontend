import React, { useState } from 'react';

import HomeIcon from '../../components/Navigation/SVGcode/HomeSvg';
import SearchIcon from '../../components/Navigation/SVGcode/SearchSvg';
import NoteIcon from '../../components/Navigation/SVGcode/MySongsSvg';
import ProfileIcon from '../../components/Navigation/SVGcode/ProfileSvg';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('home'); 

  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home' },
    { id: 'discover', icon: <SearchIcon />, label: 'Discover' },
    { id: 'songs', icon: <NoteIcon />, label: 'My Songs' },
    { id: 'profile', icon: <ProfileIcon />, label: 'Profile' },
  ];

  const styles = {
    navContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'var(--color-pink)', 
      padding: '10px 0',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      borderTopLeftRadius: 'var(--border-radius-24)', 
      borderTopRightRadius: 'var(--border-radius-24)',
    },
    button: {
      background: 'none',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      cursor: 'pointer',
    },
    icon: {
      width: '24px',
      height: '24px',
      transition: 'fill 0.2s ease',
    },
    label: {
      fontSize: '10px',
      marginTop: '4px',
      transition: 'color 0.2s ease',
    },
  };

  return (
    <nav style={styles.navContainer}>
      {navItems.map(({ id, icon, label }) => {
        const clickedIcon = React.cloneElement(icon, {
          style: {
            ...styles.icon,
            color: activeTab === id ? 'var(--color-yellow)' : 'var(--color-white)', 
          },
        });

        return (
          <a
            href="#app" // placeholder link to App.jsx
            key={id}
            style={{ textDecoration: 'none' }} 
            onClick={() => setActiveTab(id)} 
          >
            <button style={styles.button}>
              {clickedIcon}
              <span
                style={{
                  ...styles.label,
                  color: activeTab === id ? 'var(--color-yellow)' : 'var(--color-white)', 
                }}
              >
                {label}
              </span>
            </button>
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;

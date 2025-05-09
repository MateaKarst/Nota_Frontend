import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../../components/Navigation/SVGcode/HomeSvg';
import SearchIcon from '../../components/Navigation/SVGcode/SearchSvg';
import NoteIcon from '../../components/Navigation/SVGcode/MySongsSvg';
import ProfileIcon from '../../components/Navigation/SVGcode/ProfileSvg';

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home', path: '/home' },
    { id: 'discover', icon: <SearchIcon />, label: 'Discover',  }, //path: '/discover'
    { id: 'songs', icon: <NoteIcon />, label: 'My Songs', path: '/songs'}, 
    { id: 'profile', icon: <ProfileIcon />, label: 'Profile' }, //path: '/profile'
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
      {navItems.map(({ id, icon, label, path }) => {
        const isActive = currentPath === path;
        const clickedIcon = React.cloneElement(icon, {
          style: {
            ...styles.icon,
            color: isActive ? 'var(--color-yellow)' : 'var(--color-white)',
          },
        });

        return (
          <Link to={path} key={id} style={{ textDecoration: 'none' }}>
            <button style={styles.button}>
              {clickedIcon}
              <span
                style={{
                  ...styles.label,
                  color: isActive ? 'var(--color-yellow)' : 'var(--color-white)',
                }}
              >
                {label}
              </span>
            </button>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../../components/Navigation/SVGcode/HomeSvg';
import SearchIcon from '../../components/Navigation/SVGcode/SearchSvg';
import NoteIcon from '../../components/Navigation/SVGcode/MySongsSvg';
import ProfileIcon from '../../components/Navigation/SVGcode/ProfileSvg';

import '../../styles/components/navigation/navbar.css'; 

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home', path: '/home' },
    { id: 'discover', icon: <SearchIcon />, label: 'Search', path: '/discover' },
    { id: 'songs', icon: <NoteIcon />, label: 'My Songs', path: '/songs' },
    { id: 'profile', icon: <ProfileIcon />, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="navbar-container">
      {navItems.map(({ id, icon, label, path }) => {
        const isActive = currentPath === path;
        const activeColor = isActive ? 'var(--color-yellow)' : 'var(--color-white)';

        const clonedIcon = React.cloneElement(icon, {
          className: 'navbar-icon',
          style: { color: activeColor },
        });

        return (
          <Link to={path} key={id} style={{ textDecoration: 'none' }}>
            <button className="navbar-button">
              {clonedIcon}
              <span className="navbar-label" style={{ color: activeColor }}>
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

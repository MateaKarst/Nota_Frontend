import React from 'react';
import PopupContent from './pop-up-content';
import '../styles/components/pop-ups.css';
import { ReactComponent as PlusIcon } from '../assets/plus-icon.svg';

const Popup = ({ type, onClose, data }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={onClose}><PlusIcon/></button>
        <PopupContent type={type} data={data} onClose={onClose} />
      </div>
    </div>
  );
};

export default Popup;

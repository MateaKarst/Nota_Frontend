import React from 'react';
import HeaderVariants from "../components/Headers/HeaderVariants";
import { ReactComponent as Account } from '../assets/settings/account.svg';
import { ReactComponent as Messages } from '../assets/settings/messages.svg';
import { ReactComponent as Notifications } from '../assets/settings/notifica.svg';
import { ReactComponent as Interface } from '../assets/settings/interface.svg';
import { ReactComponent as Subscriptions } from '../assets/settings/subscription.svg';
import { ReactComponent as Storage } from '../assets/settings/storage.svg';
import { ReactComponent as Support } from '../assets/settings/support.svg';
import { ReactComponent as Delete } from '../assets/settings/delete.svg';
import { ReactComponent as Logout } from '../assets/settings/logout.svg';
import { useNavigate } from 'react-router-dom'; 

import "../styles/pages/settings.css";


const Settings = () => {
    const navigate = useNavigate();

return (
    <div className='settings-container'> 
    <HeaderVariants mode="text" title="Settings" />

 <div className="settings-icon-text">
      <Account className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Account</p>
        <p className="settings-text2">Privacy, security, email</p>
      </div>
    </div>

     <div className="settings-icon-text">
      <Messages className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Messages</p>
        <p className="settings-text2">Theme, wallpapers, chat history</p>
      </div>
    </div>

     <div className="settings-icon-text">
      <Notifications className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Notifications</p>
        <p className="settings-text2">Message, chat, call tones</p>
      </div>
    </div>

      <div className="settings-icon-text">
      <Interface className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Interface</p>
        <p className="settings-text2">Light/dark mode, language</p>
      </div>
    </div>

      <div className="settings-icon-text" onClick={() => navigate("/pro-page")}>
      <Subscriptions className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Subscriptions</p>
        <p className="settings-text2">Card details, recurring payments</p>
      </div>
    </div>

      <div className="settings-icon-text">
      <Storage className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Storage and data</p>
        <p className="settings-text2">Network usage, auto-download</p>
      </div>
    </div>

      <div className="settings-icon-text">
      <Support className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Support</p>
        <p className="settings-text2">Help center, contact us, privacy policy</p>
      </div>
    </div>

      <div className="settings-icon-text">
      <Delete className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Delete account</p>
      </div>
    </div>

      <div className="settings-icon-text"
        onClick={() => navigate("/login")} >
      <Logout className="settings-icon" />
      <div className="settings-text-column">
        <p className="settings-text">Log out</p>
      </div>
    </div>
  </div>
);
};

export default Settings;


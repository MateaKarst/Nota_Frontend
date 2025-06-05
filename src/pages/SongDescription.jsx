import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import SectionHeadImage from '../components/SongDescription/SectionHeadImage';
import TrackDropdown from '../components/Tracks/TrackDropdown';
import HeaderSongDescription from '../components/Headers/HeaderSongDescription';
import BasicBtn from "../components/Buttons/BasicBtn";
// import Popup from '../components/PopUps/PopUp';

import '../styles/pages/song-description.css';

const SongDescription = () => {
  const location = useLocation();
  // const [showPopup, setShowPopup] = useState(false);

  // const handleCollaborateClick = () => {
  //   setShowPopup(true);
  // };

  const { title, imageUrl } = location.state || {};
  return (
    <div className="song-description-page">
      {/*header section */}
      <div className="header-section">
        <HeaderSongDescription />
      </div>

      {/*image + dropdown */}
      <div className="top-part">
        <SectionHeadImage title={title} imageUrl={imageUrl} />

        <div className="dropdown">
          <h1 className="tracks"> Tracks (9)</h1>
          <TrackDropdown />
        </div>
      </div>

      {/* Collaborate Button*/}
      <div className="collaborate">
        {/* onClick={handleCollaborateClick} */}
        <BasicBtn type="main" text="Collaborate" />
      </div>

      {/* {showPopup && (
        <Popup
          type="upload-track"
          onClose={() => setShowPopup(false)}
        />
      )}   */}
    </div>
  );
};


export default SongDescription;
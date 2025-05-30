import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import SectionHeadImage from '../components/SongDescription/SectionHeadImage';
import TrackDropdown from '../components/Tracks/TrackDropdown';
import HeaderVariants from "../components/Headers/HeaderVariants";
import BasicBtn from "../components/Buttons/BasicBtn";
//import Popup from '../components/PopUps/PopUp';

import '../styles/pages/song-description.css';

const SongDescription = () => {
  const location = useLocation();
  // const [showPopup, setShowPopup] = useState(false);

  // const handleCollaborateClick = () => {
  //   setShowPopup(true);
  // };

  const { title, imageUrl } = location.state || {};//gives empty if nothing is passed
  return (
  <div className="song-description-page">
      {/*header section */}
      <div className="header-section">
        <HeaderVariants mode="edit" />
      </div>

      {/*image + dropdown */}
      <div className="top-part">
        <SectionHeadImage title={title} imageUrl={imageUrl}/>

        <div className="dropdown">
            <h1 className="tracks"> Tracks (9)</h1>
          <TrackDropdown />
        </div>
      </div>

    {/* Collaborate Button*/}
      <div className="collaborate">
        <BasicBtn type="main" text="Collaborate" />
      </div>

      {/* {showPopup && (
        <Popup
          type="upload-track" // this shows both Upload and Record options
          onClose={() => setShowPopup(false)}
        />
      )} */}
    </div>
  );
};


export default SongDescription;

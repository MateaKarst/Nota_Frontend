import React from 'react';
import SectionHeadImage from '../components/SongDescription/SectionHeadImage';
import TrackDropdown from '../components/Tracks/TrackDropdown';
import NavBar from '../components/Navigation/NavBar';
import HeaderVariants from "../components/Headers/HeaderVariants";
import BasicBtn from "../components/Buttons/BasicBtn";

import '../styles/pages/song-description.css';

const SongDescription = () => {
  return (
  <div className="song-description-page">
      
      <div className="header-section">
        <HeaderVariants mode="edit" />
      </div>

      
      <div className="top-part">
        <SectionHeadImage />

        <div className="dropdown">
            <h1 className="tracks"> Tracks (9)</h1>
          <TrackDropdown />
        </div>
      </div>

    
      <div className="navbar-bottom">
        <NavBar />
      </div> 

    
      <div className="collaborate">
        <BasicBtn type="main" text="Collaborate" />
      </div>
    </div>
  );
};


export default SongDescription;
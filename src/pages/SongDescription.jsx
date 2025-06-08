import React, { useRef } from 'react';
import SectionHeadImage from '../components/SongDescription/SectionHeadImage';
import TrackDropdown from '../components/Tracks/TrackDropdown';
import NavBar from '../components/Navigation/NavBar';
import HeaderVariants from "../components/Headers/HeaderVariants";
import BasicBtn from "../components/Buttons/BasicBtn";

// import Popup from '../components/PopUps/PopUp';
// import { API_ENDPOINTS } from "../routes/apiEndpoints";
// import { useAuth } from '../context/AuthProvider';
// import Cookies from "js-cookie";

import "../styles/pages/song-description.css";
import { useNavigate } from "react-router-dom";

const SongDescription = () => {

  const audioPlayersRef = useRef([]);
  const navigate = useNavigate();

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
        <BasicBtn type="main" text="Collaborate" onClick={() => navigate("/add-tracks")} />
      </div>

      {/* {showPopup && (
        <Popup
          type="upload-track"
          onClose={() => setShowPopup(false)}
        />
      )} */}
    </div>
  );
};


export default SongDescription;

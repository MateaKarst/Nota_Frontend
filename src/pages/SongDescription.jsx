import React, { useRef } from "react";
import SectionHeadImage from "../components/SongDescription/SectionHeadImage";
import TrackDropdown from "../components/Tracks/TrackDropdown";
import HeaderVariants from "../components/Headers/HeaderVariants";
import BasicBtn from "../components/Buttons/BasicBtn";
// import Popup from '../components/PopUps/PopUp';

import "../styles/pages/song-description.css";

const SongDescription = () => {
  const audioPlayersRef = useRef([]);

  return (
    <div className="song-description-page">
      {/* header section */}
      <div className="header-section">
        {/* <HeaderSongDescription /> */}
      </div>

      {/* image + dropdown */}
      <div className="top-part">
        <SectionHeadImage audioPlayersRef={audioPlayersRef} />
        <div className="dropdown">
          <h1 className="tracks"> Tracks (9)</h1>
          <TrackDropdown audioPlayersRef={audioPlayersRef} />
        </div>
      </div>

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
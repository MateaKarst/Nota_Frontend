import React, { useRef } from "react";
import SectionHeadImage from "../components/SongDescription/SectionHeadImage";
import TrackDropdown from "../components/Tracks/TrackDropdown";
import HeaderVariants from "../components/Headers/HeaderVariants";
import BasicBtn from "../components/Buttons/BasicBtn";

import "../styles/pages/song-description.css";
import { useNavigate } from "react-router-dom";

const SongDescription = () => {

  const audioPlayersRef = useRef([]);
  const navigate = useNavigate();

  return (
    <div className="song-description-page">
      {/* header section */}
      <div className="header-section">
        <HeaderVariants mode="edit" />
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
        <BasicBtn type="main" text="Collaborate" onClick={() => navigate("/add-tracks")}/>
      </div>
    </div>
  );
};

export default SongDescription;
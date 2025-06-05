import React from "react";
import TrackDescriptionBtn from "../Buttons/TrackdescriptionBtn";
import song from "../../assets/songdescription/song.svg";
import profile from "../../assets/songdescription/profile.svg";

import "../../styles/variables.css";
import "../../styles/components/headimage.css";

const HeadImage = ({ audioPlayersRef }) => {
  return (
    <div className="image-wrapper">
      <img src={song} alt="song cover" className="song-img" />
      <img src={profile} alt="profile image" className="profile-img" />

      <div className="overlay">
        <TrackDescriptionBtn
          showProgress={true}
          showSkipButtons={false}
          bordered={false}
          iconColor="var(--color-pink)"
          size={70}
          audioPlayersRef={audioPlayersRef}
        />
      </div>
    </div>
  );
};

export default HeadImage;
import React from "react";
import TrackDescriptionBtn from "../Buttons/TrackdescriptionBtn";
import MusicTag from "../Tags/MusicTag.jsx";
import LikeButton from "../like-button.jsx";
import CommentButton from "../comment-button.jsx";
import ShareButton from "../share-button.jsx";

import song from "../../assets/songdescription/song.svg";
import profile from "../../assets/songdescription/profile.svg";

import "../../styles/variables.css";
import "../../styles/components/headimage.css";
import "../../styles/components/sectionheadimage.css";

const SectionHeadImage = ({
  audioPlayersRef,
  title = "Paris 2012",
  description = "Future top track with musical harmony that brings new fresh electro vibes.",
  showDescription = true,
  showTags = true,
  showInteractions = true,
  tags = ["Jazz", "Guitar", "Piano", "Vocal"],
}) => {
  return (
    <div>
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

      <div className="song-info">
        <h1 className="song-title">{title}</h1>

        {showDescription && (
          <p className="song-description">{description}</p>
        )}

        {showTags && (
          <div className="tag-list">
            {tags.map((tag, index) => (
              <MusicTag key={index} text={tag} colorIndex={4 + (index % 2)} />
            ))}
          </div>
        )}

        {showInteractions && (
          <div className="like-comment">
            <LikeButton />
            <CommentButton />
            <ShareButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeadImage;
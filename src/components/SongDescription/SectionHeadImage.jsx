import React from "react";
import HeadImage from "./HeadImage.jsx";
import MusicTag from "../Tags/MusicTag.jsx";
import LikeButton from "../like-button.jsx";
import CommentButton from "../comment-button.jsx";
import ShareButton from "../share-button.jsx";

import "../../styles/variables.css";
import "../../styles/components/sectionheadimage.css";

const SectionHeadImage = ({ audioPlayersRef }) => {

  return (
      <div>
        <HeadImage audioPlayersRef={audioPlayersRef} />
        <div className="song-info">
        <h1 className="song-title">Paris 2012</h1>
        <p className="song-description">
          Future top track with musical harmony that brings new fresh electro vibes.
        </p>
        <div className="tag-list">
          <MusicTag text="Jazz" colorIndex={4} />
          <MusicTag text="Guitar" colorIndex={5} />
          <MusicTag text="Piano" colorIndex={5} />
          <MusicTag text="Vocal" colorIndex={5} />
          <MusicTag text="Guitar" colorIndex={5} />
      </div>
      <div className="like-comment">
          <LikeButton />
          <CommentButton />
          <ShareButton />
      </div>
    </div>
    </div>
  );
};

export default SectionHeadImage;
import HeadImage from "./HeadImage.jsx";
import MusicTag from "../Tags/MusicTag.jsx";
import LikeButton from "../like-button.jsx";
import CommentButton from "../comment-button.jsx";
import ShareButton from "../share-button.jsx";

import "../../styles/variables.css";
import "../../styles/components/sectionheadimage.css";

const SectionHeadImage = ({
  imageUrl,
  title,
  description,
  genres = [],
  showDescription = true,
  showTags = true,
  showInteractions = true,
}) => {
  console.log("SectionHeadImage imageUrl:", imageUrl);
 
   const isGenre = (tag) => {
    const genreList = [
      "jazz", "hip-hop", "edm", "pop", "indie", "rock", "rap", "classical",
      "folk", "funk", "country", "metal", "electronic", "blues", "opera", "r&B", "soul",
    ];
    return genreList.includes(tag.toLowerCase());
  };
 
return (
    <div>
      <HeadImage imageUrl={imageUrl} />
      <div className="song-info">
        <h1 className="song-title">{title || "Unknown Title"}</h1>

        {showDescription && (
          <p className="song-description">
            {description || "No description available."}
          </p>
        )}

        {showTags && (
          <div className="tag-list">
            {genres.length > 0 ? (
              genres.map((genre, index) => (
                <MusicTag
                  key={genre + index}
                  text={genre}
                  colorIndex={isGenre(genre) ? 4 : 5}
                />
              ))
            ) : (
              <p>No genres available.</p>
            )}
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
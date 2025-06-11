import React, { useState } from "react";
import UserTrack from "./UserTrack";
import { useRef } from "react";

const TrackDropdown = ({ tracks: propTracks, registerPlayerRef }) => {
  const audioPlayers = useRef([]);
  // use dummy data if no props are passed
  const defaultTracks = [
    {
      isOwnTrack: true,
      profileImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png",
    },
    { isOwnTrack: false },
    { isOwnTrack: false },
    { isOwnTrack: false },
    { isOwnTrack: false },
    { isOwnTrack: false },
    { isOwnTrack: false },
    { isOwnTrack: false },
    { isOwnTrack: false },
  ];

  const tracks = Array.isArray(propTracks) ? (propTracks.length ? propTracks : defaultTracks) : defaultTracks;


  const [showMore, setShowMore] = useState(false);

  const hasMoreThanFive = tracks.length > 5;

  // if showMore is false, show first 5, else show all
  const displayedTracks = hasMoreThanFive && !showMore ? tracks.slice(0, 5) : tracks;

  const toggleShowMore = () => setShowMore((prev) => !prev);

  const registerAudio = (player) => {
    audioPlayers.current.push(player);
    registerPlayerRef(audioPlayers.current);
  };

  return (
    // <div className="track-dropdown">
    //   {displayedTracks.map((track, index) => (
    //     // <UserTrack key={index} {...track} />
    //     <UserTrack key={track.id || index} {...track} />
    //   ))}
        <div className="track-dropdown">
      {displayedTracks.map((track, index) => (
        <UserTrack
          key={track.id || index}
          {...track}
          registerAudio={registerAudio} // <-- this line
        />
      ))}

      {hasMoreThanFive && (
        <div
          style={{
            color: "var(--Colors-White, #FFF)",
            textAlign: "center",
            fontFamily: "var(--Fonts-Body-font, Karla)",
            fontSize: "var(--Size-body-text-body-text-md, 16px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "var(--Line-Height-body-m, 18px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            alignSelf: "stretch",
            marginTop: "10px",
            cursor: "pointer",
            userSelect: "none",
            // marginLeft: "20px",
            // marginRight: "20px",
          }}
          onClick={toggleShowMore}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleShowMore();
          }}
        >
          {showMore ? "Show less" : `Show more (+${tracks.length - 5})`}
        </div>
      )}
    </div>
  );
};

export default TrackDropdown;

import React, { useState } from "react";
import UserTrack from "./UserTrack";
import { useRef } from "react";

const TrackDropdown = ({ tracks: propTracks, registerPlayerRef }) => {
  const audioPlayers = useRef([]);
  // use dummy data if no props are passed
 const defaultTracks = [
  {
    isOwnTrack: true,
    name: "Alice",
    tag: "#Guitar",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png",
  },
  {
    isOwnTrack: false,
    name: "Bob",
    tag: "#Drums",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Portrait_Placeholder.png/600px-Portrait_Placeholder.png",
  },
  {
    isOwnTrack: false,
    name: "Carla",
    tag: "#Vocal",
    profileImage: "https://images.unsplash.com/photo-1603415526960-f7e0328abcee?crop=faces&fit=crop&h=200&w=200",
  },
  {
    isOwnTrack: false,
    name: "Dave",
    tag: "#Bass",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/600px-User-avatar.svg.png",
  },
  {
    isOwnTrack: false,
    name: "Ella",
    tag: "#Synth",
    profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&h=200&w=200",
  },
  {
    isOwnTrack: false,
    name: "Frank",
    tag: "#FX",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=200&w=200",
  },
  {
    isOwnTrack: false,
    name: "Gina",
    tag: "#Harmony",
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&h=200&w=200",
  },
  {
    isOwnTrack: false,
    name: "Hank",
    tag: "#Piano",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/User_icon_BLACK-01.png/600px-User_icon_BLACK-01.png",
  },
  {
    isOwnTrack: false,
    name: "Ivy",
    tag: "#Strings",
    profileImage: "https://images.unsplash.com/photo-1502767089025-6572583495b0?crop=faces&fit=crop&h=200&w=200",
  },
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

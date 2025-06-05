import { useState } from "react";
import UserTrack from "./UserTrack";

const TrackDropdown = ({ audioPlayersRef }) => {

   const registerAudio = (waveSurferInstance) => {
    if (
      waveSurferInstance &&
      !audioPlayersRef.current.includes(waveSurferInstance)
    ) {
      audioPlayersRef.current.push(waveSurferInstance);
    }
  };

  const tracks = [
    {
      isOwnTrack: true,
      name: "You",
      tag: "#Vocal",
      profileImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png",
    },
    { isOwnTrack: false, name: "Sara", tag: "#Guitar" },
    { isOwnTrack: false, name: "Leo", tag: "#Drums" },
    { isOwnTrack: false, name: "Mina", tag: "#Synth" },
    { isOwnTrack: false, name: "Drew", tag: "#Bass" },
    { isOwnTrack: false, name: "Jay", tag: "#Violin" },
    { isOwnTrack: false, name: "Ali", tag: "#Piano" },
    { isOwnTrack: false, name: "Toni", tag: "#Flute" },
    { isOwnTrack: false, name: "Eli", tag: "#Choir" },
  ];

  const [showMore, setShowMore] = useState(false);
  const hasMoreThanFive = tracks.length > 5;
  const displayedTracks = hasMoreThanFive && !showMore ? tracks.slice(0, 5) : tracks;

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="track-dropdown">
      {displayedTracks.map((track, index) => (
        <UserTrack key={index} {...track} registerAudio={registerAudio} />
      ))}

      {hasMoreThanFive && (
        <div
          style={{
            color: "var(--Colors-White, #FFF)",
            textAlign: "center",
            fontFamily: "var(--Fonts-Body-font, Karla)",
            fontSize: "var(--Size-body-text-body-text-md, 16px)",
            fontWeight: 400,
            lineHeight: "var(--Line-Height-body-m, 18px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
            cursor: "pointer",
            userSelect: "none",
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

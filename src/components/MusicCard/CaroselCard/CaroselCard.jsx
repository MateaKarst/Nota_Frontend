import React from "react";
import PlayerBtn from "../../Buttons/PlayBtn";
import CaroselSvg from "./CaroselSvg";
import { useNavigate } from "react-router-dom";

// const CaroselCard = ({ imageUrl, title, creator, contributersNbr, audio, onPlay }) => {

//     const handlePlay = () => {
//     if (onPlay) {
//       onPlay({ imageUrl, title, creator, contributersNbr, audio });
//     }
//   };

//   return (
//     <div
//       onClick={handlePlay}
const CaroselCard = ({ imageUrl, title, creator, contributersNbr, onPlay, audio }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/song-description");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "auto",
        height: "auto",
        backgroundColor: "none",
        borderBottomRadius: "var(--border-radius-56)",
        fontFamily: "var(--font-family-primary)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "200px", position: "relative" }}>
        <CaroselSvg SVGImg={imageUrl} />

        {/* music btn */}
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            right: "0px",
          }}
        >
          <PlayerBtn
            circleColor="var(--color-purple)"
            iconColor="white"
            size={50}
            onClick={() =>
              onPlay?.({
                title,
                artist: creator,
                cover: imageUrl,
                audio,
              })
            }
          />
        </div>
      </div>

      {/* Text content */}

      <div
        style={{
          width: "200px",
          backgroundColor: "var(--color-light)",
          borderBottomLeftRadius: "var(--border-radius-56)",
          borderBottomRightRadius: "var(--border-radius-56)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "4px",
            color: "var(--color-white)",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "var(--color-white-trans-50)",
            textAlign: "center",
            margin: 0,
          }}
        >
          {creator} + {contributersNbr}
        </p>
      </div>
    </div>
  );
};

export default CaroselCard;
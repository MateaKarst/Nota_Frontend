import React from "react";
import PlayBtn from "../../Buttons/PlayBtn";
import CoverImg from "./CoverImg";
import { useNavigate } from "react-router-dom";

const MusicCard = ({ imageUrl, title, creator, layout = "column", contributersNbr, onPlay, audio, songId }) => {
  const isRow = layout === "row";
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to song description when clicking outside play button
    navigate(`/song-description/${songId}`, {
      state: { title, imageUrl, creator, contributersNbr, audio }
    });
  };

const handlePlayClick = async (e) => {
  e.stopPropagation();

  try {
    await onPlay({
      title,
      artist: creator,
      cover: imageUrl,
      audio,  // this will be ElecGuitar now
    });
  } catch (err) {
    console.warn("Play interrupted or failed:", err);
  }
};


  return (
    <div
      onClick={handleCardClick}
      style={{
        width: isRow ? "auto" : "165px",
        height: isRow ? "auto" : "200px",
        backgroundColor: "none",
        borderBottomRadius: "var(--border-radius-56)",
        fontFamily: "var(--font-family-primary)",
        position: "relative",
        display: "flex",
        flexDirection: isRow ? "row" : "column",
        alignItems: "center",
        paddingBottom: "20px",
        paddingTop: "10px",
        cursor: "pointer",  // show pointer for clickable card
      }}
    >
      <div style={{ width: "150px", position: "relative" }}>
        <CoverImg SVGImg={imageUrl} />

        {/* music btn */}
        <div
          style={{
            position: "absolute",
            bottom: "-7px",
            right: "-5px",
          }}
        >
          <PlayBtn
            showProgress={false}
            bordered={false}
            showSkipButtons={false}
            circleColor="var(--color-purple)"
            iconColor="white"
            size={40}
            onClick={handlePlayClick}
          />
        </div>
      </div>

      {/* Text content */}
      <div
        style={{
          width: isRow ? "auto" : "150px",
          height: "auto",
          backgroundColor: "var(--color-light)",
          borderBottomLeftRadius: "var(--border-radius-56)",
          borderBottomRightRadius: "var(--border-radius-56)",
          textAlign: "left",
          marginLeft: isRow ? "20px" : "0",
          marginTop: isRow ? "0" : "8px",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            margin: "0px 0 4px 0",
            color: "var(--color-white)",
            textAlign: "left",
            width: "100%",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "12px",
            color: "var(--color-white-trans-50)",
            paddingLeft: "2px",
          }}
        >
          {creator} + {contributersNbr}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;



/*
  calling example

  <MusicCard
imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
title="Lofi Beats"
creator="DJ Chill"
layout="row"
/>

*/
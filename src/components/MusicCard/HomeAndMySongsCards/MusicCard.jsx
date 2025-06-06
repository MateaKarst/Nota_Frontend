import React from "react";
import PlayBtn from "../../Buttons/PlayBtn";
import CoverImg from "./CoverImg";
import { useNavigate } from "react-router-dom";

const MusicCard = ({ imageUrl, title, creator, layout = "column", contributersNbr, onPlay, audio }) => {
  const isRow = layout === "row";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/song-description");
  };

  return (
    <div onClick={handleClick}
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
      }}
    >
      <div style={{ width: "150px", position: "relative" }}>
        <CoverImg SVGImg={imageUrl} /> {/* Pass the image URL directly here */}

        {/* music btn */}
        <div
          style={{
            position: "absolute",
            bottom: "-5px",
            right: "-3px",
          }}
        >
          <PlayBtn
            showProgress={false}
            bordered={false}
            showSkipButtons={false}
            circleColor="var(--color-purple)"
            iconColor="white"
            size={40}
            onClick={() => onPlay({
  title,
  artist: creator,
  cover: imageUrl,
  audio
})}
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
            // whiteSpace: isRow ? "" : "nowrap",
            // overflow: isRow ? "" : "hidden",
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
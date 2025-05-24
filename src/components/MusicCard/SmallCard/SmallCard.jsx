import React from "react";
import PlayBtn from "../../Buttons/PlayBtn";
import SmallCardSvg from "./SmallCardSvg";

const SmallCard = ({ imageUrl, title, creator, contributersNbr, onPlay, audio }) => {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        backgroundColor: "none",
        borderRadius: "var(--border-radius-24)",
        fontFamily: "var(--font-family-primary)",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // paddingLeft: "20px",
        paddingBottom: "3px",
        paddingTop: "5px",
      }}
    >
      <div style={{ width: "80px", position: "relative" }}>
        <SmallCardSvg SVGImg={imageUrl} />

        {/* music btn */}
        <div
          style={{
            position: "absolute",
            bottom: "-1px",
            right: "-2px",
          }}
        >
          <PlayBtn
            showProgress={false}
            bordered={false}
            showSkipButtons={false}
            circleColor="var(--color-purple)"
            iconColor="white"
            size={24}
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
          width: "auto", 
          height: "auto",
          backgroundColor: "var(--color-light)",
          borderBottomLeftRadius: "var(--border-radius-56)",
          borderBottomRightRadius: "var(--border-radius-56)",
          textAlign: "left",
          marginLeft: "20px",
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
          }}
        >
          {creator} + {contributersNbr}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
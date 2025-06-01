import React from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import "../../styles/variables.css";

const PlayBtn = ({
  isPlaying = false,
  onClick,
  bordered = false,
  circleColor = "var(--color-black)",
  iconColor = "white",
  size = 80,
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={`play-btn ${bordered ? "play-btn-bordered" : ""}`}
      style={{
        backgroundColor: circleColor,
        width: size,
        height: size,
        borderRadius: "50%",
        border: "none",
        boxShadow: "none",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
      }}
    >
      {isPlaying ? (
        <PauseIcon
          className="icon"
          style={{
            color: iconColor,
            width: size / 2.2,
            height: size / 2.2,
          }}
        />
      ) : (
        <PlayIcon
          className="icon"
          style={{
            color: iconColor,
            width: size / 2.2,
            height: size / 2.2,
          }}
        />
      )}
    </button>
  );
};

export default PlayBtn;
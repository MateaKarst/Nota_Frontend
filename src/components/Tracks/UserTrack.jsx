import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

import "../../styles/components/tracks/user-track.css";
import "../../styles/variables.css";

import profImg from "../../assets/avatars/violeta.svg";
import Track from "../../assets/instrument-samples/Drum.mp3";

const UserTrack = ({
  isOwnTrack = false,
  name = "Samantha",
  tag = "#Vocal",
  profileImage = profImg,
  audioSrc = Track,
}) => {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);
  const isReadyRef = useRef(false);
  const abortControllerRef = useRef(new AbortController());
  const rootStyles = getComputedStyle(document.documentElement);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const controller = abortControllerRef.current;

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: rootStyles.getPropertyValue("--color-orange") || "#FFA500", // bright orange
      progressColor:
        rootStyles.getPropertyValue("--color-orange-dark") || "#CC7000", // darker orange
      responsive: true,
      height: 50,
      cursorWidth: 0,
    });

    waveSurferRef.current = ws;

    ws.load(Track, null, controller.signal).catch((e) => {
      if (e.name !== "AbortError") {
        console.error("WaveSurfer load error:", e);
      }
    });

    ws.on("ready", () => {
      isReadyRef.current = true;
    });

    const handleClick = (e) => {
      const waveSurfer = waveSurferRef.current;
      if (!isReadyRef.current || !waveformRef.current || !waveSurfer) return;

      const rect = waveformRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percent = clickX / rect.width;
      const duration = waveSurfer.getDuration();

      waveSurfer.seekTo(percent); // seek to clicked position
      waveSurfer.play(); // auto-play on seek
    };

    const waveformEl = waveformRef.current;
    waveformEl?.addEventListener("click", handleClick);

    return () => {
      controller.abort();
      ws.destroy();
      waveformEl?.removeEventListener("click", handleClick);
    };
  }, [audioSrc, isActive]);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={`voice-card ${isOwnTrack ? "own-track" : "other-track"} ${
        !isActive ? "inactive" : ""
      }`}
    >
      <div className="user-info">
        <img src={profileImage} alt={name} className="avatar" />
        <div className="user-info-txt">
          <p className="name">{name}</p>
          <p className="tag">{tag}</p>
        </div>
      </div>
      <div ref={waveformRef} className="waveform"></div>
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" checked={isActive} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default UserTrack;

//HOW TO USE
//<UserTrack isOwnTrack={false} to use for other users track
// name="Sara"
// tag= "Guitar"
// profileImage={}
// audioSrc={}
//or
//<UserTrack isOwnTrack={true}/> to use the version for the users own track

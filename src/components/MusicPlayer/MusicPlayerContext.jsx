// src/context/MusicPlayerContext.jsx
import React, { createContext, useRef, useState, useContext, useEffect } from "react";

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent || 0);
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const playAudio = (src) => {
    if (audioRef.current.src !== src) {
      audioRef.current.src = src;
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seekTo = (percent) => {
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (percent / 100) * duration;
  };

  const skip = (amount) => {
    audioRef.current.currentTime += amount;
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        audioRef,
        isPlaying,
        progress,
        playAudio,
        pauseAudio,
        togglePlayPause,
        seekTo,
        skip,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export default MusicPlayerContext;
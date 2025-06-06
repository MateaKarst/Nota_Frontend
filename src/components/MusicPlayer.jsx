import React, { useState, useRef, useEffect } from "react";
import "../styles/components/music-player.css";
import playIcon from "../assets/musicplayer/play.svg";
import pauseIcon from "../assets/musicplayer/pause.svg";
import heartIcon from "../assets/musicplayer/heart.svg";
import songCover from "../assets/musicplayer/song-cover.svg";

export const dummySong = {
  title: "Paris 2012",
  artist: "Lily Vermeer +12",
  cover: songCover,
  audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
};

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle song change
  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay prevented:", err);
          setIsPlaying(false);
        });
    }
  }, [song]);

  // Track time updates and duration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  // click to seek
  const handleSeek = (e) => {
    const bar = progressBarRef.current;
    if (!bar || !audioRef.current) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  if (!song) return null;

  return (
    <div className="mini-player">
      <img src={song.cover || songCover} alt="cover" className="mini-cover" />
      <div className="mini-info">
        <p className="mini-title">{song.title}</p>
        <p className="mini-artist">{song.artist}</p>
        <div
          className="progress-bar-container"
          onClick={handleSeek}
          ref={progressBarRef}
        >
          <div
            className="progress-bar"
            style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
          />
        </div>

      </div>
      <img
        src={heartIcon}
        alt="Like"
        className="mini-icon heart-icon"
        onClick={() => console.log("Liked")}
      />
      <img
        src={isPlaying ? pauseIcon : playIcon}
        alt="Play/Pause"
        className="mini-icon play-icon"
        onClick={togglePlay}
      />
      <audio src={song.audio} ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;
import React, { useState, useRef, useEffect } from "react";
import "../styles/components/music-player.css";
import playIcon from "../assets/musicplayer/play.svg";
import pauseIcon from "../assets/musicplayer/pause.svg";
import LikeButton from "./like-button";
import songCover from "../assets/musicplayer/song-cover.svg";

export const dummySong = {
  title: "Paris 2012",
  artist: "Lily Vermeer +12",
  cover: songCover,
  audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // replace with real song if needed
};

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [duration, setDuration] = useState(0); // Step 1
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
    setIsPlaying(true);
    }
  };

   useEffect(() => {
    if (song && audioRef.current) {
        audioRef.current.pause();
    audioRef.current.load(); //resets audio
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
    }
  }, [song]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    const setAudioDuration = () => {
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", setAudioDuration);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", setAudioDuration);
      }
    };
  }, []);

  if (!song) return null; // Don't render if there's no song

  return (
    <div className="mini-player">
      <img src={song.cover || songCover} alt="cover" className="mini-cover" />
      <div className="mini-info">
        <p className="mini-title">{song.title}</p>
        <p className="mini-artist">{song.artist}</p>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
          />
        </div>
      </div>
      <img
        src={LikeButton}
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

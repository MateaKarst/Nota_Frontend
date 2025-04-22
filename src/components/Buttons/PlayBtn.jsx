import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid"; //icon library
import ringtone from "../../assets/iphone-ringtone.mp3"; //testing
import "../../styles/variables.css";

const PlayerBtn = ({ showProgress = true, bordered = false }) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    //progress bar
    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100; // calculate the percentage of audio played aka makes the bar move
      setProgress(percent || 0); // set the progress and update it
    };

    audio.addEventListener("timeupdate", updateProgress); // listen for the audio to update
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };  
  }, []);

  //start and stop audio
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  //skipping through the audio in the progress bar
  const handleSeek = (e) => {
    const audio = audioRef.current; // find the audio
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // find the time where you clicked
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration; // calculate the new time the audo is onm on click
    audio.currentTime = newTime; // set the audio to the new time
  };

  return (
    <>
      <div className="player-container">
        <audio ref={audioRef} src={ringtone} />
        <div className="player-ui">
          <button
            onClick={togglePlay}
            className={`play-btn ${bordered ? "play-btn-bordered" : ""}`}
          >
            {isPlaying ? (
              <PauseIcon className="icon" />
            ) : (
              <PlayIcon className="icon" />
            )}
          </button>

          {showProgress && (
            <div
              className="progress-bar"
              ref={progressRef}
              onClick={handleSeek}
            >
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .player-container {
            background-color: black;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .player-ui {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .play-btn {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: var(--color-black);
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .play-btn:hover {
            background-color: var(--color-white-trans-50);
          }

          .play-btn-bordered {
            border: 2px solid white;
          }

          .icon {
            width: 36px;
            height: 36px;
            color: white;
          }

          .progress-bar {
            width: 300px;
            height: 7px;
            background-color: #444;
            border-radius: 5px;
            overflow: hidden;
          }

          .progress-fill {
            height: 100%;
            background-color: var(--color-pink);
            width: 0%;
            transition: width 0.1s linear;
          }
        `}
      </style>
    </>
  );
};

export default PlayerBtn;

/*calling the PlayerBtn example

  hiding both progress bar and border 
    <PlayerBtn showProgress={false} bordered={false} 
*/

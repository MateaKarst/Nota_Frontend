import React, { useState, useEffect, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import "../../styles/variables.css";

const TrackDescriptionBtn = ({
  showProgress = false,
  bordered = false,
  showSkipButtons = true,
  audioPlayersRef,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // between 0 and 1
  const progressBarRef = useRef(null);

  // Update progress continuously
  useEffect(() => {
    let interval;
    if (showProgress && isPlaying) {
      interval = setInterval(() => {
        const players = audioPlayersRef?.current || [];
        if (players.length > 0) {
          const player = players[0];
          const current = player.getCurrentTime();
          const duration = player.getDuration();
          if (duration > 0) {
            setProgress(current / duration);
          }
        }
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isPlaying, showProgress, audioPlayersRef]);

const togglePlay = () => {
  const players = audioPlayersRef?.current || [];

  if (isPlaying) {
    players.forEach((player) => {
      if (player && typeof player.pause === "function") {
        player.pause();
      }
    });
  } else {
    players.forEach((player) => {
      if (player && typeof player.play === "function") {
        player.play();
      }
    });
  }

  setIsPlaying(!isPlaying);
};


  const skipForward = () => {
    const players = audioPlayersRef?.current || [];
    players.forEach((player) => {
      const current = player.getCurrentTime();
      const duration = player.getDuration();
      player.seekTo(Math.min((current + 10) / duration, 1));
    });
  };

  const skipBackward = () => {
    const players = audioPlayersRef?.current || [];
    players.forEach((player) => {
      const current = player.getCurrentTime();
      const duration = player.getDuration();
      player.seekTo(Math.max((current - 10) / duration, 0));
    });
  };

  // Seek when user clicks progress bar
  const handleProgressClick = (e) => {
    const bar = progressBarRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = clickX / rect.width;

    const players = audioPlayersRef?.current || [];
    players.forEach((player) => {
      player.seekTo(newProgress);
    });

    setProgress(newProgress);
  };

  return (
    <>
      <div className="player-container">
        <div className="player-ui">
          <div className="player-controls">
            {showSkipButtons && (
              <button onClick={skipBackward} className="skip-btn">
                &#8634;
              </button>
            )}

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

            {showSkipButtons && (
              <button onClick={skipForward} className="skip-btn">
                &#8634;
              </button>
            )}
          </div>

          {showProgress && (
            <div
              className="progress-bar"
              ref={progressBarRef}
              onClick={handleProgressClick}
            >
              <div
                className="progress-bar-fill"
                style={{ width: `${progress * 100}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .player-ui {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 100%;
          }

          .progress-bar {
            width: 300px;
            max-width: 300px;
            height: 6px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
            overflow: hidden;
            margin-bottom: 8px;
            cursor: pointer;
            position: relative;
          }

          .progress-bar-fill {
            height: 100%;
            background-color: var(--color-pink);
            transition: width 0.2s ease;
          }

          .player-controls {
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
          }

          .play-btn {
            width: 70px;
            height: 70px;
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
            width: 30px;
            height: 30px;
            color: white;
          }

          .skip-btn {
            background-color: var(--color-black);
            color: white;
            border: none;
            font-size: 1.5rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }

          .skip-btn:hover {
            background-color: var(--color-white-trans-50);
          }

          .skip-btn:nth-child(3) {
            transform: scaleX(-1);
          }
        `}
      </style>
    </>
  );
};

export default TrackDescriptionBtn;
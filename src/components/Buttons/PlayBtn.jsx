import React, { useRef, useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid"; // icon library
import ringtone from "../../assets/editor/iphone-ringtone.mp3"; // testing ringtone
import "../../styles/variables.css";

const PlayBtn = ({
  showProgress = true,
  bordered = false,
  showSkipButtons = true,
  circleColor = "var(--color-black)",
  iconColor = "white",
  size = 80,
}) => {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    // progress bar
    const updateProgress = () => {
      const percent = (audio.currentTime / audio.duration) * 100; // calculate the percentage of audio played aka makes the bar move
      setProgress(percent || 0); // set the progress and update it
    };

    audio.addEventListener("timeupdate", updateProgress); // listen for the audio to update
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  // start and stop audio
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  // skipping through the audio in the progress bar
  const handleSeek = (e) => {
    const audio = audioRef.current; // find the audio
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // find the time where you clicked
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration; // calculate the new time the audio is on
    audio.currentTime = newTime; // set the audio to the new time
  };

  // skip forward 10 seconds
  const skipForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 10, audio.duration); // skip forward by 10 seconds, but not past the audio duration
  };

  // skip backward 10 seconds
  const skipBackward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 10, 0); // skip backward by 10 seconds, but not before the start of the audio
  };

  return (
    <>
      <div className="player-container">
        <audio ref={audioRef} src={ringtone} />{" "}
        {/*probaly has to be changed to an api  */}
        <div className="player-ui">
          <div className="player-controls">
            {/* skip backward button */}
            {showSkipButtons && (
              <button onClick={skipBackward} className="skip-btn">
                &#8634; {/* left arrow symbol for backward */}
              </button>
            )}

            <button
              onClick={togglePlay}
              className={`play-btn ${bordered ? "play-btn-bordered" : ""}`}
              style={{
                backgroundColor: circleColor,
                width: size,
                height: size,
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

            {/* skip forward button */}
            {showSkipButtons && (
              <button onClick={skipForward} className="skip-btn">
                &#8634;{" "}
                {/* left arrow symbol for backwards (mirrored in CSS) */}
              </button>
            )}
          </div>

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
          .player-ui {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .player-controls {
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
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
            transition: background-color 0.2s ease
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
            color: var(--color-pink);
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
            shadow: '0 20px 0px rgba(0, 0, 0, 0.1)',
          }

          .skip-btn:hover {
            background-color: var(--color-white-trans-50);
          }

          /* mirroring the skip backward icon for skip forward */
          .skip-btn:nth-child(3) {
            transform: scaleX(-1); /* Flipping the skip icon */
          }
        `}
      </style>
    </>
  );
};

export default PlayBtn;

/* calling the PlayerBtn example

  hiding both progress bar and border 
    <PlayerBtn showProgress={false} bordered={false} 
*/

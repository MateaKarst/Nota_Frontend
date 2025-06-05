import React, { useState, useEffect } from "react";
import '../styles/pages/record.css';
import { useNavigate } from 'react-router-dom';
import HeaderSongDescription from "../components/Headers/HeaderSongDescription";
import BasicBtn from '../components/Buttons/BasicBtn';
//import  { ReactComponent as NoteIcon } from '../assets/note2.svg';
import { ReactComponent as PlayIcon } from '../assets/musicplayer/play.svg';
import { ReactComponent as SoundWave } from '../assets/soundwave.svg';
import LoadingProgress from '../components/progressbar';
import Popup from "../components/PopUps/PopUp";

const RecordingPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [showSnippet, setShowSnippet] = useState(false);
  const [bpm, setBpm] = useState(120);

  const [isLoading, setIsLoading] = useState(false); 

  const increaseBpm = () => {
  setBpm(prev => Math.min(prev + 1, 300));
};

const decreaseBpm = () => {
  setBpm(prev => Math.max(prev - 1, 20));
};

const handleRestart = () => {
  setIsRecording(false);
  setSeconds(0);
  setHasRecorded(false);
  setShowSnippet(false);
  setBpm(120);
};

const [showPopup, setShowPopup] = useState(false);
const [popupData, setPopupData] = useState(null);

const navigate = useNavigate();

const handlePostClick = () => {
 setIsLoading(true);

   
    setTimeout(() => {
      setIsLoading(false);
    setShowPopup(true);
  }, 4000);
  };

const [showOverlay, setShowOverlay] = useState(false);
const [countdown, setCountdown] = useState(null); 





  
const handleRecordClick = () => {
  if (!isRecording) {
     if (!hasRecorded) setHasRecorded(true);
    setShowSnippet(false);
    setShowOverlay(true); 
    setCountdown(3);
  
    let count = 3;
    const countdownInterval = setInterval(() => {
      count--;
      if (count === 0) {
        clearInterval(countdownInterval);
        setShowOverlay(false);
        setCountdown(null);
        setIsRecording(true); 
      } else {
        setCountdown(count);
      }
    }, 1000);
  } else {
    setIsRecording(false);
    setShowSnippet(true);
    setShowOverlay(false);
    setCountdown(null);
  }
};

    
  useEffect(() => {
    let interval = null;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="recording-page">
       {/* <HeaderVariants mode="text" title="Record" /> */}
    <HeaderSongDescription mode="pinkText" title="Record" />



<div className="song-info">
 <div>  Paris 2012</div>
</div>

    {/* Metronome */}
    <div className="metronome">
      <button className="minus" onClick={decreaseBpm}>-</button>
      <div className="number-container">
        <p className="number">{bpm}</p>
        <p className="beats">Beats per minute</p>
      </div>
      <button className="plus" onClick={increaseBpm}>+</button>
    </div>

    {/* Record Button */}
    <button onClick={handleRecordClick} className="record-btn">
    </button>

    <p className="press-to-record">Press to record</p>

      {/* Timer */}
      <div className="timer">{formatTime(seconds)}</div>

      {/* Playback Options */}
 {!isRecording && hasRecorded && !showOverlay && (
      <>
    {showSnippet && (
    <div className="recording-snippet">
        <div className="snippet-row">
        <PlayIcon className="play-icon" />
        <SoundWave />
        </div>
    </div>
    )}

    <div className="control-buttons">
      <BasicBtn type="mediumOutline" text='Restart' onClick={handleRestart}   />
      <BasicBtn type="small" text='Post' onClick={handlePostClick} />
    </div>
  </>
)}

{showOverlay && (
  <>
  <div className="overlay-backdrop"></div>
  <div className="overlay">
    {countdown && <p className="overlay-count">{countdown}</p>}
  </div>
  </>
)}

{showPopup && (
  <div className="popup-overlay">
    <div className="popup-container">
      <Popup
        type="upload-to-editor" 
        onClose={() => setShowPopup(false)} 
        onNavigate={() => navigate("/editor2")}
      />
    </div>
  </div>
)}

{isLoading && <LoadingProgress label="Processing..." isLoading={isLoading} />}
</div>
  );
};



export default RecordingPage;

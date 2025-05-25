import React, { useState, useEffect } from "react";
import '../styles/pages/record.css';
import HeaderVariants from "../components/Headers/HeaderVariants";
import BasicBtn from '../components/Buttons/BasicBtn';
//import  { ReactComponent as NoteIcon } from '../assets/note2.svg';
import { ReactComponent as PlayIcon } from '../assets/musicplayer/play.svg';
import { ReactComponent as SoundWave } from '../assets/soundwave.svg';

const RecordingPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [showSnippet, setShowSnippet] = useState(false);


  //toggles recording state
const handleRecordClick = () => {
  if (!isRecording) {
    // Starting the recording
    if (!hasRecorded) setHasRecorded(true);
    setShowSnippet(false); // hide snippet while recording
  } else {
    // Stopping the recording
    setShowSnippet(true); // show snippet after pause
  }

  setIsRecording(prev => !prev); // toggle recording state
};

    // Start/stop the timer when recording
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

  // Format seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="recording-page">
       <HeaderVariants mode="text" title="Record" />


<div className="song-info">
{/* <NoteIcon className="note-icon" /> */}
 <div>  Paris 2012</div>
</div>

    {/* Metronome */}
        <div className="metronome">
    <button className="minus">-</button>
    <div className="number-container">
        <p className="number">120</p>
        <p className="beats">Beats per minute</p>
    </div>
    <button className="plus">+</button>
    </div>

    {/* Record Button */}
    <button onClick={handleRecordClick} className="record-btn">
    </button>

    <p className="press-to-record">Press to record</p>

      {/* Timer */}
      <div className="timer">{formatTime(seconds)}</div>

      {/* Playback Options */}
    {!isRecording && hasRecorded && (
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
      <BasicBtn type="mediumOutline" text='Restart' />
      <BasicBtn type="small" text='Post' />
    </div>
  </>
)}
</div> 
  );
};



export default RecordingPage;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSongDescription from "../components/Headers/HeaderSongDescription";
import BasicBtn from "../components/Buttons/BasicBtn";
import { ReactComponent as PlayIcon } from "../assets/musicplayer/play.svg";
import LoadingProgress from "../components/progressbar";
import Popup from "../components/PopUps/PopUp";
import WaveSurfer from "wavesurfer.js";

import "../styles/pages/record.css";

const RecordingPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [showSnippet, setShowSnippet] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const navigate = useNavigate();

  const increaseBpm = () => setBpm((prev) => Math.min(prev + 1, 300));
  const decreaseBpm = () => setBpm((prev) => Math.max(prev - 1, 20));

  const handleRestart = () => {
    setIsRecording(false);
    setSeconds(0);
    setHasRecorded(false);
    setShowSnippet(false);
    setBpm(120);
    setAudioBlob(null);
    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
      wavesurferRef.current = null;
    }
  };

const handlePostClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/home");  // navigate after loading finishes
    }, 4000);
  };

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
          startRecording();
        } else {
          setCountdown(count);
        }
      }, 1000);
    } else {
      stopRecording();
      setIsRecording(false);
      setShowSnippet(true);
      setShowOverlay(false);
      setCountdown(null);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        setShowSnippet(true); // trigger render of the waveformRef div

        setTimeout(() => {
          initWaveSurfer(blob); // wait for DOM update
        }, 0); // next tick, after DOM updates
      };

      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("Microphone access denied or error:", error);
      setIsRecording(false);
      setShowOverlay(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const initWaveSurfer = (blob) => {
    const objectUrl = URL.createObjectURL(blob);
    const rootStyles = getComputedStyle(document.documentElement);

    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
    }

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: rootStyles.getPropertyValue("--color-orange") || "#FFA500",
      progressColor:
        rootStyles.getPropertyValue("--color-orange-dark") || "#CC7000",
      responsive: true,
      height: 50,
      cursorWidth: 0,
    });

    wavesurferRef.current.load(objectUrl);
  };

  useEffect(() => {
    let interval = null;
    if (isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  useEffect(() => {
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="recording-page">
      <HeaderSongDescription mode="pinkText" title="Record" />
      <div className="song-info">
        <div>Paris 2012</div>
      </div>

      {/* metronome */}
      <div className="metronome">
        <button className="minus" onClick={decreaseBpm}>
          -
        </button>
        <div className="number-container">
          <p className="number">{bpm}</p>
          <p className="beats">Beats per minute</p>
        </div>
        <button className="plus" onClick={increaseBpm}>
          +
        </button>
      </div>

      {/* record button */}
      <button onClick={handleRecordClick} className="record-btn"></button>
      <p className="press-to-record">Press to record</p>

      <div className="timer">{formatTime(seconds)}</div>

      {/* playback snippet */}
      {!isRecording && hasRecorded && !showOverlay && (
        <>
          {showSnippet && audioBlob && (
            <div className="recording-snippet">
              <div className="snippet-row">
                <button
                  className="play-icon"
                  onClick={() => wavesurferRef.current?.playPause()}
                >
                  <PlayIcon />
                </button>
                <div ref={waveformRef} className="waveform"></div>
              </div>
            </div>
          )}
          <div className="control-buttons">
            <BasicBtn
              type="mediumOutline"
              text="Restart"
              onClick={handleRestart}
            />
            <BasicBtn type="small" text="Post" onClick={handlePostClick} />
          </div>
        </>
      )}

      {/* countdown */}
      {showOverlay && (
        <>
          <div className="overlay-backdrop"></div>
          <div className="overlay">
            {countdown && <p className="overlay-count">{countdown}</p>}
          </div>
        </>
      )}

      {/* loading */}
      {isLoading && (
        <LoadingProgress label="Processing..." isLoading={isLoading} />
      )}
    </div>
  );
};

export default RecordingPage;
import React, { useState, useRef, useEffect } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import ringtone1 from "../../assets/editor/bangla-background-music-no-copyright-background-music-218993.mp3";
import "../../styles/components/editor/timeline-grid.css";

// Constant values
const TRACKS = [
  { name: "Guitar", url: ringtone1, offset: 0 }, // The offset is where the track starts in the timeline (in seconds)
  { name: "Vocal", url: ringtone1, offset: 1 }, // e.g., Vocal starts 1 second into the timeline
  { name: "Piano", url: ringtone1, offset: 2 }, // Piano starts at 2 seconds
  { name: "Flute", url: ringtone1, offset: 3 }, // Flute starts at 3 seconds
];

const PIXELS_PER_SECOND = 100;
const TIMELINE_OFFSET = 100;
const TIME_INTERVAL = 0.5;

const TimelineGrid = () => {
  const [playheadX, setPlayheadX] = useState(TIMELINE_OFFSET);
  const [timeMarkers] = useState(Array.from({ length: 120 }, (_, i) => i * TIME_INTERVAL));
  const waveRefs = useRef([]);
  const intervalRef = useRef(null);
  const timelineRef = useRef(null);

  const pxToSec = (px) => (px - TIMELINE_OFFSET) / PIXELS_PER_SECOND;
  const secToPx = (sec) => sec * PIXELS_PER_SECOND + TIMELINE_OFFSET;

  const syncPlayheadToWaves = (posX) => {
    const currentTime = pxToSec(posX);
    waveRefs.current.forEach((wave) => wave?.setTime(currentTime));
  };

  const startPlayback = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setPlayheadX((prevX) => {
        const newX = prevX + PIXELS_PER_SECOND * TIME_INTERVAL;
        syncPlayheadToWaves(newX);
        return newX;
      });
    }, TIME_INTERVAL * 1000);

    waveRefs.current.forEach((wave) => wave?.play());
  };

  const stopPlayback = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    waveRefs.current.forEach((wave) => wave?.pause());
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const timelineLeft = timelineRef.current.getBoundingClientRect().left;
    const initialX = e.clientX - timelineLeft;
    setPlayheadX(initialX);
    syncPlayheadToWaves(initialX);

    const handleMouseMove = (e) => {
      const moveX = e.clientX - timelineLeft;
      setPlayheadX(moveX);
      syncPlayheadToWaves(moveX);
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDrag);
  };

  useEffect(() => {
    const maxPos = secToPx(timeMarkers.length * TIME_INTERVAL);
    if (playheadX >= maxPos) {
      setPlayheadX(TIMELINE_OFFSET);
      stopPlayback();
      syncPlayheadToWaves(TIMELINE_OFFSET);
    }
  }, [playheadX, timeMarkers.length]);

  return (
    <div className="timeline-container">
      <button onClick={startPlayback}>▶ Play</button>
      <button onClick={stopPlayback}>⏸ Stop</button>

      <div className="timeline-wrapper" ref={timelineRef}>
        <div className="time-ruler">
          {timeMarkers.map((time, i) => (
            <div key={i} className="time-marker">{time}s</div>
          ))}
        </div>

        <div className="tracks">
          <div
            className="playhead"
            style={{ left: `${playheadX}px` }}
            onMouseDown={handleMouseDown}
          />

          {TRACKS.map((track, i) => (
            <div key={i} className="track-row" style={{ left: `${secToPx(track.offset)}px` }}>
              <div className="track-name">{track.name}</div>
              <div className="track-grid">
                <Waveform
                  url={track.url}
                  onReady={(ws) => (waveRefs.current[i] = ws)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Waveform = ({ url, onReady }) => {
  const containerRef = useRef(null);

  const { wavesurfer } = useWavesurfer({
    container: containerRef,
    height: 60,
    waveColor: "#b4b4ff",
    progressColor: "#5050c8",
    url,
    normalize: true,
  });

  useEffect(() => {
    if (wavesurfer && onReady) onReady(wavesurfer);
  }, [wavesurfer, onReady]);

  return <div ref={containerRef} style={{ width: "100%" }} />;
};

export default TimelineGrid;

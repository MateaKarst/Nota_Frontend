import React, { useState, useRef, useEffect } from "react";
import "../styles/components/timeline-grid.css";

const TimelineGrid = () => {
  const [timeMarkers] = useState(Array.from({ length: 120 }, (_, i) => i * 0.5)); // Time in seconds
  const [tracks] = useState(["Guitar", "Vocal", "Piano", "Flute"]); // Track names
  const [playheadPosition, setPlayheadPosition] = useState(100); // Start from 100px from the left
  const playheadRef = useRef(null);
  const intervalRef = useRef(null);
  const timelineRef = useRef(null);

  // Function to start playhead movement
  const startPlayback = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setPlayheadPosition((prev) => prev + 50); // Move 50px every 0.5s
      }, 500); // Moves every 0.5s
    }
  };

  // Function to stop playhead movement
  const stopPlayback = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Reset playhead when reaching end
  useEffect(() => {
    if (playheadPosition >= timeMarkers.length * 10 + 100) { // Adjust based on timeline size
      setPlayheadPosition(100); // Reset playhead to start position
      stopPlayback();
    }
  }, [playheadPosition, timeMarkers.length]);

  // Dragging logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const offsetX = e.clientX - timelineRect.left;
    setPlayheadPosition(offsetX);

    const handleMouseMove = (moveEvent) => {
      const moveX = moveEvent.clientX - timelineRect.left;
      setPlayheadPosition(moveX);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="timeline-container">
      <button onClick={startPlayback}>▶ Play</button>
      <button onClick={stopPlayback}>⏸ Stop</button>

      <div className="timeline-wrapper" ref={timelineRef}>
        <div className="time-ruler">
          {timeMarkers.map((time, index) => (
            <div key={index} className="time-marker">
              {time}s
            </div>
          ))}
        </div>

        <div className="tracks">
          <div
            className="playhead"
            ref={playheadRef}
            style={{ left: `${playheadPosition}px` }}
            onMouseDown={handleMouseDown} // Add mouse down event to handle dragging
          ></div>

          {tracks.map((track, index) => (
            <div key={index} className="track-row">
              <div className="track-name">{track}</div>
              <div className="track-grid">
                {timeMarkers.map((_, i) => (
                  <div key={i} className="grid-cell"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineGrid;

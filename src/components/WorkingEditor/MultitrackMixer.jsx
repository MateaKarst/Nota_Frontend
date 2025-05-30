import React, { useEffect, useRef, useState } from 'react';
import Drum from '../../assets/instrument-samples/01_DrumLoop.wav';
import Guitar from '../../assets/instrument-samples/13_ElecGtr1.wav';
import Bass from '../../assets/instrument-samples/11_Bass.wav';
import Button from '../Buttons/BasicBtn';
import EditorInstrument from '../Editor/EditorInstrument';

import { ReactComponent as GuitarIcon } from '../../assets/instruments/guitar.svg';
import { ReactComponent as DrumIcon } from '../../assets/instruments/drum.svg';
import { ReactComponent as OtherInstrumentIcon } from '../../assets/instruments/your-track.svg';

import PlayIcon from '../../assets/icons/play-icon.svg';
import PauseIcon from '../../assets/icons/pause-icon.svg';
import ForwardIcon from '../../assets/icons/5secondsForward-icon.svg';
import BackwardIcon from '../../assets/icons/5secondsBack-icon.svg';

import '../../styles/editor/editor.css';
import '../../styles/variables.css';

const MultitrackMixer = () => {
  const containerRef = useRef();
  const scrollContainerRef = useRef();
  const playButtonRef = useRef();
  const forwardButtonRef = useRef();
  const backwardButtonRef = useRef();
  const zoomRef = useRef();
  const animationFrameRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const [tracks, setTracks] = useState([
    {
      id: 1,
      label: 'Drum',
      url: Drum,
      startPosition: 4,
      envelope: [
        { time: 2, volume: 0.2 },
        { time: 10, volume: 0.2 },
        { time: 22, volume: 0.2 },
      ],
      volume: 0.95,
      options: {
        waveColor: 'hsl(341, 100%, 48%, 1)',
        progressColor: 'rgba(163, 19, 50, 1)',
      },
      icon: DrumIcon,
    },
    {
      id: 2,
      label: 'Guitar',
      url: Guitar,
      startPosition: 1,
      envelope: [
        { time: 2, volume: 0.5 },
        { time: 20, volume: 0.5 },
        { time: 40, volume: 0.5 },
      ],
      volume: 0.8,
      options: {
        waveColor: 'hsl(41, 100%, 50%)',
        progressColor: 'hsl(32, 96%, 37%)',
      },
      icon: GuitarIcon,
    },
    {
      id: 3,
      label: 'Bass',
      url: Bass,
      startPosition: 3,
      envelope: [
        { time: 2, volume: 0.5 },
        { time: 10, volume: 0.5 },
        { time: 22, volume: 0.5 },
      ],
      volume: 0.8,
      options: {
        waveColor: 'hsl(269, 100%, 50%)',
        progressColor: 'hsl(269, 96%, 36%)',
      },
      icon: OtherInstrumentIcon,
    },
  ]);

  const multitrackRef = useRef(null);

  useEffect(() => {
    if (!tracks.length) {
      if (multitrackRef.current) {
        multitrackRef.current.destroy();
        multitrackRef.current = null;
      }
      containerRef.current.innerHTML = '';
      return;
    }

    if (!window.Multitrack) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/wavesurfer-multitrack/dist/multitrack.min.js';
      script.async = true;
      script.onload = () => initMultitrack();
      document.body.appendChild(script);

      return () => {
        if (multitrackRef.current) {
          multitrackRef.current.destroy();
          multitrackRef.current = null;
        }
        document.body.removeChild(script);
      };
    } else {
      initMultitrack();
    }

    function initMultitrack() {
      containerRef.current.innerHTML = '';
      const Multitrack = window.Multitrack;

      multitrackRef.current = Multitrack.create(tracks, {
        container: containerRef.current,
        minPxPerSec: 100,
        rightButtonDrag: false,
        cursorWidth: 1,
        cursorColor: '#FFFFFF',
        trackBackground: 'hsla(0, 0%, 100%, 0.1)',
        trackBorderColor: 'hsla(0, 0%, 100%, 0.3)',
        dragBounds: true,
        envelopeOptions: {
          lineColor: 'rgba(255, 255, 255, 0.7)',
          lineWidth: 1.5,
          dragPointSize: window.innerWidth < 400 ? 20 : 10,
          dragPointFill: 'rgba(255, 255, 255, 0.9)',
          dragPointStroke: 'rgba(255, 255, 255, 0.8)',
        },
        timegrid: {
          show: true,
          interval: 0.5,
          primaryLabelInterval: 1,
          color: '#343331',
          lineWidth: 1,
          font: '12px Karla',
          textColor: '#fff',
        },
      });

      if (playButtonRef.current) {
        playButtonRef.current.disabled = false;

        playButtonRef.current.onclick = () => {
          if (multitrackRef.current.isPlaying()) {
            multitrackRef.current.pause();
            setIsPlaying(false);
            cancelAnimationFrame(animationFrameRef.current);
          } else {
            multitrackRef.current.play();
            setIsPlaying(true);
            startAutoScroll();
          }
        };
      }
    }

    function startAutoScroll() {
      const scroll = () => {
        if (!multitrackRef.current || !scrollContainerRef.current) return;
        const time = multitrackRef.current.getCurrentTime();
        const pxPerSec = multitrackRef.current.options.minPxPerSec;
        const scrollX = time * pxPerSec - 100;
        scrollContainerRef.current.scrollLeft = scrollX;
        animationFrameRef.current = requestAnimationFrame(scroll);
      };
      animationFrameRef.current = requestAnimationFrame(scroll);
    }

    return () => {
      if (multitrackRef.current) {
        multitrackRef.current.destroy();
        multitrackRef.current = null;
      }
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [tracks]);

  const handleDeleteTrack = (id) => {
    setTracks((prev) => prev.filter((track) => track.id !== id));
  };

  return (
    <div className="multitrack-container">
      <label className="zoom">
        Zoom:{' '}
        <input
          type="range"
          min="10"
          max="100"
          defaultValue="10"
          ref={zoomRef}
          onInput={(e) => {
            if (multitrackRef.current) {
              multitrackRef.current.zoom(e.target.valueAsNumber);
            }
          }}
        />
      </label>

      <div className="multitrack-main">
        <div className="instruments-column">
          {tracks.map(({ id, label, icon }) => (
            <EditorInstrument
              key={id}
              id={id}
              label={label}
              icon={icon}
              onDelete={handleDeleteTrack}
            />
          ))}
        </div>

        <div className="multitrack-scroll" ref={scrollContainerRef} style={{ overflowX: 'auto', width: '100%' }}>
          <div id="container" ref={containerRef} style={{ background: '#343331', color: '#fff', minWidth: '100%' }} />
        </div>
      </div>

      <div className="button-block">
        <Button text="Cut" type="medium" />
        <Button text="Split" type="medium" />
      </div>

      <div className="button-wrapper">
        <button id="backward" ref={backwardButtonRef} onClick={() => multitrackRef.current?.setTime(multitrackRef.current.getCurrentTime() - 5)}>
          <img src={BackwardIcon} alt="Back 5s" />
        </button>
        <button id="play" ref={playButtonRef} disabled>
          <img src={isPlaying ? PauseIcon : PlayIcon} alt="Play/Pause" />
        </button>
        <button id="forward" ref={forwardButtonRef} onClick={() => multitrackRef.current?.setTime(multitrackRef.current.getCurrentTime() + 5)}>
          <img src={ForwardIcon} alt="Forward 5s" />
        </button>
      </div>
    </div>
  );
};

export default MultitrackMixer;

import React, { useEffect, useRef, useState } from 'react';
import Button from '../Buttons/BasicBtn';
import EditorInstrument from '../Editor-Useless/EditorInstrument';
import API_ENDPOINTS from '../../routes/apiEndpoints';
import { useAuth } from '../../context/AuthProvider';

import { ReactComponent as GuitarIcon } from '../../assets/instruments/guitar.svg';
import { ReactComponent as DrumIcon } from '../../assets/instruments/drum.svg';
import { ReactComponent as OtherInstrumentIcon } from '../../assets/instruments/your-track.svg';

import PlayIcon from '../../assets/icons/play-icon.svg';
import PauseIcon from '../../assets/icons/pause-icon.svg';
import ForwardIcon from '../../assets/icons/5secondsForward-icon.svg';
import BackwardIcon from '../../assets/icons/5secondsBack-icon.svg';

import '../../styles/editor/editor.css';
import '../../styles/variables.css';

const MultitrackMixer = ({ songId }) => {
  const containerRef = useRef();
  const scrollContainerRef = useRef();
  const playButtonRef = useRef();
  const forwardButtonRef = useRef();
  const backwardButtonRef = useRef();
  const zoomRef = useRef();
  const animationFrameRef = useRef();

  const { user } = useAuth();

  // You need the tracks state here!
  const [tracks, setTracks] = useState([]);
  const [, setSong] = useState([]);
  const [, setLoading] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const multitrackRef = useRef(null);

  // Initialize or update multitrack player when tracks change
  useEffect(() => {
    if (!tracks.length) {
      if (multitrackRef.current) {
        multitrackRef.current.destroy();
        multitrackRef.current = null;
      }
      if (containerRef.current) containerRef.current.innerHTML = '';
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
      if (!containerRef.current) return;
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

  // delete track handler
  const handleDeleteTrack = (id) => {
    setTracks((prev) => prev.filter((track) => track.id !== id));
  };

  // fetch song data on mount and when user or id changes
  useEffect(() => {
    const fetchSongData = async () => {
      if (!user || !songId) return;
      try {
        const response = await fetch(API_ENDPOINTS.SONGS.SINGLE(songId), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          const tracksWithIcons = (data.tracks || []).map(track => ({
            ...track,
            icon:
              track.label === 'Drum' ? DrumIcon :
                track.label === 'Guitar' ? GuitarIcon :
                  OtherInstrumentIcon
          }));

          setTracks(tracksWithIcons);
          setSong(data);
        } else {
          console.error("Error fetching song tracks:", data.message);
        }
      } catch (error) {
        console.error("Error fetching song:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongData();
  }, [user, songId]);

  if (!user) return null;

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
        <button
          id="backward"
          ref={backwardButtonRef}
          onClick={() => multitrackRef.current?.setTime(multitrackRef.current.getCurrentTime() - 5)}
        >
          <img src={BackwardIcon} alt="Back 5s" />
        </button>
        <button id="play" ref={playButtonRef} disabled>
          <img src={isPlaying ? PauseIcon : PlayIcon} alt="Play/Pause" />
        </button>
        <button
          id="forward"
          ref={forwardButtonRef}
          onClick={() => multitrackRef.current?.setTime(multitrackRef.current.getCurrentTime() + 5)}
        >
          <img src={ForwardIcon} alt="Forward 5s" />
        </button>
      </div>
    </div>
  );
};

export default MultitrackMixer;

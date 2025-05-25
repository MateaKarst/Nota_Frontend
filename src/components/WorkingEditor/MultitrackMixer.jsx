import React, { useEffect, useRef, useState } from 'react';
import ringtone1 from '../../assets/editor/iphone-ringtone.mp3';
import Drum from '../../assets/instrument-samples/01_DrumLoop.wav';
import Guitar from '../../assets/instrument-samples/13_ElecGtr1.wav';
import Bass from '../../assets/instrument-samples/11_Bass.wav';
import Button from '../Buttons/BasicBtn';
import Instrument from '../Editor/EditorInstrument';

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
  const scrollContainerRef = useRef(); // Додаємо ref для скроллу
  const initializedRef = useRef(false);
  const playButtonRef = useRef();
  const forwardButtonRef = useRef();
  const backwardButtonRef = useRef();
  const zoomRef = useRef();
  const animationFrameRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  let multitrack;

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/wavesurfer-multitrack/dist/multitrack.min.js';
    script.async = true;
    script.onload = () => {
      initMultitrack();
    };
    document.body.appendChild(script);

    return () => {
      if (multitrack && multitrack.destroy) {
        multitrack.destroy();
      }
      document.body.removeChild(script);
      cancelAnimationFrame(animationFrameRef.current); // зупинити анімацію при демонтажі
    };
  }, []);

  const initMultitrack = () => {
    containerRef.current.innerHTML = '';
    const Multitrack = window.Multitrack;

    multitrack = Multitrack.create(
      [
        {
          id: 1,
          draggable: true,
          startPosition: 4,
          url: Drum,
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
        },
        {
          id: 2,
          draggable: true,
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
          url: Guitar,
        },
        {
          id: 3,
          draggable: true,
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
          url: Bass,
        },
      ],
      {
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
      }
    );

    playButtonRef.current.disabled = true;

    multitrack.once('canplay', () => {
      playButtonRef.current.disabled = false;

      playButtonRef.current.onclick = () => {
        if (multitrack.isPlaying()) {
          multitrack.pause();
          setIsPlaying(false);
          cancelAnimationFrame(animationFrameRef.current);
        } else {
          multitrack.play();
          setIsPlaying(true);
          startAutoScroll();
        }
      };

      const trackEls = containerRef.current.querySelectorAll('.track');
      const trackNames = ['Click', 'Main Melody', 'Background Music', 'Outro Layer'];

      trackEls.forEach((trackEl, index) => {
        trackEl.classList.add('multitrack-track');
        const labelDiv = document.createElement('div');
        labelDiv.className = 'multitrack-label';
        labelDiv.textContent = trackNames[index] || `Track ${index}`;
        trackEl.prepend(labelDiv);
        const infoEl = trackEl.querySelector('.info');
        if (infoEl) infoEl.classList.add('multitrack-info');
        const waveEl = trackEl.querySelector('.wave');
        if (waveEl) waveEl.classList.add('multitrack-wave');
      });
    });

    forwardButtonRef.current.onclick = () => {
      multitrack.setTime(multitrack.getCurrentTime() + 5);
    };

    backwardButtonRef.current.onclick = () => {
      multitrack.setTime(multitrack.getCurrentTime() - 5);
    };

    zoomRef.current.oninput = () => {
      multitrack.zoom(zoomRef.current.valueAsNumber);
    };
  };

  const startAutoScroll = () => {
    const scroll = () => {
      if (!multitrack || !scrollContainerRef.current) return;
      const time = multitrack.getCurrentTime();
      const pxPerSec = multitrack.options.minPxPerSec;
      const scrollX = time * pxPerSec - 100; // 100 — зміщення, щоб курсор не був по краю
      scrollContainerRef.current.scrollLeft = scrollX;
      animationFrameRef.current = requestAnimationFrame(scroll);
    };
    animationFrameRef.current = requestAnimationFrame(scroll);
  };

  return (
    <div className="multitrack-container">
      <label className='zoom'>
        Zoom: <input type="range" min="10" max="100" defaultValue="10" ref={zoomRef} />
      </label>

      <div className='multitrack-main'>
        <div className='instruments-column'>
          <Instrument label="Drum" icon={DrumIcon} />
          <Instrument label="Guitar" icon={GuitarIcon} />
          <Instrument label="Bass" icon={OtherInstrumentIcon} />
        </div>

        {/* Додаємо scrollContainerRef тут */}
        <div
          className="multitrack-scroll"
          ref={scrollContainerRef}
          style={{ overflowX: 'auto', width: '100%' }}
        >
          <div
            id="container"
            ref={containerRef}
            style={{ background: '#343331', color: '#fff', minWidth: '100%' }}
          ></div>
        </div>
      </div>

      <div className="button-block">
        <Button text="Cut" type="medium"></Button>
        <Button text="Split" type="medium"></Button>
      </div>

      <div className='button-wrapper'>
        <button id="backward" ref={backwardButtonRef}>
          <img src={BackwardIcon} alt='Back 5s' />
        </button>
        <button id="play" ref={playButtonRef}>
          <img src={isPlaying ? PauseIcon : PlayIcon} alt='Play/Pause' />
        </button>
        <button id="forward" ref={forwardButtonRef}>
          <img src={ForwardIcon} alt='Forward 5s' />
        </button>
      </div>
    </div>
  );
};

export default MultitrackMixer;

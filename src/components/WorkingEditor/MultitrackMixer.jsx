import React, { useEffect, useRef } from 'react';
import ringtone1 from '../../assets/editor/iphone-ringtone.mp3'
import ringtone2 from '../../assets/editor/bangla-background-music-no-copyright-background-music-218993.mp3'
import Drum from '../../assets/instrument-samples/01_DrumLoop.wav'
import Guitar from '../../assets/instrument-samples/13_ElecGtr1.wav'
import Bass from '../../assets/instrument-samples/11_Bass.wav'
import '../../styles/editor/editor.css'
import '../../styles/variables.css'

const MultitrackMixer = () => {
  const containerRef = useRef();
  const initializedRef = useRef(false); 
  const playButtonRef = useRef();
  const forwardButtonRef = useRef();
  const backwardButtonRef = useRef();
  const zoomRef = useRef();
  const trackNames = ['Click', 'Main Melody', 'Background Music', 'Outro Layer'];

  let multitrack;

  useEffect(() => {
    if (initializedRef.current) return;    // ← do nothing on 2nd mount
    initializedRef.current = true;
    // Load external script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/wavesurfer-multitrack/dist/multitrack.min.js';
    script.async = true;
    script.onload = () => {
      initMultitrack();
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (multitrack && multitrack.destroy) {
        multitrack.destroy();
      }
      document.body.removeChild(script);
    };
  }, []);

  const initMultitrack = () => {
    containerRef.current.innerHTML = '';
    const Multitrack = window.Multitrack;

    multitrack = Multitrack.create(
      [
        // { id: 0,
        //   draggable: true,
        //   startPosition: 14,
        //   url: ringtone1,
        // },
        {
          id: 1,
          draggable: true,
          startPosition: 4,
          url: Drum,
           envelope: [
           { time: 2, volume: 0.2 },
           { time: 10, volume: 0.2 },
           { time: 20, volume: 0.2 },
          //   // { time: 264, volume: 0 },
           ],
          volume: 0.95,
          options: {
            waveColor: 'hsl(341, 100%, 48%, 1)',
            progressColor: 'rgba(163, 19, 50, 1)',
          },
          // intro: {
          //   endTime: 16,
          //   label: 'Intro',
          //   color: '#FFE56E',
          // },
          // markers: [
          //   { time: 21, label: 'M1', color: 'hsla(600, 100%, 30%, 0.5)' },
          //   { time: 22.7, label: 'M2', color: 'hsla(400, 100%, 30%, 0.5)' },
          //   { time: 24, label: 'M3', color: 'hsla(123, 54.50%, 34.50%, 0.50)' },
          //   { time: 27, label: 'M4', color: 'hsla(200, 50%, 70%, 0.5)' },
          // ],
        },
        {
          id: 2,
          draggable: true,
          startPosition: 1,
          //startCue: 2.1,
          //endCue: 20,
          //fadeInEnd: 8,
          //fadeOutStart: 14,
          //envelope: true,
          envelope: [
            { time: 2, volume: 0.5 },
            { time: 20, volume: 0.5 },
            { time: 23, volume: 0.5 },
           //   // { time: 264, volume: 0 },
            ],
          volume: 0.8,
          options: {
            waveColor: 'hsl(41, 100%, 50%)',
            progressColor: 'hsl(32, 96%, 37%)',
          },
          url: Guitar
        },
        {
          id: 3,
          draggable: true,
          startPosition: 3,
          envelope: [
            { time: 2, volume: 0.5 },
            { time: 10, volume: 0.5 },
            { time: 22, volume: 0.5 },
           //   // { time: 264, volume: 0 },
            ],
          volume: 0.8,
          options: {
            waveColor: 'hsl(269, 100%, 50%)',
            progressColor: 'hsl(269, 96%, 36%)',
          },
          url: Bass,
          
        },
        //         {
        //   id: 4,
        //   draggable: true,
        //   startPosition: 3,
        //   envelope: [
        //     { time: 2, volume: 0.5 },
        //     { time: 10, volume: 0.5 },
        //     { time: 22, volume: 0.5 },
        //    //   // { time: 264, volume: 0 },
        //     ],
        //   volume: 0.8,
        //   options: {
        //     waveColor: 'hsl(269, 100%, 50%)',
        //     progressColor: 'hsl(269, 96%, 36%)',
        //   },
        //   url: Bass,
          
        // },
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
        textColor: '#fff'
      },
    },
      
    );

    // Bind buttons and controls
    playButtonRef.current.disabled = true;
    multitrack.once('canplay', () => {
      playButtonRef.current.disabled = false;
    
      playButtonRef.current.onclick = () => {
        multitrack.isPlaying() ? multitrack.pause() : multitrack.play();
        playButtonRef.current.textContent = multitrack.isPlaying() ? 'Pause' : 'Play';
      };
    
      // 🔽 Inject CSS class names for layout
      const trackEls = containerRef.current.querySelectorAll('.track');
      trackEls.forEach((trackEl, index) => {
        trackEl.classList.add('multitrack-track');
      
        // Inject a label div before waveform
        const labelDiv = document.createElement('div');
        labelDiv.className = 'multitrack-label';
        labelDiv.textContent = trackNames[index] || `Track ${index}`;
        trackEl.prepend(labelDiv);
      
        const infoEl = trackEl.querySelector('.info');
        if (infoEl) {
          infoEl.classList.add('multitrack-info');
        }
      
        const waveEl = trackEl.querySelector('.wave');
        if (waveEl) {
          waveEl.classList.add('multitrack-wave');
        }
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

    // Example event
    multitrack.on('volume-change', ({ id, volume }) => {
      console.log(`Track ${id} volume updated to ${volume}`);
    });

    
  };

  return (
    <div className="multitrack-container">
      <label>
        Zoom: <input type="range" min="10" max="100" defaultValue="10" ref={zoomRef} />
      </label>

      <div style={{ margin: '2em 0' }}>
        <button id="play" ref={playButtonRef}>
          Play
        </button>
        <button id="forward" ref={forwardButtonRef}>
          Forward 5s
        </button>
        <button id="backward" ref={backwardButtonRef}>
          Back 5s
        </button>
      </div>

      <div
        id="container"
        ref={containerRef}
        style={{ background: '#343331', color: '#fff', height: '400px' }}
      ></div>
    </div>
  );
};

export default MultitrackMixer;

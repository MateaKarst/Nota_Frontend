import React, { useEffect, useRef } from 'react';
import ringtone1 from '../../assets/editor/iphone-ringtone.mp3'
import ringtone2 from '../../assets/editor/bangla-background-music-no-copyright-background-music-218993.mp3'
import '../../styles/editor/editor.css'

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
          startPosition: 14,
          url: ringtone1,
          // envelope: [
          //   { time: 2, volume: 0.5 },
          //   { time: 10, volume: 0.8 },
          //    { time: 22, volume: 0.8 },
          //   // { time: 264, volume: 0 },
          // ],
          volume: 0.95,
          options: {
            waveColor: 'hsl(46, 87%, 49%)',
            progressColor: 'hsl(46, 87%, 20%)',
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
          volume: 0.8,
          options: {
            waveColor: 'hsl(161, 87%, 49%)',
            progressColor: 'hsl(161, 87%, 20%)',
          },
          url: ringtone2
        },
        {
          id: 3,
          draggable: true,
          startPosition: 290,
          volume: 0.8,
          options: {
            waveColor: 'hsl(161, 87%, 49%)',
            progressColor: 'hsl(161, 87%, 20%)',
          },
          url: ringtone1,
          
        },
        
      ],
      {
        container: containerRef.current,
        minPxPerSec: 10,
        rightButtonDrag: false,
        cursorWidth: 2,
        cursorColor: '#D72F21',
        trackBackground: '#2D2D2D',
        trackBorderColor: '#7C7C7C',
        dragBounds: true,
        envelopeOptions: {
          lineColor: 'rgba(255, 0, 0, 0.7)',
          lineWidth: 4,
          dragPointSize: window.innerWidth < 600 ? 20 : 10,
          dragPointFill: 'rgba(255, 255, 255, 0.8)',
          dragPointStroke: 'rgba(255, 255, 255, 0.3)',
        },
      }
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
        style={{ background: '#2d2d2d', color: '#fff', height: '400px' }}
      ></div>
    </div>
  );
};

export default MultitrackMixer;

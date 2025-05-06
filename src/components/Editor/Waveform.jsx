// import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
// import WaveSurfer from 'wavesurfer.js';
// import '../../styles/variables.css';

// const Waveform = forwardRef(({ audioUrl, colorIndex = 0 }, ref) => {
//   const waveformRef = useRef(null);
//   const wavesurfer = useRef(null);

//   const colorVars = ["var(--color-orange)", "var(--color-purple)", "var(--color-pink)"];

//   useImperativeHandle(ref, () => ({
//     play: () => wavesurfer.current && wavesurfer.current.play(),
//     pause: () => wavesurfer.current && wavesurfer.current.pause(),
//     getCurrentTime: () => wavesurfer.current ? wavesurfer.current.getCurrentTime() : 0,
//   }));

//   useEffect(() => {
//     if (!audioUrl || !waveformRef.current) return;

//     const rootStyles = getComputedStyle(document.documentElement);

//     wavesurfer.current = WaveSurfer.create({
//       container: waveformRef.current,
//       waveColor: rootStyles.getPropertyValue('--color-white'),
//       barWidth: 2,
//       barGap: 2,
//       barRadius: 5,
//       height: 70,
//       responsive: true,
//       normalize: true,
//       minPxPerSec: 100,
//       cursorWidth: 0,
//     });

//     wavesurfer.current.load(audioUrl).catch((e) => {
//       if (e.name !== 'AbortError') {
//         console.error('WaveSurfer load error:', e);
//       }
//     });

//     return () => {
//       if (wavesurfer.current) {
//         wavesurfer.current.destroy();
//         wavesurfer.current = null;
//       }
//     };
//   }, [audioUrl]);

//   return (
//     <div
//       style={{
//         backgroundColor: colorVars[colorIndex] || 'var(--color-orange)',
//         padding: 'var(--spacing-10)'
//       }}
//     >
//       <div ref={waveformRef} style={{ width: '1000px', maxWidth: '100%' }} />
//     </div>
//   );
// });

// export default Waveform;

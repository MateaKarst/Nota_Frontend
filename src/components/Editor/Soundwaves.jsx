import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

import '../../styles/variables.css';

const Waveform = ({ audioUrl, waveColor, progressColor, height, colorIndex = 0 }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  //for background colors
  const colorVars = ["var(--color-orange)", "var(--color-purple)", "var(--color-pink)"];

  useEffect(() => {
    if (waveformRef.current) {
      const rootStyles = getComputedStyle(document.documentElement);

      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: rootStyles.getPropertyValue('--color-white'),
        barWidth: 2,
        barGap: 2,
        barRadius: 5,
        height: 70,
        responsive: true,
        normalize: true,
        minPxPerSec: 100,
        cursorWidth: 0,
      });

      wavesurfer.current.load(audioUrl);
    }

    return () => wavesurfer.current && wavesurfer.current.destroy();
  }, [audioUrl, waveColor, progressColor, height]);

  return <div style={{ backgroundColor: colorVars[colorIndex] || 'var(--color-orange)', padding: 'var(--spacing-10)' }}>
    <div ref={waveformRef} style={{ width: '1000px', maxWidth: '100%', }} />
  </div>
};

export default Waveform;

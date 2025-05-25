// import React, {
//   useRef,
//   useState,
//   useEffect,
//   useMemo,
//   useCallback,
// } from 'react'
// import { useWavesurfer } from '@wavesurfer/react'
// import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'

// import ringtone1 from '../../assets/editor/bangla-background-music-no-copyright-background-music-218993.mp3'
// import ringtone2 from '../../assets/editor/iphone-ringtone.mp3'

// const tracks = [
//   { name: 'Guitar', url: ringtone1 },
//   { name: 'Vocal', url: ringtone2 },
//   // { name: 'Piano', url: ringtone1 },
//   // { name: 'Flute', url: ringtone1 },
// ]

// const formatTime = (seconds) =>
//   [seconds / 60, seconds % 60]
//     .map((v) => `0${Math.floor(v)}`.slice(-2))
//     .join(':')

// // tmeline
// const useTimelinePlugin = (withTimeline, containerRef) =>
//   useMemo(() => {
//     if (!withTimeline || !containerRef.current) return []
//     return [Timeline.create({ container: containerRef.current })]
//   }, [withTimeline, containerRef])

// // waveform
// const Waveform = ({ url, withTimeline, timelineContainer, onReady }) => {
//   const containerRef = useRef(null)
//   const plugins = useTimelinePlugin(withTimeline, timelineContainer)

//   const { wavesurfer, currentTime } = useWavesurfer({
//     container: containerRef,
//     height: 80,
//     waveColor: 'rgb(180,180,255)',
//     progressColor: 'rgb(80,80,200)',
//     url,
//     plugins,
//     normalize: true,
//   })

//   useEffect(() => {
//     if (wavesurfer && onReady) {
//       onReady(wavesurfer)
//     }
//   }, [wavesurfer, onReady])

//   return (
//     <div className="waveform-container" style={{ marginBottom: '10px' }}>
//       <div ref={containerRef} />
//       {withTimeline && (
//         <p style={{ marginTop: '10px', fontSize: '11px' }}>
//           Current time: {formatTime(currentTime)}
//         </p>
//       )}
//     </div>
//   )
// }

// // editor
// const MultiTrackEditor = () => {
//   const timelineRef = useRef(null)
//   const waveRefs = useRef([]) 

//   // sync 
//   useEffect(() => {
//     const waves = waveRefs.current
//     if (!waves.length) return

//     const master = waves[0]
//     const syncOthers = () => {
//       const currentTime = master.getCurrentTime()
//       waves.slice(1).forEach((w) => w.setCurrentTime(currentTime))
//     }

//     const onPlay = () => {
//       syncOthers()
//       waves.slice(1).forEach((w) => w.play())
//     }
//     const onPause = () => {
//       waves.slice(1).forEach((w) => w.pause())
//     }

//     master.on('play', onPlay)
//     master.on('pause', onPause)
//     master.on('seek', syncOthers)

//     return () => {
//       master.un('play', onPlay)
//       master.un('pause', onPause)
//       master.un('seek', syncOthers)
//     }
//   }, [])

//   const handlePlayPause = useCallback(() => {
//     const waves = waveRefs.current
//     if (!waves.length) return
  
//     const isPlaying = waves[0].isPlaying()
//     waves.forEach((wave) => {
//       if (isPlaying) {
//         wave.pause()
//       } else {
//         wave.play()
//       }
//     })
//   }, [])
  

//   return (
//     <div style={{ padding: '10px', maxWidth: '1000px', margin: '0 auto', backgroundColor: 'pink' }}>
//       {/* play button  */}
//       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//         <button onClick={handlePlayPause} >
//           Play / Pause
//         </button>
//       </div>
  
//       {/* tracks */}
//       <div className="track-grid" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         {tracks.map((track, idx) => (
//           <div key={idx} style={{ marginBottom: '20px' }}>
//             <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
//               {track.name}
//             </div>
//             <Waveform
//               url={track.url}
//               withTimeline={idx === 0}
//               timelineContainer={timelineRef}
//               onReady={(ws) => (waveRefs.current[idx] = ws)}
//             />
//           </div>
//         ))}
//       </div>
  
//       {/* timeline container  */}
//       <div ref={timelineRef} style={{ marginTop: '10px' }} />
//     </div>
//   )
  
// }

// export default MultiTrackEditor

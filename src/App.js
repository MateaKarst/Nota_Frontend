import './App.css'
import song from './assets/editor/bangla-background-music-no-copyright-background-music-218993.mp3';
import VolumeSlider from './components/Editor/VolumeSlider';
import { useRef, useEffect } from 'react';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.log('Autoplay failed:', e); 
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <audio ref={audioRef} src={song} loop />
        <VolumeSlider audioRef={audioRef} />
      </header>
    </div>
  );
}

export default App;
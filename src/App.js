import './App.css';

import UploadSong from './pages/UploadSong';
import TagInput from './components/Tags/TagInput';
import TrackDropdown from './components/Tracks/TrackDropdown';


function App() {
  const tracks = [
{ isOwnTrack: true },
{ isOwnTrack: false },
{ isOwnTrack: false },
{ isOwnTrack: true },
{ isOwnTrack: false },
{ isOwnTrack: true }, 
{ isOwnTrack: true }, 
{ isOwnTrack: true }, 
{ isOwnTrack: true }, 
];
  return (
    <div className="App">
     <TrackDropdown tracks={tracks}/>
    </div>
  );
}

export default App;

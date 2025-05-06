//import TimelineGrid from './components/Editor/TimelineGrid';
import Soundwaves from './components/Editor/Soundwaves';

import '../src/App.css'
function App() {
  return (
    <div className="App">
      
      {/* <TimelineGrid /> */}
      
      <Soundwaves
        audioUrl="../src/assets/editor/iphone-ringtone.mp3" />
    </div>
  );
}

export default App;

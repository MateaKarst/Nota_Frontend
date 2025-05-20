import '../src/App.css'
import Track from "../src/components/Tracks/UserTrack"
function App() {
  return (
    <div className="App">
      <Track isOwnTrack={false}/>
    </div>
  );
}

export default App;
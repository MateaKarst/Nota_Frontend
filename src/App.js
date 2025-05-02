
import SmallCard from './components/MusicCard/SmallCard/SmallCard';
import NavBar from './components/Navigation/NavBar';
import '../src/App.css'
import HomePage from './pages/home-page';
function App() {
  return (
    <div className="App">
      
      <NavBar />
      <HomePage/>
      <SmallCard />

    </div>
  );
}

export default App;


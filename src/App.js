import SmallCard from './components/MusicCard/SmallCard/SmallCard';
import MusicCard from './components/MusicCard/HomeAndMySongsCards/MusicCard';
import CaroselCard from './components/MusicCard/CaroselCard/CaroselCard';
import '../src/App.css'
function App() {
  return (
    <div className="App">
      
         <MusicCard
          imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
          layout="row" 
        /> 
        <MusicCard
          imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
          layout="row"
        /> 
          <MusicCard
          imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
          layout="row"
        /> 
          <MusicCard
          imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
          layout="row"
        /> 
    </div>
  );
}

export default App;

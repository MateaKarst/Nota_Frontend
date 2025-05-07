import SmallCard from './components/MusicCard/SmallCard/SmallCard';
import MusicCard from './components/MusicCard/HomeAndMySongsCards/MusicCard';
import CaroselCard from './components/MusicCard/CaroselCard/CaroselCard';
import CoverImg from './components/MusicCard/HomeAndMySongsCards/CoverImg';
import '../src/App.css'
function App() {
  return (
    <div className="App">
      {/* <CoverImg SVGImg={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}/>
      <CoverImg SVGImg={"https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt5f18c2119ce26485/6668df65db90945e0caf9be6/beautiful-flowers-lotus.jpg?q=70&width=3840&auto=webp"}/> */}

         <MusicCard
          imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
          layout="row" 
        /> 
        <SmallCard
          imageUrl={"https://c02.purpledshub.com/uploads/sites/40/2023/08/JI230816Cosmos220-6d9254f-edited-scaled.jpg?w=1029&webp=1"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
        /> 
         <SmallCard
          imageUrl={"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
        /> 
          <CaroselCard
          imageUrl={"https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt5f18c2119ce26485/6668df65db90945e0caf9be6/beautiful-flowers-lotus.jpg?q=70&width=3840&auto=webp"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
        /> 
          <CaroselCard
          imageUrl={"https://i.aquarelle.com/09/images/produits/geurend-boeket-550x550-56841.jpg"}
          title="Lofi Beats"
          creator="DJ Chill"
          contributersNbr = "3"
        /> 
    </div>
  );
}

export default App;

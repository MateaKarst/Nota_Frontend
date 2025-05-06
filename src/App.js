import '../src/App.css';
//import HomePage from './pages/home-page';
import MusicCard from './components/MusicCard/HomeAndMySongsCards/MusicCard';


function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      

 <MusicCard
    imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/960px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg"}
    title="Lofi Beats"
    creator="DJ Chill"
    layout="row" 
  /> 

  <MusicCard
    imageUrl={"https://static.vegsoc.org/app/uploads/2024/07/shutterstock_2315756181.jpg"}
    title="Lofi Beats"
    creator="DJ Chill"
    layout="row" 
  /> 
    </div>
  );
}

export default App;

import '../src/App.css'
// import HomePage from './pages/home-page';
import ProfileCard from './components/profile-container';
import lilyImg from './assets/lily-profile.jpg'
function App() {
  return (
    <div className="App">
      
      
      <ProfileCard
  image={lilyImg}
  name="Lily Vermeer"
  tagline="Aspiring vocal musician🌟Open to experiments"
  connections={5}
  btns={true}
/>
    

    </div>
  );
}

export default App;

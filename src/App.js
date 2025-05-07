import './App.css';
import HomeCarousel from '../src/components/Home/HomeCarousel';
import CaroselCard from '../src/components/MusicCard/CaroselCard/CaroselCard'
//import NotificationItem from './components/Notifications/NotificationItem';
//import NotificationsPage from './pages/NotificationsPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HomeCarousel />
      </header>
    </div>
  );
}

export default App;

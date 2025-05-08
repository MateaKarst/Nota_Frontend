import '../src/App.css'
 import HomePage from './pages/HomePage';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProfileCard from './components/profile-container';
// import lilyImg from './assets/lily-profile.jpg'
import NotificationsPage from './pages/NotificationsPage'
import ChatOverview from './pages/ChatOverview'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<ChatOverview />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
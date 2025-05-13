import '../src/App.css'
 import HomePage from './pages/HomePage';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
// import lilyImg from './assets/lily-profile.jpg'
import NotificationsPage from './pages/NotificationsPage'
import ChatOverview from './pages/ChatOverview'
import MySongsPage from './pages/MySongsPage'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<ChatOverview />} />
        <Route path="/songs" element={<MySongsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
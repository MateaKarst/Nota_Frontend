import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Discover from './pages/Discover';
//import MySongs from './pages/MySongs';

import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/discover" element={<Discover />} />
        <Route path="/songs" element={<MySongs />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;

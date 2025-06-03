import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import PlansPage from './pages/PlansPage';
import ProPage from './pages/ProPage';
import HomePage from './pages/HomePage'
import SongDescription from './pages/SongDescription'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SongDescription />} />
      <Route path="/plans" element={<PlansPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;


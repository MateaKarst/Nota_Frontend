import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import PlansPage from './pages/PlansPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PlansPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;


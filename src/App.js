import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MySongsPage from './pages/MySongsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-songs" element={<MySongsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
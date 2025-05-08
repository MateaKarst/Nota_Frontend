import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Discover from './pages/Discover';
import MySongsPage from './pages/MySongsPage';

import NavBar from './components/Navigation/NavBar';

import Onboarding from './pages/Onboarding';
import './App.css';
import BasicBtn from './components/Buttons/BasicBtn';

function App() {
   return (
    <Onboarding />
    
  // //   <Router>
  // //     <Routes>
  // <Route path="/" element={<Onboarding />} />
  // <Route path="/login" element={<LoginPage />} />
  // //       <Route path="/" element={<HomePage />} />
  // //       {/* <Route path="/discover" element={<Discover />} />*/}
  // //       <Route path="/songs" element={<MySongsPage />} /> 
  // //       {/* <Route path="/profile" element={<Profile />} /> */}
  // //     </Routes>
  // //     <NavBar />
  // //   </Router>
   );
}

export default App;
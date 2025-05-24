
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MySongsPage from "./pages/MySongsPage";
import Onboarding from "./pages/Onboarding";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import ProfilePage from './pages/ProfilePage';
import ProfileFriendPage from './pages/ProfileFriendPage';
import NavBar from "./components/Navigation/NavBar";
import Not from "./pages/NotificationsPage"
import SearchPage from "./pages/SearchPage"
import FilterPage from "./pages/FilterPage";
//import Track from "./components/Tracks/UserTrack"
import "./App.css";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;


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
import Track from "./components/Tracks/UserTrack"
import SongDescription from "./pages/SongDescription"
import UploadSong from "./pages/UploadSong"
import ViewAllPage from "./pages/ViewAllPage"
import AccountSettings from "./pages/account-settings/AccountSettings";
import Personalization1 from "./pages/personalisation/Personalization1";
import SelectTopSongs from './pages/account-settings/SelectTopSongs'
import "./App.css";

   function App() {
  return (
    <Router>
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/select-top-songs" element={<SelectTopSongs />} />

    </Routes>
    </Router>
  );
}


export default App;
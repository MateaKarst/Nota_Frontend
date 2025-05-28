
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
import SongDescription from "./pages/SongDescription"
import UploadSong from "./pages/UploadSong"
import ViewAllPage from "./pages/ViewAllPage"
import PersonalizationAccount from "./pages/personalisation/AccountPersonalisation";
import Personalization1 from "./pages/personalisation/Personalization1";
import Personalization2 from "./pages/personalisation/Personalization2";
import Settings from "./pages/Settings";
import Record from "./pages/Record";

import "./App.css";
// import { Search } from "lucide-react";

function AppContent() {
  const location = useLocation();

  // Define paths where NavBar should appear
  const showNavBarPaths = ["/home", "/songs" /* , "/discover", "/profile" */];
  const showNavBar = showNavBarPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        {/* log in routes */}
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/personalisation" element={<PersonalizationAccount />} />
        <Route path="/personalisation1-filters" element={<Personalization1 />} />
        <Route path="/personalisation2" element={<Personalization2 />} />

        {/* nav bar routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/songs" element={<MySongsPage />} />
        <Route path="/discover" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} /> {/* fix styling*/}

        {/* friend routes */}
        <Route path="/profilefriend" element={<ProfileFriendPage />} />

        {/* honme page routes */}
        <Route path="/notifications" element={<Not />} />
        <Route path="/view-all" element={<ViewAllPage />} /> 

        {/* song routes */}
        <Route path="/song-description" element={<SongDescription />} />

        {/* create song routes */}
        <Route path="/upload-song" element={<UploadSong />} />
        <Route path="/record" element={<Record />} />

        {/* search routes */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/filter" element={<FilterPage />} />

        {/* settings */}
        <Route path="/settings" element={<Settings />} />

      </Routes>
      {showNavBar && <NavBar />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> 
    </Router>
  );
}

export default App;
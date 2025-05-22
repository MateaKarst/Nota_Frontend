
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MySongsPage from "./pages/MySongsPage";
import Onboarding from "./pages/Onboarding";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import ProfilePage from './pages/ProfilePage';
import ProfileFriendPage from './pages/ProfileFriendPage';
import NavBar from "./components/Navigation/NavBar";
import "./App.css";

function AppContent() {
  const location = useLocation();

  // Define paths where NavBar should appear
  const showNavBarPaths = ["/home", "/songs" /* , "/discover", "/profile" */];
  const showNavBar = showNavBarPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/songs" element={<MySongsPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profilefriend" element={<ProfileFriendPage />} />
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
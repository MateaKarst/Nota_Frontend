import HomePage from "../pages/HomePage";
import MySongsPage from "../pages/MySongsPage";
import Onboarding from "../pages/Onboarding";
import LoginPage from "../pages/auth/LoginPage";
import CreateAccount from "../pages/auth/CreateAccount";
import ProfilePage from "../pages/ProfilePage";
import ProfileFriendPage from "../pages/ProfileFriendPage";
import NotificationsPage from "../pages/NotificationsPage";
import SearchPage from "../pages/SearchPage";
import FilterPage from "../pages/FilterPage";
import SongDescription from "../pages/SongDescription";
import UploadSong from "../pages/UploadSong";
import ViewAllPage from "../pages/ViewAllPage";
import AccountSettings from "../pages/account-settings/AccountSettings";
import Personalization1 from "../pages/personalisation/Personalization1";
import Personalization2 from "../pages/personalisation/Personalization2";
import PersonalizationAccount from "../pages/personalisation/AccountPersonalisation";
import Settings from "../pages/Settings";
import Record from "../pages/Record";
import ChatOverview from "../pages/ChatOverview";

export const appRoutes = [
    { path: "/", element: <Onboarding />, isPublic: true },
    { path: "/login", element: <LoginPage />, isPublic: true },
    { path: "/create-account", element: <CreateAccount />, isPublic: true },
    
    { path: "/profile", element: <ProfilePage /> },
    { path: "/profilefriend/:id", element: <ProfileFriendPage /> },
    
    { path: "/home", element: <HomePage /> ,isPublic: true},
    
    { path: "/songs", element: <MySongsPage /> },
    { path: "/song-description", element: <SongDescription />,isPublic: true },
    { path: "/upload-song", element: <UploadSong />, isPublic: true },
    { path: "/record", element: <Record /> },
    
    { path: "/discover", element: <SearchPage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/view-all", element: <ViewAllPage /> },
    { path: "/filter", element: <FilterPage /> },
    
    { path: "/personalisation", element: <PersonalizationAccount /> },
    { path: "/personalisation1-filters", element: <Personalization1 /> },
    { path: "/personalisation2", element: <Personalization2 />},

    { path: "/settings", element: <Settings /> },
    { path: "/account-settings", element: <AccountSettings /> },
    { path: "/notifications", element: <NotificationsPage />,isPublic: true },
    { path: "/chatoverview", element: <ChatOverview />,isPublic: true},
];

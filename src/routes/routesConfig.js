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

export const appRoutes = [
    { path: "/", element: <Onboarding />, isPublic: true },
    { path: "/login", element: <LoginPage />, isPublic: true },
    { path: "/create-account", element: <CreateAccount />, isPublic: true },

    { path: "/home", element: <HomePage /> },
    { path: "/songs", element: <MySongsPage /> },
    { path: "/discover", element: <SearchPage /> },
    { path: "/search", element: <SearchPage /> },

    { path: "/profile", element: <ProfilePage /> },
    // { path: "/profilefriend", element: <ProfileFriendPage /> },
    { path: "/profilefriend/:id", element: <ProfileFriendPage /> },
    { path: "/settings", element: <Settings /> },
    { path: "/account-settings", element: <AccountSettings /> },
    { path: "/notifications", element: <NotificationsPage /> },

    { path: "/personalisation", element: <PersonalizationAccount /> },
    { path: "/personalisation1-filters", element: <Personalization1 /> },
    { path: "/personalisation2", element: <Personalization2 /> },

    { path: "/view-all", element: <ViewAllPage /> },
    { path: "/filter", element: <FilterPage /> },

    { path: "/song-description", element: <SongDescription /> },
    { path: "/upload-song", element: <UploadSong /> },
    { path: "/record", element: <Record /> },
];

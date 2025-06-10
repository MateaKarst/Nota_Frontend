import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

import ProfileCard from '../components/profile-container';
import HeaderVariants from '../components/Headers/HeaderVariants';
import SmallCard from '../components/MusicCard/SmallCard/SmallCard';
import MusicPlayer from '../components/MusicPlayer';

import API_ENDPOINTS from '../routes/apiEndpoints';
import { useAuth } from '../context/AuthProvider';

import '../styles/pages/profile-friend-page.css';

const ProfileFriendPage = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [userData, setUserData] = useState(null);
  const [friendConnections, setFriendConnections] = useState([]);
  const [ownSongs, setOwnSongs] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [activeTab, setActiveTab] = useState("own");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const connectionId = id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (!user || !user.access_token) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      Cookies.set("access_token", user.access_token, { expires: 7, sameSite: "lax" });

      try {
        const accessToken = user?.access_token || Cookies.get("access_token");
        if (!accessToken) throw new Error("No access token");

        const res = await fetch(API_ENDPOINTS.USER(connectionId), {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const friend = await res.json();
        if (!res.ok) throw new Error("Failed to fetch friend");
        setUserData(friend);

        const connRes = await fetch(API_ENDPOINTS.CONNECTIONS(connectionId), {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const friendConnections = await connRes.json();
        setFriendConnections(friendConnections);

        const songsRes = await fetch(`${API_ENDPOINTS.SONGS.MULTIPLE}?userId=${connectionId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const songs = await songsRes.json();
        if (!songsRes.ok) throw new Error("Failed to fetch songs");

        const own = songs.filter(song => song.user_id === connectionId);
        const collab = songs.filter(song =>
          song.user_id !== connectionId &&
          song.tracks?.some(track => track.user_id === connectionId)
        );

        setOwnSongs(own);
        setCollaborations(collab);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [connectionId, user]);

  const handleTabClick = (tab) => setActiveTab(tab);

  const switcherBtnStyle = {
    width: "fit-content",
    height: "23px",
    backgroundColor: "transparent",
    color: "var(--color-white)",
    borderRadius: "var(--border-radius-20)",
    fontSize: "var(--font-size-14)",
    fontFamily: "var(--font-family-primary)",
    paddingLeft: "20px",
    paddingRight: "20px",
    border: "1px solid var(--color-purple)",
  };

  if (loading) return <div>Loading user profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>No user data found.</div>;

  return (
    <div className="home-page">
      <div className="hero-wrapper1">
        <HeaderVariants mode="menu" className="header1" />
        <div style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ProfileCard
            image={userData.user_details.avatar}
            name={userData.user_details.name}
            tagline={userData.user_details.profile_description || "Music is the path of my life and heart🖤"}
            connections={friendConnections.length}
            btns={true}
          />
        </div>
      </div>

      <div style={{ padding: "0 20px 20px" }}>
        <h1 className='title1'>Songs</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", paddingBottom: 14 }}>
          <button
            style={{
              ...switcherBtnStyle,
              backgroundColor: activeTab === "own" ? "var(--color-purple)" : "transparent",
              border: activeTab === "own" ? "none" : "1px solid var(--color-purple)"
            }}
            onClick={() => handleTabClick("own")}
          >
            Own Songs
          </button>

          <button
            style={{
              ...switcherBtnStyle,
              backgroundColor: activeTab === "collab" ? "var(--color-purple)" : "transparent",
              border: activeTab === "collab" ? "none" : "1px solid var(--color-purple)"
            }}
            onClick={() => handleTabClick("collab")}
          >
            Collaborations
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {(activeTab === "own" ? ownSongs : collaborations).map((song, index) => (
            <SmallCard
              key={index}
              title={song.title}
              creator={song.user?.name || song.creator || "Unknown"}
              contributersNbr={song.tracks?.length || 1}
              imageUrl={song.cover_image || "https://via.placeholder.com/150"}
              onPlay={() =>
                setCurrentSong({
                  title: song.title,
                  artist: song.user?.name || song.creator,
                  cover: song.cover_image,
                  audio: song.audio_url,
                })
              }
            />
          ))}
        </div>
      </div>

      {currentSong && (
        <div className="music-player-container">
          <MusicPlayer song={currentSong} />
        </div>
      )}
    </div>
  );
};

export default ProfileFriendPage;

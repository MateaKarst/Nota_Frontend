import React, { useState, useEffect } from 'react';
import '../styles/pages/profile-page.css';
import ProfileCard from '../components/profile-container';
import HeaderProfile from '../components/Headers/HeaderProfile';
import SmallCard from '../components/MusicCard/SmallCard/SmallCard';
import MusicPlayer from '../components/MusicPlayer';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import API_ENDPOINTS from '../routes/apiEndpoints';
import { useAuth } from '../context/AuthProvider';


const ProfilePage = () => {
  const [ownSongs, setOwnSongs] = useState([]);
  const [collaborations, setCollaborations] = useState([]);

  const [currentSong, setCurrentSong] = useState(null);
  const [activeTab, setActiveTab] = useState("own");
  const { id } = useParams();
  const { user } = useAuth();

  const [userData, setUserData] = useState(null);
  const [friendConnections, setFriendConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Використовуємо або ID з URL, або ID поточного користувача
  const connectionId = id || user?.id;

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

        // Отримуємо дані користувача
        const res = await fetch(API_ENDPOINTS.USER(connectionId), {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const fetchedUser = await res.json();
        if (!res.ok) throw new Error(fetchedUser.message || "Failed to fetch user data");
        setUserData(fetchedUser);

        // Отримуємо підключення
        const connRes = await fetch(API_ENDPOINTS.CONNECTIONS(connectionId), {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const connections = await connRes.json();
        setFriendConnections(connections);

        console.log("Fetching songs from:", API_ENDPOINTS.SONGS.MULTIPLE + `?userId=${connectionId}`);

        // Отримуємо пісні
        const songsRes = await fetch(API_ENDPOINTS.SONGS.MULTIPLE + `?userId=${connectionId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userSongs = await songsRes.json();
        if (!songsRes.ok) throw new Error(userSongs.message || "Failed to fetch user songs");

        const userId = user?.id;

        const own = userSongs.filter(song => song.user_id === userId);

        const collabs = userSongs.filter(song =>
          song.user_id !== userId &&
          song.tracks?.some(track => track.user_id === userId)
        );


        setOwnSongs(own);
        setCollaborations(collabs);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (connectionId) {
      fetchData();
    }
  }, [connectionId, user]);


  if (loading) return <div>Loading user profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>No user data found.</div>;

  // const ownSongs = [
  //   {
  //     title: "Dreamy",
  //     creator: "Bestguitar123",
  //     contributersNbr: 1,
  //     imageUrl: "https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394914.jpg",
  //     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  //   },
  //   {
  //     title: "Memories",
  //     creator: "Jamesvoice",
  //     contributersNbr: 3,
  //     imageUrl: "https://img.freepik.com/free-photo/colorful-floral-background-wallpaper-trippy-aesthetic-design_53876-128684.jpg",
  //     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  //   },
  //   {
  //     title: "HeartBit",
  //     creator: "Korin",
  //     contributersNbr: 4,
  //     imageUrl: "https://img.freepik.com/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363285.jpg",
  //     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  //   }
  // ];

  // const collaborations = [
  //   {
  //     title: "Neon Pulse",
  //     creator: "ElectroNina",
  //     contributersNbr: 2,
  //     imageUrl: "https://img.freepik.com/free-photo/futuristic-city-with-neon-lights_23-2148898573.jpg",
  //     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  //   },
  //   {
  //     title: "Soul Echo",
  //     creator: "JazzDev",
  //     contributersNbr: 5,
  //     imageUrl: "https://img.freepik.com/free-photo/jazz-stage-lights-singer_23-2148879442.jpg",
  //     audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  //   }
  // ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const switcherBtnStyle = {
    width: "fit-content",
    height: "23px",
    backgroundColor: "transparent",
    color: "var(--color-white)",
    borderRadius: "var(--border-radius-20)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "var(--font-size-14)",
    fontFamily: "var(--font-family-primary)",
    paddingLeft: "20px",
    paddingRight: "20px",
    border: "1px solid var(--color-purple)",
  };

  return (
    <div className="profile-page">
      <div className="hero-wrapper2">
        <HeaderProfile className="header2" />
        <div style={{ padding: 20 }}>
          <ProfileCard
            image={userData.user_details.avatar}
            name={userData.user_details.name}
            tagline={userData.user_details.profile_description}
            connections={friendConnections.length}
            btns={false}
          />
        </div>
      </div>

      <div style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
        <div>
          <div><h1 className='title2'>Top Songs</h1></div>
          <div style={{ display: "flex", flexDirection: "column", alignContent: "left" }}>
            <SmallCard title="Paris 2012" creator="Emily Star" contributersNbr={2} imageUrl="https://img.freepik.com/free-photo/aesthetic-universe-nature-background-earth-mountain-remixed-media_53876-128642.jpg" onPlay={(song) => setCurrentSong(song)} audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            <SmallCard title="Jazzy night" creator="Lily Vermeer" contributersNbr={4} imageUrl="https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-129243.jpg" onPlay={(song) => setCurrentSong(song)} audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            <SmallCard title="Rain of tears" creator="Jamy Lynn" contributersNbr={3} imageUrl="https://img.freepik.com/free-photo/closeup-view-beautiful-japanese-umbrellas_185193-162917.jpg" onPlay={(song) => setCurrentSong(song)} audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", padding: 0, paddingBottom: 14 }}>
          <h1 className='title2'>Songs</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <button
              style={{
                ...switcherBtnStyle,
                backgroundColor: activeTab === "own" ? "var(--color-purple)" : "transparent",
                color: activeTab === "own" ? "var(--color-white)" : "var(--color-white)",
                border: activeTab === "own" ? "none" : "1px solid var(--color-purple)",
              }}
              onClick={() => handleTabClick("own")}
            >
              Own Songs
            </button>

            <button
              style={{
                ...switcherBtnStyle,
                backgroundColor: activeTab === "collab" ? "var(--color-purple)" : "transparent",
                color: activeTab === "collab" ? "var(--color-white)" : "var(--color-white)",
                border: activeTab === "collab" ? "none" : "1px solid var(--color-purple)",
              }}
              onClick={() => handleTabClick("collab")}
            >
              Collaborations
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {(activeTab === "own" ? ownSongs : collaborations).map((song, index) => (
            <SmallCard
              key={song.id || index}
              title={song.title}
              creator={userData.user_details.username}
              contributersNbr={song.contributors?.length || 0}
              imageUrl={song.cover_image}
              onPlay={() =>
                setCurrentSong({
                  title: song.title,
                  artist: userData.user_details.username,
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

export default ProfilePage;
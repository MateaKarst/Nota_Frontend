import React, { useEffect, useState } from 'react';
import '../styles/pages/home-page.css'
import HomeCarousel from '../components/Home/HomeCarousel';
import HeaderMain from '../components/Headers/HeaderMain';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import BasicBtn from '../components/Buttons/BasicBtn'
import FriendsCard from '../components/Friends/FriendsCard';
import { useNavigate } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer';
import { useAuth } from '../context/AuthProvider';
// import PopUp from '../components/PopUps/PopUp';
import { Link } from 'react-router-dom';

import API_ENDPOINTS from '../routes/apiEndpoints';


const HomePage = () => {
  const { user } = useAuth();

  const [currentSong, setCurrentSong] = useState(null);
  const [newSongs, setNewSongs] = useState([]);
  const navigate = useNavigate();
  const [trendySongs, setTrendySongs] = useState([]);
  const [collaborationSongs, setCollaborationSongs] = useState([]);

  useEffect(() => {
    const fetchTrendySongs = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE);
        const data = await res.json();

        setTrendySongs(data.slice(0, 10));
      } catch (err) {
        console.error("Failed to fetch trendy songs:", err);
      }
    };

    fetchTrendySongs();
  }, []);


  useEffect(() => {
    const fetchNewSongs = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE);
        const data = await res.json();
        setNewSongs(data);
      } catch (err) {
        console.error("Failed to fetch new songs", err);
      }
    };

    fetchNewSongs();
  }, []);


  const handleMusicCardClick = (song) => {
    console.log ("handle navigation songId");
    navigate(`/song-description/${song.id}`);
    

  };


  return (
    <div className="home-page">
      <div className="hero-wrapper">
        <HeaderMain className="header" />
        <div className="home-carousel-overlay">
          <h1 className="pink-header-title">My Songs</h1>
          <HomeCarousel
            onPlay={(song) => setCurrentSong(song)}
            // onAddClick={handleOpenPopup}
          />
        </div>
      </div>

      <div>
        <div className='title-content'>
          <h1 className='title-home'>New songs</h1>
          <BasicBtn type="viewAll" text="View All" onClick={() => navigate('/view-all', { state: { title: 'New songs' } })} />
        </div>
        <div className="horizontal-scroll">
          {newSongs.map((song, index ) => {
            const songId = song.id
            return(
            <Link key={songId || index } to={`/song-description/${songId}`}>
            <MusicCard
              key={songId}
              title={song.title}
              creator={song.user_details?.username || "Unknown"}
              contributersNbr={song.tracks?.length || 1}
              imageUrl={song.cover_image}
              audio={song.compiled_path}
              onPlay={() => setCurrentSong(song)}
              onClick={() => handleMusicCardClick(song)}
            />
            </Link>
        );
})}
        </div>
      </div>

      <div>
        <div className="title-content">
          <h1 className="title-home">Collaborations</h1>
          <BasicBtn
            type="viewAll"
            text="View All"
            onClick={() =>
              navigate("/view-all", { state: { title: "Collaborations" } })
            }
          />
        </div>
       <div className="horizontal-scroll">
          {newSongs.map((song, index ) => {
            const songId = song.id
            return(
            <Link key={songId || index } to={`/song-description/${songId}`}>
            <MusicCard
              key={songId}
              title={song.title}
              creator={song.user_details?.username || "Unknown"}
              contributersNbr={song.tracks?.length || 1}
              imageUrl={song.cover_image}
              audio={song.compiled_path}
              onPlay={() => setCurrentSong(song)}
              onClick={() => handleMusicCardClick(song)}
            />
            </Link>
        );
})}
        </div>
      </div>


      <div className="friends-section">
        <FriendsCard />
      </div>

      <div>
        <div className='title-content'>
          <h1 className='title-home'>Trendy songs</h1>
          <BasicBtn
            type="viewAll"
            text="View All"
            onClick={() => navigate('/view-all', { state: { title: 'Trendy songs' } })}
          />
        </div>

        <div className="horizontal-scroll">
          {newSongs.map((song, index ) => {
            const songId = song.id
            return(
            <Link key={songId || index } to={`/song-description/${songId}`}>
            <MusicCard
              key={songId}
              title={song.title}
              creator={song.user_details?.username || "Unknown"}
              contributersNbr={song.tracks?.length || 1}
              imageUrl={song.cover_image}
              audio={song.compiled_path}
              onPlay={() => setCurrentSong(song)}
              onClick={() => handleMusicCardClick(song)}
            />
            </Link>
        );
})}
        </div>
      </div>


      {currentSong && (
        <div className="music-player-container">
          <MusicPlayer song={currentSong} />
        </div>
      )}

      {/* {isPopupOpen && (
        <div className="popups1">
          <PopUp type={"upload-track"} onClose={handleClosePopup} />
        </div>
      )} */}
    </div>
  );
};

export default HomePage;

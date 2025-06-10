import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import API_ENDPOINTS from '../routes/apiEndpoints';
import { useAuth } from '../context/AuthProvider';

import HeaderMain from '../components/Headers/HeaderMain';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import BasicBtn from '../components/Buttons/BasicBtn'
import FriendsCard from '../components/Friends/FriendsCard';
import MusicPlayer from '../components/MusicPlayer';
import PopUp from '../components/PopUps/PopUp';
import HomeCarousel from '../components/Home/HomeCarousel';

import ElecGuitar from "../assets/instrument-samples/ElecGuitar.mp3"

import '../styles/pages/home-page.css'

const HomePage = () => {
  const { user } = useAuth();

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');
  const [popupData, setPopupData] = useState(null);

  const [currentSong, setCurrentSong] = useState(null);
  const [newSongs, setNewSongs] = useState([]);

  const navigate = useNavigate();

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
    console.log("handle navigation songId");
    navigate(`/song-description/${song.id}`);


  };

  const handleOpenPopup = async () => {
    try {
      const userId = user.id;
      console.log("home + userId", userId)

      const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          title: 'Untitled Song',
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Server error:', errorData);
        return;
      }

      console.log("response", res)

      const newSong = await res.json();

      setPopupType('upload-track');
      setPopupData(newSong);
      setShowPopup(true);
    } catch (error) {
      console.error('Failed to create empty song:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [audioPlayer, setAudioPlayer] = useState(null);

  const handlePlaySong = (song) => {
    if (audioPlayer) {
      audioPlayer.pause();
    }

    const audio = new Audio(song.audio); // song.audio will be ElecGuitar mp3 URL
    audio.play();
    setAudioPlayer(audio);
    setCurrentSong(song);
  };


  return (
    <div className="home-page">
      <div className="home-page">
        <div className="hero-wrapper">
          <HeaderMain className="header" />
          <div className="home-carousel-overlay">
            <h1 className="pink-header-title">My Songs</h1>
            <HomeCarousel
              onPlay={(song) => setCurrentSong(song)}
              onAddClick={handleOpenPopup} // opens popup
            />
          </div>
        </div>

        {showPopup && (
          <PopUp type={popupType} data={popupData} onClose={handleClosePopup} />
        )}
      </div>

      <div>
        <div className='title-content'>
          <h1 className='title-home'>New songs</h1>
          <BasicBtn type="viewAll" text="View All" onClick={() => navigate('/view-all', { state: { title: 'New songs' } })} />
        </div>

        <div className="horizontal-scroll">
          {newSongs.map((song, index) => (
            <MusicCard
              key={song.id || index}
              title={song.title}
              creator={song.user_details?.username || "Unknown"}
              contributersNbr={song.tracks?.length || 1}
              imageUrl={song.cover_image}
              audio={ElecGuitar}
              onPlay={handlePlaySong}
              songId={song.id}
            />
          ))}
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
          {newSongs.map((song, index) => {
            const songId = song.id
            return (
              <Link key={songId || index} to={`/song-description/${songId}`}>
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
            onClick={() =>
              navigate("/view-all", { state: { title: "Trendy songs" } })
            }
          />
        </div>

        <div className="horizontal-scroll">
          {newSongs.map((song, index) => {
            const songId = song.id
            return (
              <Link key={songId || index} to={`/song-description/${songId}`}>
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
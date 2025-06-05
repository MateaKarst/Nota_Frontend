import React, { useEffect, useState } from 'react';
import '../styles/pages/home-page.css'
import HomeCarousel from '../components/Home/HomeCarousel';
import HeaderMain from '../components/Headers/HeaderMain';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import BasicBtn from '../components/Buttons/BasicBtn'
import FriendsCard from '../components/Friends/FriendsCard';
import { useNavigate } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer';

import API_ENDPOINTS from '../routes/apiEndpoints';


const HomePage = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [newSongs, setNewSongs] = useState([]);
  const navigate = useNavigate();
  const [trendySongs, setTrendySongs] = useState([]);

useEffect(() => {
  const fetchTrendySongs = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE);
      const data = await res.json();
      
      // Optional: Sort by created_at or add filter logic here
      setTrendySongs(data.slice(0, 10)); // Limit to 10 songs for UI
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
        setNewSongs(data); // you can limit to latest if needed
      } catch (err) {
        console.error("Failed to fetch new songs", err);
      }
    };

    fetchNewSongs();
  }, []);

  return (
    <div className="home-page">
      <div className="hero-wrapper">
        <HeaderMain className="header" />
        <div className="home-carousel-overlay">
          <h1 className="pink-header-title">My Songs</h1>
          <HomeCarousel
            onPlay={(song) => setCurrentSong(song)}
            onAddClick={handleOpenPopup}
          />
        </div>
      </div>

      <div>
        <div className='title-content'>
          <h1 className='title'>New songs</h1>
          <BasicBtn type="viewAll" text="View All" onClick={() => navigate('/view-all', { state: { title: 'New songs' } })} />
        </div>
        <div className="horizontal-scroll">
          {newSongs.map((song) => (
            <MusicCard
              key={song.id}
              title={song.title}
              creator={song.user_details?.username || "Unknown"}
              contributersNbr={song.tracks?.length || 1}
              imageUrl={song.cover_image}
              audio={song.compiled_path}
              onPlay={() => setCurrentSong(song)}
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
          <MusicCard
            title="Dreamy"
            creator="Bestguitar123"
            contributersNbr={1}
            imageUrl={
              "https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394914.jpg?t=st=1746643614~exp=1746647214~hmac=a7e5c96486e48adbc90516fa4a6cdf0cec31c7bdb7c167ad72b00b88966a15b0&w=740"
            }
            onPlay={(song) => setCurrentSong(song)}
            audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
          <MusicCard
            title="Memories"
            creator="Jamesvoice"
            contributersNbr={3}
            imageUrl={
              "https://img.freepik.com/free-photo/colorful-floral-background-wallpaper-trippy-aesthetic-design_53876-128684.jpg?t=st=1746643570~exp=1746647170~hmac=0ba17f92d1e2691e78daca127bd3f9857f3df09f04502382721058cd18655527&w=1380"
            }
            onPlay={(song) => setCurrentSong(song)}
            audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
          <MusicCard
            title="HeartBit"
            creator="Korin"
            contributersNbr={4}
            imageUrl={
              "https://img.freepik.com/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363285.jpg?t=st=1746643542~exp=1746647142~hmac=e4f44690d9487e446ad5d79987196dd8c292cbf324764167e18cf0f9cd4e538c&w=740"
            }
            onPlay={(song) => setCurrentSong(song)}
            audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          />
        </div>
      </div>

      {/* FRIENDS */}
      <div className="friends-section">
        <FriendsCard />
      </div>

      <div>
  <div className='title-content'>
    <h1 className='title'>Trendy songs</h1>
    <BasicBtn
      type="viewAll"
      text="View All"
      onClick={() => navigate('/view-all', { state: { title: 'Trendy songs' } })}
    />
  </div>

  <div className="horizontal-scroll">
    {trendySongs.map((song) => (
      <MusicCard
        key={song.id}
        title={song.title}
        creator={song.user_details?.username || "Unknown"}
        contributersNbr={song.tracks?.length || 1}
        imageUrl={song.cover_image}
        audio={song.compiled_path}
        onPlay={() =>
          setCurrentSong({
            title: song.title,
            artist: song.user_details?.username || "Unknown",
            audio: song.compiled_path,
            cover: song.cover_image,
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

      {isPopupOpen && (
        <div className="popups1">
          <PopUp type={"upload-track"} onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default HomePage;

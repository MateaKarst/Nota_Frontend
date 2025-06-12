import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import API_ENDPOINTS from "../routes/apiEndpoints";
import { useAuth } from "../context/AuthProvider";

import HeaderMain from "../components/Headers/HeaderMain";
import MusicCard from "../components/MusicCard/HomeAndMySongsCards/MusicCard";
import BasicBtn from "../components/Buttons/BasicBtn";
import FriendsCard from "../components/Friends/FriendsCard";
import MusicPlayer from "../components/MusicPlayer";
import PopUp from "../components/PopUps/PopUp";
import HomeCarousel from "../components/Home/HomeCarousel";

import ElecGuitar from "../assets/instrument-samples/ElecGuitar.mp3";

import "../styles/pages/home-page.css";

const HomePage = () => {
  const { user } = useAuth();

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [popupData, setPopupData] = useState(null);

  const [currentSong, setCurrentSong] = useState(null);
  const [newSongs, setNewSongs] = useState([]);

  const navigate = useNavigate();
  const playerRef = useRef(null);

  // Filter and sort for New songs (exclude user's own, sorted earliest created)
  const newSongsFiltered = newSongs
    .filter(song => song.user_id !== user.id)
    .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  // Filter and sort for Collaborations (songs user contributed to, excluding own songs)
  // Sort by earliest contributed track's created_at
  const collaborationsFiltered = newSongs
    .filter(song => {
      // song is NOT created by user
      if (song.user_id === user.id) return false;

      // user contributed a track to this song
      return song.tracks.some(track => track.user_id === user.id);
    })
    .sort((a, b) => {
      // Get earliest contribution time of user to song a and b
      const aUserTracks = a.tracks.filter(track => track.user_id === user.id);
      const bUserTracks = b.tracks.filter(track => track.user_id === user.id);

      const aEarliest = aUserTracks.length ? new Date(Math.min(...aUserTracks.map(t => new Date(t.created_at)))) : new Date();
      const bEarliest = bUserTracks.length ? new Date(Math.min(...bUserTracks.map(t => new Date(t.created_at)))) : new Date();

      return aEarliest - bEarliest;
    });

  // Sort songs by number of tracks descending for Trendy songs
  const trendySongsSorted = [...newSongs].sort(
    (a, b) => (b.tracks?.length || 0) - (a.tracks?.length || 0)
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (playerRef.current && !playerRef.current.contains(e.target)) {
        setCurrentSong(null); // close player
      }
    };

    if (currentSong) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentSong]);

  useEffect(() => {
    const fetchNewSongs = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE);
        const data = await res.json();
        console.log("songs data", data)

        // Sort songs by created_at (newest first)
        const sortedSongs = data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });

        setNewSongs(sortedSongs);
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
      console.log("home + userId", userId);

      const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          title: "Untitled Song",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Server error:", errorData);
        return;
      }

      console.log("response", res);

      const newSong = await res.json();

      setPopupType("upload-track");
      setPopupData(newSong);
      setShowPopup(true);
    } catch (error) {
      console.error("Failed to create empty song:", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [audioPlayer, setAudioPlayer] = useState(null);

  const handlePlaySong = (song) => {
    setCurrentSong({
      title: song.title,
      artist: song.user_details?.username || "Unknown",
      cover: song.cover_image,
      audio: song.compiled_path || song.audio || ElecGuitar,
    });
  };

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showPopup]);

  return (
    <div className="home-page">
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

        {showPopup && (
          <PopUp type={popupType} data={popupData} onClose={handleClosePopup} />
        )}
      </div>

      <div>
        <div className="title-content">
          <h1 className="title-home">New songs</h1>
          <BasicBtn
            type="viewAll"
            text="View All"
            onClick={() =>
              navigate("/view-all", { state: { title: "New songs" } })
            }
          />
        </div>

        <div className="horizontal-scroll">
          {newSongsFiltered.length > 0 ? (
            newSongsFiltered.map((song, index) => (
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
            ))
          ) : (
            <div className="empty-state-message">
              No new songs available. Check back later!
            </div>
          )}
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
          {collaborationsFiltered.length > 0 ? (
            collaborationsFiltered.map((song, index) => {
              const songId = song.id;
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
            })
          ) : (
            <div className="empty-state-message">
              No collaborations yet. Collaborate to see songs here!
            </div>
          )}
        </div>
      </div>

      <div className="friends-section">
        <FriendsCard />
      </div>

      <div>
        <div className="title-content">
          <h1 className="title-home">Trendy songs</h1>
          <BasicBtn
            type="viewAll"
            text="View All"
            onClick={() =>
              navigate("/view-all", { state: { title: "Trendy songs" } })
            }
          />
        </div>

        <div className="horizontal-scroll">
          {trendySongsSorted.length > 0 ? (
            trendySongsSorted.map((song, index) => {
              const songId = song.id;
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
            })
          ) : (
            <div className="empty-state-message">
              No trendy songs right now. Start creating to get featured!
            </div>
          )}
        </div>
      </div>

      {currentSong && (
        <div ref={playerRef} className="music-player-container">
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

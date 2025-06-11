import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import SectionHeadImage from '../components/SongDescription/SectionHeadImage';
import TrackDropdown from '../components/Tracks/TrackDropdown';
import BasicBtn from "../components/Buttons/BasicBtn";
import NavBar from "../components/Navigation/NavBar"
import HeaderVariants from '../components/Headers/HeaderVariants';
import Popup from '../components/PopUps/PopUp';

import { API_ENDPOINTS } from "../routes/apiEndpoints";
import { useAuth } from '../context/AuthProvider';

import "../styles/pages/song-description.css";

const SongDescription = () => {

  const navigate = useNavigate();
  const audioPlayersRef = useRef([]);

  const setAudioPlayers = (players) => {
    audioPlayersRef.current = players;
  };

  const { user } = useAuth();
  const { id } = useParams();

  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  const songId = id
  console.log("Getting song id", songId);

  const [song, setSong] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchSongData = async () => {
      if (!user) return;

      if (user.access_token) {
        Cookies.set("access_token", user.access_token, {
          expires: 7,
          sameSite: "lax",
        });
      }

      const accessToken = Cookies.get("access_token") || user.access_token;
      if (!accessToken) {
        console.error("No access token available");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(API_ENDPOINTS.SONGS.SINGLE(id), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        });

        const data = await response.json();
        console.log("Fetched song data:", data);
        console.log("Tracks array:", data.tracks);

        if (response.ok) {
          setTracks(data.tracks || []);
          setSong(data);
        } else {
          console.error("Error fetching song tracks:", data.message);
        }
      } catch (error) {
        console.error("Error fetching song:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongData();
  }, [user, id]);

  if (!user) return null;

  return (
    <div className="song-description-page">

      <div className="header-section">
        <HeaderVariants mode="menu" />
      </div>

      <div className="top-part">
        <SectionHeadImage
          title={song?.title}
          imageUrl={song?.cover_image}
          description={song?.description}
          genres={song?.genres || []}
          audioPlayersRef={audioPlayersRef}
        />

        <div className="dropdown">
          <h1 className="tracks">Tracks ({tracks.length})</h1>
          {loading ? (
            <p>Loading tracks...</p>
          ) : (
            Array.isArray(tracks) && tracks.length > 0 ? (
              <TrackDropdown
                tracks={tracks.map(track => ({
                  ...track,
                  isOwnTrack: track.user_details.id === user.id || track.user_id === user.id,
                }))}
                registerPlayerRef={setAudioPlayers}
              />
            ) : (
              <p>No tracks available</p>
            )
          )}
        </div>
      </div >

      <div className="navbar-bottom">
        <NavBar />
      </div>

      <div className="collaborate">
        <BasicBtn type="main" text="Collaborate" onClick={() => setShowPopup(true)} />
      </div>

      {showPopup && (
        <Popup
          type="upload-track"
          onClose={() => setShowPopup(false)}
          data={song}
          directToEditor={true}
        />
      )}
    </div >
  );
};

export default SongDescription;

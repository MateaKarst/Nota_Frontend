import React, { useEffect, useState } from 'react';
import SectionHeadImage from '../components/SongDescription/SectionHeadImage';
import TrackDropdown from '../components/Tracks/TrackDropdown';
import HeaderSongDescription from '../components/Headers/HeaderSongDescription';
import BasicBtn from "../components/Buttons/BasicBtn";
//import Popup from '../components/PopUps/PopUp';
import { API_ENDPOINTS } from "../routes/apiEndpoints";
import { useAuth } from '../context/AuthProvider';
import Cookies from "js-cookie";

import '../styles/pages/song-description.css';

const SongDescription = () => {
  // const { id, title, imageUrl } = location.state || {};

  const { user } = useAuth();

  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);


  const id = "8a97f671-2c6b-4673-a70b-57d9225d1d2c";

  const [song, setSong] = useState(null);


  useEffect(() => {
    const fetchSongData = async () => {
      if (!user) return;

      if (user.access_token) {
        Cookies.set("access_token", user.access_token, { expires: 7, sameSite: "lax" });
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
      {/*header section */}
      <div className="header-section">
        <HeaderSongDescription />
      </div>

      {/*image + dropdown */}
      <div className="top-part">
        <SectionHeadImage title={song?.title}
  imageUrl={song?.cover_image}
  description={song?.description}
  genres={song?.genres || []}/>

        <div className="dropdown">
          <h1 className="tracks">Tracks ({tracks.length})</h1>
          {loading ? (
            <p>Loading tracks...</p>
          ) : (
            <TrackDropdown tracks={tracks} />
          )}
        </div>
      </div>

      {/* Collaborate Button*/}
      <div className="collaborate">
        <BasicBtn type="main" text="Collaborate" />
      </div>

      {/* {showPopup && (
        <Popup
          type="upload-track"
          onClose={() => setShowPopup(false)}
        />
      )} */}
    </div>
  );
};

export default SongDescription;

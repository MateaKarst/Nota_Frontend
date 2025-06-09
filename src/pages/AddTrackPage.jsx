import React, { useRef, useState, useEffect } from "react";
import HeaderVariants from "../components/Headers/HeaderVariants";
import Buttons from "../components/Buttons/BasicBtn";
import SectionHeadImage from "../components/SongDescription/SectionHeadImage";
import TrackDropdown from "../components/Tracks/TrackDropdown";
import TagInput from "../components/Tags/TagInput";
import { useAuth } from "../context/AuthProvider";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import API_ENDPOINTS from "../routes/apiEndpoints";

import "../styles/pages/add-tracks-page.css";

const AddTracksPage = () => {
  const audioPlayersRef = useRef([]);
  const [song, setSong] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);


  const { user } = useAuth();
  const { id: paramId } = useParams();

  // TEMP: fallback if paramId is undefined (for testing)
  const id = paramId || "8a97f671-2c6b-4673-a70b-57d9225d1d2c";


  const genres = [
    "Rock", "Hip Hop", "Jazz", "Electronic", "Pop", "Blues", "Reggae", "Classical"
  ];
  const instruments = [
    "Guitar", "Piano", "Drums", "Violin", "Bass", "Synth", "Trumpet", "Flute"
  ];

  useEffect(() => {
    if (!user || !id) return;

    const fetchSongData = async () => {
      try {
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
    <div className="upload-song-container">
      <header>
        <HeaderVariants mode="text" title="Preview" />
      </header>

      <div className="add-picture-container">
        <SectionHeadImage
          title={song?.title || "Unknown Title"}
          description={song?.description || "No description available."}
          genres={song?.genres || genres}
          showDescription={true}
          showTags={true}
          audioPlayersRef={audioPlayersRef}
          showInteractions={false}
        />
      </div>

      <div className="criteria-container">
        <div>
          <p className="section-title">Tracks</p>
          {loading ? <p>Loading tracks...</p> : <TrackDropdown tracks={tracks} audioPlayersRef={audioPlayersRef} />}

          <div className="taginput-container">
            <p className="section-title">Genre tag</p>
            <TagInput
              suggestions={genres}
              placeholder="Add genres..."
              colorIndex={4}
            />

            <p className="section-title">Instrument tag</p>
            <TagInput
              suggestions={instruments}
              placeholder="Add instruments..."
              colorIndex={5}
            />
          </div>
        </div>

        <div className="song-info">

        </div>

        <div className="upload-song-btn">
          <Buttons type="main" text="Post" onClick={() => console.log("Post clicked")} />
        </div>
      </div>
    </div>
  );
};

export default AddTracksPage;

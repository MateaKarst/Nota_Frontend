import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeaderVariants from "../components/Headers/HeaderVariants";
import Buttons from "../components/Buttons/BasicBtn";
import UserTrack from "../components/Tracks/UserTrack";
import TagInput from "../components/Tags/TagInput";

import API_ENDPOINTS from "../routes/apiEndpoints";

import "../styles/pages/upload-song.css";

const UploadSong = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef();

  const trackId = location.state?.trackId;
  const songId = location.state?.songId;

  // Local states
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [songName, setSongName] = useState('');
  const [description, setDescription] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [songData, setSongData] = useState(null);
  const maxDescriptionLength = 150;


  // Fetch current song and track data when component mounts (optional, if you want to prefill)
  useEffect(() => {
    const fetchSongAndTrack = async () => {
      if (!songId) return;

      try {
        const res = await fetch(API_ENDPOINTS.SONGS.SINGLE(songId));
        if (!res.ok) throw new Error("Failed to fetch song");

        const songData = await res.json();
        console.log("Fetched songData:", songData);
        setSongData(songData)
        setSongName(songData.name || '');
        setDescription(songData.description || '');
        setSelectedGenres(songData.genres || []);
        if (songData.cover_image) setImagePreview(songData.cover_image);

        if (songData.tracks && songData.tracks[0]) {
          setSelectedInstruments(songData.tracks[0].instruments || []);
        }
      } catch (error) {
        console.error("Error fetching song/track data", error);
      }
    };

    fetchSongAndTrack();
  }, [songId]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setImageFile(file); // save actual file for upload
    }
  };

  const handleDescriptionChange = (event) => {
    const input = event.target.value;
    const words = input.trim().split(/\s+/);
    if (words.length <= maxDescriptionLength) {
      setDescription(input);
    } else {
      setDescription(words.slice(0, maxDescriptionLength).join(" "));
    }
  };

  const genres = [
    "rock",
    "pop",
    "jazz",
    "classical",
    "hiphop",
    "electronic",
    "country",
    "other",
  ];

  const instruments = [
    "guitar",
    "bass",
    "drums",
    "keyboard",
    "vocals",
    "other",
  ];

  const wordCount =
    description.trim() === "" ? 0 : description.trim().split(/\s+/).length;

  // PATCH request to update song details
  const updateSong = async () => {
    const formData = new FormData();
    formData.append('title', songName);
    formData.append('description', description);
    formData.append('genres', JSON.stringify(selectedGenres));
    formData.append('cover_image', imageFile);


    try {
      const res = await fetch(API_ENDPOINTS.SONGS.SINGLE(songId), {
        method: 'PATCH',
        body: formData,
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to update song");
      }
      return true;
    } catch (err) {
      console.error("Error updating song:", err);
      alert("Failed to update song");
      return false;
    }
  };


  // PATCH request to update track instruments
  const updateTrack = async () => {
    if (!trackId) return true; // no track to update, skip

    try {
      const res = await fetch(API_ENDPOINTS.TRACKS.SINGLE(trackId), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ instruments: selectedInstruments }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to update track");
      }
      return true;
    } catch (err) {
      console.error("Error updating track:", err);
      alert("Failed to update track");
      return false;
    }
  };

  const handlePost = async () => {
    if (!songId) {
      alert("Song ID is missing.");
      return;
    }

    const songUpdated = await updateSong();
    if (!songUpdated) return;

    const trackUpdated = await updateTrack();
    if (!trackUpdated) return;

    alert("Song and track updated successfully!");
    navigate(`/music-editor/${songId}`);
  };

  return (
    <div className="upload-song-container">
      <header>
        <HeaderVariants mode="text" title="Preview" />
      </header>

      <div className="add-picture-container">
        <div className="add-picture" onClick={handleClick}>
          {imagePreview ? (
            <img src={imagePreview} alt="Uploaded" />
          ) : (
            <p className="plus">+</p>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*"
          />
        </div>
      </div>

      <div className="criteria-container">
        <div>
          <p className="section-title">Tracks in this song</p>
          {Array.isArray(songData?.tracks) && songData.tracks.length > 0 ? (
            songData.tracks.map((track, index) => (
              <UserTrack
                key={track.id || index}
                isOwnTrack={track.id === trackId}
                name={track.user_details?.name}
                profileImage={track.user_details?.avatar}
                audioSrc={track.url}
                tag={`#${track.instruments?.[0]}`}
              />
            ))
          ) : (
            <p>No tracks available.</p>
          )}
        </div>

        <div className="song-info">
          <p className="section-title">Song name</p>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="song-input"
            placeholder="Name"
          />

          <p className="section-title">Song description</p>
          <div className="textarea-wrapper">
            <textarea
              className="song-input"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Describe your song..."
              rows={4}
            />
            <span className="word-counter">{wordCount} / {maxDescriptionLength}</span>
          </div>

          <p className="section-title">Genre tag</p>
          <TagInput
            suggestions={genres}
            placeholder="Add genres..."
            colorIndex={4}
            type="genres"
            selectedTags={selectedGenres}
            setSelectedTags={setSelectedGenres}
          />

          <p className="section-title">Instrument tag</p>
          <TagInput
            suggestions={instruments}
            placeholder="Add instruments..."
            colorIndex={5}
            selectedTags={selectedInstruments}
            setSelectedTags={setSelectedInstruments}
          />
        </div>

        <div className="upload-song-btn">
          <Buttons type="main" text="Post" onClick={handlePost} />
        </div>
      </div>
    </div>
  );
};

export default UploadSong;

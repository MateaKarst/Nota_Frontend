import React, { useEffect, useState } from 'react';
import API_ENDPOINTS from '../routes/apiEndpoints';
import { useAuth } from '../context/AuthProvider';

import SearchBar from '../components/Search/SearchBar';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import HeaderMySongs from '../components/Headers/HeaderMySongs';
import MusicPlayer from '../components/MusicPlayer';

import "../styles/pages/my-songs.css";

function MySongsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("my-songs");
  const [allSongs, setAllSongs] = useState([]);
  const [createdSongs, setCreatedSongs] = useState([]);
  const [collaborationSongs, setCollaborationSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

 useEffect(() => {
  const fetchSongs = async () => {
    if (!user) return;
    try {
      const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE);
      const data = await res.json();

      console.log("All song objects:", data);
      console.log("Current user ID:", user.id);

      // Sort all songs by created_at descending (newest first)
      const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      const mySongs = sortedData.filter(song => song.user_id === user.id);
      const collaborations = sortedData.filter(song => {
        if (song.user_id === user.id) return false;
        return song.tracks?.some(track => track.user_id === user.id);
      });

      setAllSongs(sortedData);
      setCreatedSongs(mySongs);
      setCollaborationSongs(collaborations);
      setFilteredSongs(mySongs); // default to my songs
    } catch (err) {
      console.error("Error fetching songs:", err);
    }
  };

  fetchSongs();
}, [user]);


  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === "my-songs") {
      setFilteredSongs(createdSongs);
    } else if (tabId === "collaborations") {
      setFilteredSongs(collaborationSongs);
    }
  };

  const handleFilterChange = (selectedGenre) => {
    const source =
      activeTab === "my-songs" ? createdSongs : collaborationSongs;

    if (selectedGenre === "All") {
      setFilteredSongs(source);
    } else {
      setFilteredSongs(source.filter(song =>
        song.genre?.includes(selectedGenre)
      ));
    }
  };

  const handlePlay = (song) => {
    setCurrentSong({
      title: song.title,
      artist: song.user_id === user.id ? (user?.username || "You") : "Collaborator",
      cover: song.cover_image,
      audio: song.compiled_path
    });
  };

  // if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="my-songs-wrapper">
      <HeaderMySongs activeTab={activeTab} onTabChange={handleTabChange} />
      <div className='my-songs'>
      <SearchBar
        filterData={activeTab === "my-songs" ? createdSongs : collaborationSongs}
        onFilterChange={handleFilterChange}
        variant={2}
      />
      <div className="music-cards-mapping">
        {filteredSongs.map((song) => (
          <MusicCard
            key={song.id}
            imageUrl={song.cover_image}
            title={song.title}
            creator={song.user_id === user.id ? (user?.username || "You") : "Collaborator"}
            contributersNbr={song.tracks?.length || 1}
            layout="row"
            onPlay={() => handlePlay(song)}
            audio={song.compiled_path}
          />
        ))}
      </div>

      {currentSong && (
        <MusicPlayer song={currentSong} />
      )}
      </div>
    </div>
  );
}

export default MySongsPage;

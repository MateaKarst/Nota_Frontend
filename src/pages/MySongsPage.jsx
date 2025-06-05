import React, { useEffect, useState } from 'react';
import API_ENDPOINTS from '../routes/apiEndpoints';
import { useAuth } from '../context/AuthProvider'

import SearchBar from '../components/Search/SearchBar';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import HeaderMySongs from '../components/Headers/HeaderMySongs';
import MusicPlayer from '../components/MusicPlayer';

import "../styles/pages/my-songs.css"



function MySongsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("my-songs");
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  //fetch songs created by current user
  useEffect(() =>{
    const fetchMySongs = async () => {
      if(!user) return;
      try {
        const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE);
        const data = await res.json();

        //Debug log here
      console.log("Fetched songs from API:", data);
      console.log("Current user ID:", user.id);

        const mySongs = data.filter(song => song.user_id === user.id);

      //Debug log to confirm filtering
      console.log("Filtered my songs:", mySongs);

        setAllSongs(mySongs);
        setFilteredSongs(mySongs);
      } catch (err) {
        console.error("Error fetching songs:", err);
    }
  };

  fetchMySongs();
}, [user]);


  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleFilterChange = (selectedGenre) => {
    if (selectedGenre === "All") {
      setFilteredSongs(allSongs);
    } else {
      setFilteredSongs(allSongs.filter(song => song.genre?.includes(selectedGenre)));
    }
  };

   const handlePlay = (song) => {
    setCurrentSong({
      title: song.title,
      artist: user?.username || "You",
      cover: song.cover_image,
      audio: song.compiled_path
    });
  };

  return (
    <div className="my-songs-wrapper">
      <HeaderMySongs activeTab={activeTab} onTabChange={handleTabChange} />
      <SearchBar filterData={allSongs[activeTab]} onFilterChange={handleFilterChange} variant={2} />
      <div className="music-cards-mapping">
        {filteredSongs.map((song) => (
          <MusicCard
            key={song.id}
            imageUrl={song.cover_image}
            title={song.title}
            creator={user?.username || "You"}
            contributersNbr={1}
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
  );
}

export default MySongsPage;

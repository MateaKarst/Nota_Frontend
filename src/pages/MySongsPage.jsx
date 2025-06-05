import React, { useState, useEffect } from 'react';
import SearchBar from '../components/Search/SearchBar';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import HeaderMySongs from '../components/Headers/HeaderMySongs';
import MusicPlayer from '../components/MusicPlayer';
import { useAuth } from '../context/AuthProvider';
import Cookies from 'js-cookie';
import API_ENDPOINTS from '../routes/apiEndpoints';

import '../styles/pages/my-songs.css';

function MySongsPage() {
  const [activeTab, setActiveTab] = useState('my-songs');
  const [allSongs, setAllSongs] = useState({ 'my-songs': [], collaborations: [] });
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    const fetchSongs = async () => {
      if (!user || !user.access_token) {
        setError('User not authenticated');
        return;
      }

      Cookies.set('access_token', user.access_token, { expires: 7, sameSite: 'lax' });

      try {
        const accessToken = user.access_token;
        const songsRes = await fetch(`${API_ENDPOINTS.SONGS.MULTIPLE}?userId=${user.id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const fetchedSongs = await songsRes.json();
        if (!songsRes.ok) throw new Error(fetchedSongs.message || 'Failed to fetch songs');

        const own = fetchedSongs.filter(song => song.user_id === user.id);
        const collabs = fetchedSongs.filter(
          song =>
            song.user_id !== user.id &&
            song.tracks?.some(track => track.user_id === user.id)
        );

        setAllSongs({ 'my-songs': own, collaborations: collabs });
        setFilteredSongs(own);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    fetchSongs();
  }, [user]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setFilteredSongs(allSongs[tabId] || []);
  };

  const handleFilterChange = (selectedGenre) => {
    const songsInTab = allSongs[activeTab] || [];
    if (selectedGenre === 'All') {
      setFilteredSongs(songsInTab);
    } else {
      setFilteredSongs(songsInTab.filter(song => song.genre === selectedGenre));
    }
  };

  const handlePlay = (song) => {
    setCurrentSong({
      title: song.title,
      artist: song.user_details?.name || song.creator,
      cover: song.cover_image || song.imageUrl,
      audio: song.audio_url || song.audioUrl,
    });
  };

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="my-songs-wrapper">
      <HeaderMySongs activeTab={activeTab} onTabChange={handleTabChange} />
      <SearchBar filterData={allSongs[activeTab]} onFilterChange={handleFilterChange} variant={2} />

      <div className="music-cards-mapping">
        {filteredSongs.map((song) => (
          <MusicCard
            key={song.id}
            imageUrl={song.cover_image || song.imageUrl}
            title={song.title}
            creator={song.user_details?.name || song.creator}
            contributersNbr={song.contributors?.length || song.contributersNbr || 0}
            layout="row"
            onPlay={() => handlePlay(song)}
            audio={song.audio_url || song.audioUrl}
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

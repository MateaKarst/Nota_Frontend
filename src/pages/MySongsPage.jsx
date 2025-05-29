import React, { useState } from 'react';
import SearchBar from '../components/Search/SearchBar';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import HeaderMySongs from '../components/Headers/HeaderMySongs';
// import MusicPlayer from '../components/MusicPlayer';

import "../styles/pages/my-songs.css"

// Define songs per tab
const allSongs = {
  "my-songs": [
    {
      id: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",
      title: "Rolling In The Deep",
      creator: "Adele",
      contributersNbr: 3,
      genre: "Pop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 2,
      imageUrl: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-edit-bestsongs-90s-f675cff9-a465-4ad7-b0bb-7e3d7913f17c.png?w=910&h=511&crop=1",
      title: "Thriller",
      creator: "Michael Jackson",
      contributersNbr: 5,
      genre: "Pop",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
  ],
  "collaborations": [
    {
      id: 3,
      imageUrl: "https://www.rollingstone.com/wp-content/uploads/2021/09/RS_500_Great_Songs_1800x1200.jpg?w=1581&h=1054&crop=1",
      title: "Back in Black",
      creator: "AC/DC",
      contributersNbr: 4,
      genre: "Rock",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
  ],
  "liked-songs": [
    {
      id: 4,
      imageUrl: "https://ca-times.brightspotcdn.com/dims4/default/b2bd1a9/2147483647/strip/true/crop/3000x2000+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa0%2Fa2%2Febb4155e40a7b54d38a57db9066b%2Flat-ent-best-songs-2024.jpg",
      title: "Abbey Road",
      creator: "The Beatles",
      contributersNbr: 4,
      genre: "Rock",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 5,
      imageUrl: "https://www.billboard.com/wp-content/uploads/2025/03/rihanna-Drinking-Songs-HERO-2025-billboard-1548.jpg?w=942&h=623&crop=1",
      title: "The Dark Side of the Moon",
      creator: "Pink Floyd",
      contributersNbr: 6,
      genre: "Progressive Rock",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
  ]
};

function MySongsPage() {
  const [activeTab, setActiveTab] = useState("my-songs");
  const [filteredSongs, setFilteredSongs] = useState(allSongs["my-songs"]);
  const [currentSong, setCurrentSong] = useState(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setFilteredSongs(allSongs[tabId]);
  };

  const handleFilterChange = (selectedGenre) => {
    const tabSongs = allSongs[activeTab];
    if (selectedGenre === "All") {
      setFilteredSongs(tabSongs);
    } else {
      setFilteredSongs(tabSongs.filter(song => song.genre === selectedGenre));
    }
  };

   const handlePlay = (song) => {
    setCurrentSong({
      title: song.title,
      artist: song.creator,
      cover: song.imageUrl,
      audio: song.audioUrl
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
            imageUrl={song.imageUrl}
            title={song.title}
            creator={song.creator}
            contributersNbr={song.contributersNbr}
            layout="row"
            onPlay={() => handlePlay(song)} 
            audio={song.audioUrl}
          />
        ))}
      </div>

{/* {currentSong && (
   <MusicPlayer song={currentSong} />
)} */}
    </div>
  );
}

export default MySongsPage;

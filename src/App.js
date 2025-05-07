import './App.css';

import React, { useState } from 'react';
import MusicCard from './components/MusicCard/HomeAndMySongsCards/MusicCard';
import SearchBar from './components/Search/SearchBar';

const Songs = [
  {
    id: 1,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",
    title: "Rolling In The Deep",
    creator: "Adele",
    contributersNbr: 3,
    genre: "Pop"
  },
  {
    id: 2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Michael_Jackson_-_Thriller.png",
    title: "Thriller",
    creator: "Michael Jackson",
    contributersNbr: 5,
    genre: "Pop"
  },
  {
    id: 3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Back_in_Black.jpg",
    title: "Back in Black",
    creator: "AC/DC",
    contributersNbr: 4,
    genre: "Rock"
  },
  {
    id: 4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d1/Abbey_Road.png",
    title: "Abbey Road",
    creator: "The Beatles",
    contributersNbr: 4,
    genre: "Rock"
  },
  {
    id: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0e/Pink_Floyd_-_The_Dark_Side_of_the_Moon.png",
    title: "The Dark Side of the Moon",
    creator: "Pink Floyd",
    contributersNbr: 6,
    genre: "Progressive Rock"
  }
];

function App() {
  const [filteredSongs, setFilteredSongs] = useState(Songs);

  const handleFilterChange = (selectedGenre) => {
    if (selectedGenre === "All") {
      setFilteredSongs(Songs);
    } else {
      setFilteredSongs(Songs.filter(song => song.genre === selectedGenre));
    }
  };

  return (
    <div className="App">
      <SearchBar filterData={Songs} onFilterChange={handleFilterChange} variant={2}/>
      <div className="music-cards">
        {filteredSongs.map((song) => (
          <MusicCard
            key={song.id}
            imageUrl={song.imageUrl}
            title={song.title}
            creator={song.creator}
            contributersNbr={song.contributersNbr}
            layout = "row"
          />
        ))}
      </div>
    </div>
  );
}

export default App;

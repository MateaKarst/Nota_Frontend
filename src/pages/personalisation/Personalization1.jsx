<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import Buttons from "../../components/Buttons/BasicBtn"
import HeaderVariants from "../../components/Headers/HeaderVariants";
import { useNavigate } from "react-router-dom";
import MusicTag from "../../components/Tags/MusicTag";
=======
import React, { useState } from "react";
//import PurpleTag from "../../components/Tags/PurpleTag"
import MusicTag from "../../components/Tags/MusicTag";
import Buttons from "../../components/Buttons/BasicBtn"
import HeaderVariants from "../../components/Headers/HeaderVariants";
import SearchBar from "../../components/Search/SearchBar";
>>>>>>> dominyka

<<<<<<< HEAD
import "../../styles/variables.css"
=======
import "../../styles/variables.css";
>>>>>>> petra
import "../../styles/pages/personalization-1.css"

const genres = [
    "Pop",
    "Rock",
    "Hip-Hop",
    "Rap",
    "Jazz",
    "Classical",
    "Folk",
    "Funk",
    "Country",
    "Metal",
    "Electronic",
    "Indie",
    "Blues",
    "Opera",
    "R&B",
    "Soul",
];

const Personalization1 = () => {
<<<<<<< HEAD
    const navigate = useNavigate();
    const [selectedGenres, setSelectedGenres] = useState([]);

    const toggleGenre = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre]
        );
    };

=======
      const [selectedGenres, setSelectedGenres] = useState([]);

  const handleTagClick = (genre) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genre)
        ? prevSelected.filter((item) => item !== genre)
        : [...prevSelected, genre]
    );
  };
>>>>>>> dominyka
    return (
        <div className="container">
            <div>
                <HeaderVariants className="header" mode="default" />

        <h2 className="question1">What music genre do you like to create or work on?</h2>

          <SearchBar 
            variant={1}/>

                <div className="tags">
                    {genres.map((genre) => (
<<<<<<< HEAD
                        <MusicTag
                            key={genre}
                            text={genre}
                            colorIndex={selectedGenres.includes(genre) ? 3 : 2}
                            isSelected={selectedGenres.includes(genre)}
                            onClick={() => toggleGenre(genre)}
                        />
=======
                        <MusicTag key={genre} text={`${genre}`} colorIndex={2} isSelected={selectedGenres.includes(genre)} onClick={() => handleTagClick(genre)} />
>>>>>>> dominyka
                    ))}
                </div>

                <div className="next-button-wrapper">
                    <Buttons
                        type="default"
                        text="Next"
                        onClick={() => navigate("/home")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Personalization1;

import React from "react";
import { useState } from "react";
import Buttons from "../../components/Buttons/BasicBtn"
import HeaderVariants from "../../components/Headers/HeaderVariants";
import { useNavigate } from "react-router-dom";
import MusicTag from "../../components/Tags/MusicTag";
//import PurpleTag from "../../components/Tags/PurpleTag"
import SearchBar from "../../components/Search/SearchBar";

import "../../styles/variables.css";
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
    const navigate = useNavigate();
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleTagClick = (genre) => {
        setSelectedGenres((prevSelected) =>
            prevSelected.includes(genre)
                ? prevSelected.filter((item) => item !== genre)
                : [...prevSelected, genre]
        );
    };
    return (
        <div className="container">
                <HeaderVariants className="header" mode="default" />

                <h2 className="question1">What music genre do you like to create or work on?</h2>

        <div className="search">
                <SearchBar
                    variant={1} />
                    </div>

                <div className="tags">
                    {genres.map((genre) => (
                        <MusicTag
                            key={genre}
                            text={`${genre}`}
                            colorIndex={2}
                            isSelected={selectedGenres.includes(genre)}
                            onClick={() => handleTagClick(genre)} />
                    ))}
                </div>

                <div className="next-button-wrapper">
                    <Buttons
                        type="default"
                        text="Next"
                        onClick={() => navigate("/personalisation2")}
                    />
                </div>
            </div>
    );
};

export default Personalization1;
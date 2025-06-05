import React from "react";
import HeaderVariants from "../components/Headers/HeaderVariants";
import SearchBar from "../components/Search/SearchBar";
import GenreCard from "../components/Search/GenreCard"
import FilterIcon from "../assets/filter-icon.svg"

import {useNavigate} from 'react-router-dom';

import "../styles/variables.css"

import "../styles/pages/SearchPage.scss"


const SearchPage = () => {

    const navigate = useNavigate();

    const handleGenreClick = (genreName) => {
        navigate ('/view-all', {state: {title: genreName } });
    };

    const genres = ['jazz', 'rock', 'country', 'metal', 'pop', 'indie'];

    return (
        <div className="container">
            <HeaderVariants className="genre-card" mode="default" />
            <div className="search-bar-container">
            <SearchBar  className="search-bar"
            variant={2}/>
            </div>
            <div className="genre-grid">
        {genres.map((genre) => (
          <GenreCard
            key={genre}
            mode={genre}
            onClick={() => handleGenreClick(genre)}
          />
        ))}
      </div>
        </div>
    )
}

export default SearchPage;
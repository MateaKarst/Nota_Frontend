import React from "react";
import HeaderVariants from "../components/header-backarrow";
import SearchBar from "../components/Search/SearchBar";
import GenreCard from "../components/Search/GenreCard"
import FilterIcon from "../assets/filter-icon.svg"
import "../styles/variables.css"

import "../styles/pages/SearchPage.scss"


const SearchPage = () => {
    return (
        <div className="container">
            <HeaderVariants className="genre-card" mode="default" />
            <div className="search-bar-container">
            <SearchBar />
            <img src={FilterIcon} alt="filter" />
            </div>
            <div className="genre-box">
                <GenreCard />
                <GenreCard mode="country" />
                <GenreCard mode="metal" />
                <GenreCard mode="rock" />
                <GenreCard mode="pop" />
                <GenreCard mode="indie" />
            </div>
        </div>
    )
}

export default SearchPage;
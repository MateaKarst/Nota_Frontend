import React from "react";
import HeaderVariants from "../components/Headers/HeaderVariants";
import SearchBar from "../components/Search/SearchBar";
import GenreCard from "../components/Search/GenreCard"
import FilterIcon from "../assets/filter-icon.svg"
import NavBar from "../components/Navigation/NavBar";
import "../styles/variables.css"

import "../styles/pages/SearchPage.scss"


const SearchPage = () => {
    return (
        <div className="container">
            <HeaderVariants className="genre-card" mode="default" />
            <div className="search-bar-container">
            <SearchBar 
            variant={1}/>
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
            <NavBar />
        </div>
    )
}

export default SearchPage;
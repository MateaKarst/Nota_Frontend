"use client";

import React, { useState, useRef } from "react";
import SearchResultsList from "./SearchResultsList";
import MusicTag from "../Tags/MusicTag";

import "../../styles/components/search/search-bar.css";

const SearchBar = ({ filterData, onFilterChange, variant = 2 }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    const [showFilter, setShowFilter] = useState(false);
    const [selectedType, setSelectedType] = useState("All");

    const [activeTags, setActiveTags] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        filterResults(value);
    };

    const filterResults = (value) => {
        if (!value.trim()) {
            setResults([]);
            return;
        }

        const filtered = filterData.filter((item) => {
            const matchesQuery = item.title.toLowerCase().includes(value.toLowerCase());
            const matchesType = selectedType === "All" || item.genre === selectedType;
            return matchesQuery && matchesType;
        });

        setResults(filtered);
    };

    const toggleFilterMenu = () => setShowFilter((prev) => !prev);

    const handleFilterSelect = (type) => {
        setSelectedType(type);
        setShowFilter(false);
        filterResults(query);

        // Notify parent component about the selected genre
        onFilterChange(type);

        const tagIndex = activeTags.findIndex(tag => tag.text === type);

        if (tagIndex === -1) {
            const colorIndex = Math.floor(Math.random() * 4);
            setActiveTags(prev => [...prev, { text: type, colorIndex }]);
        } else {
            setActiveTags(prev => prev.filter((tag, index) => index !== tagIndex));
        }
    };

    return (
        <div className={`search-bar-wrapper ${variant === 2 ? 'search-bar-variant-2' : ''}`}>
            <div className="searching">
                <div className="search-n-filter-container">
                    <div className={`search-container ${variant === 2 ? 'hide-search' : ''}`}>
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path
                                    d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={query}
                            onChange={handleInputChange}
                        />

{results.length > 0 && (
                            <SearchResultsList results={results} />
                        )}                    </div>

                    <div className={`filter-container ${variant === 1 ? 'hide-filter' : ''}`}>
                        <button className="filter-button" onClick={toggleFilterMenu} aria-label="Toggle Filter Menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <g clipPath="url(#clip0_3099_32007)">
                                    <path
                                        d="M18.418 0.399364C18.2913 0.153926 18.0383 0 17.7624 0H1.23827C0.961863 0 0.708917 0.153926 0.582209 0.399364C0.455502 0.644801 0.47662 0.939983 0.636177 1.16524L6.36618 9.23558V13.9773C6.36618 14.2208 6.48632 14.4484 6.6867 14.5859L11.4786 17.8709C11.6039 17.9568 11.7494 18.0005 11.8958 18C12.0136 18 12.1319 17.9718 12.2398 17.9151C12.4819 17.7874 12.634 17.5359 12.634 17.2623V9.23558L18.364 1.16524C18.524 0.939983 18.5447 0.644801 18.418 0.399364Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3099_32007">
                                        <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        {showFilter && (
                            <div className="filter-menu">
                                <button onClick={() => handleFilterSelect("All")}>All</button>
                                <button onClick={() => handleFilterSelect("Pop")}>Pop</button>
                                <button onClick={() => handleFilterSelect("Rock")}>Rock</button>
                                <button onClick={() => handleFilterSelect("Progressive Rock")}>Progressive Rock</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <div className={`tags ${variant === 1 ? 'hide-filter' : ''}  ${variant === 2 ? 'tags-variant-2' : ''} `}>
                {activeTags.map((tag, index) => (
                    <MusicTag key={index} text={tag.text} colorIndex={tag.colorIndex} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;

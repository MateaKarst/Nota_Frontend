import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import HeaderVariants from "../components/Headers/HeaderVariants";
import SearchBar from "../components/Search/SearchBar";
import GenreCard from "../components/Search/GenreCard"
import API_ENDPOINTS from "../routes/apiEndpoints";
import { useAuth } from '../context/AuthProvider';

import "../styles/variables.css"
import "../styles/pages/SearchPage.scss"



const SearchPage = () => {
const { user } = useAuth()

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
            setLoading(true);
            setError(null);

            try {
                // Try to get access token from user or cookie
                const accessToken = user?.access_token || Cookies.get("access_token");
                if (!accessToken) throw new Error("User not authenticated");

                const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch songs");

                const data = await res.json();

                // Assuming data is an array of songs
                setSongs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, [user]);

    const handleFilterChange = (filterType, filteredResults) => {
        // Optionally do something on filter change, e.g. log, update state, etc.
        console.log("Filter changed:", filterType, filteredResults);
    };

    return (
        <div className="container">
            <HeaderVariants className="genre-card" mode="default" />
            <div className="search-bar-container">
                {/* Pass songs as filterData */}
                <SearchBar
                    variant={2}
                    filterData={songs}
                    onFilterChange={handleFilterChange}
                />
            </div>

            {loading && <div>Loading songs...</div>}
            {error && <div className="error">Error: {error}</div>}

            <div className="genre-box">
                <GenreCard />
                <GenreCard mode="country" />
                <GenreCard mode="metal" />
                <GenreCard mode="rock" />
                <GenreCard mode="pop" />
                <GenreCard mode="indie" />
            </div>
        </div>
    );
};

export default SearchPage;
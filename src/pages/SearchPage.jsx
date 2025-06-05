import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import HeaderVariants from "../components/Headers/HeaderVariants";
import SearchBar from "../components/Search/SearchBar";
import GenreCard from "../components/Search/GenreCard";
import SmallCard from "../components/MusicCard/SmallCard/SmallCard";
import API_ENDPOINTS from "../routes/apiEndpoints";
import { useAuth } from "../context/AuthProvider";

import "../styles/variables.css";
import "../styles/pages/SearchPage.scss";

const SearchPage = () => {
    const { user } = useAuth();
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
            setLoading(true);
            setError(null);

            try {
                const accessToken = user?.access_token || Cookies.get("access_token");
                if (!accessToken) throw new Error("User not authenticated");

                const res = await fetch(API_ENDPOINTS.SONGS.MULTIPLE, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    credentials: "include",
                });

                if (!res.ok) throw new Error("Failed to fetch songs");

                const data = await res.json();
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
        console.log("Filter changed:", filterType, filteredResults);
    };

    const handleResultsUpdate = (filtered) => {
        setFilteredSongs(filtered);
    };

    return (
        <div className="container">
            <HeaderVariants className="genre-card" mode="default" />
            <div className="search-bar-container">
                <SearchBar
                    variant={2}
                    filterData={songs}
                    onFilterChange={handleFilterChange}
                    onResultsUpdate={handleResultsUpdate}
                />
            </div>

            {loading && <div>Loading songs...</div>}
            {error && <div className="error">Error: {error}</div>}

            {filteredSongs && filteredSongs.length > 0 ? (
                <div style={{ marginTop: "16px" }}>
                    {filteredSongs.map((song, index) => (
                        <SmallCard
                            key={song.id}
                            title={song.title}
                            creator={song.user_details.name}
                            contributersNbr={
                                (() => {
                                    const contributorsCount = new Set(song.tracks?.map(track => track.user_id).filter(Boolean)).size;
                                    return contributorsCount > 0 ? contributorsCount : "";
                                })()
                            }
                            imageUrl={song.cover_image}
                            onPlay={() =>
                                setCurrentSong({
                                    title: song.title,
                                    artist: song.user_details.name,
                                    cover: song.user_id,
                                    audio: song,
                                })
                            }
                        />
                    ))}
                </div>
            ) : (
                <div className="genre-box">
                    <GenreCard />
                    <GenreCard mode="country" />
                    <GenreCard mode="metal" />
                    <GenreCard mode="rock" />
                    <GenreCard mode="pop" />
                    <GenreCard mode="indie" />
                </div>
            )}
        </div>
    );
};

export default SearchPage;

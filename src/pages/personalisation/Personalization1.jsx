import React, { useState } from "react";
//import PurpleTag from "../../components/Tags/PurpleTag"
import MusicTag from "../../components/Tags/MusicTag";
import Buttons from "../../components/Buttons/BasicBtn"
import HeaderVariants from "../../components/Headers/HeaderVariants";
import SearchBar from "../../components/Search/SearchBar";
import { useNavigate } from "react-router-dom";

import "../../styles/variables.css"
import "../../styles/pages/personalization-2.css"

const instruments = [
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
    
];

const Personalization1 = () => {
    const [selectedInstruments, setSelectedInstruments] = useState([]);
    const navigate = useNavigate();

    const handleTagClick = (instrument) => {
        setSelectedInstruments((prevSelected) =>
            prevSelected.includes(instrument)
                ? prevSelected.filter((item) => item !== instrument)
                : [...prevSelected, instrument]
        );
    };
    return (
        <div className="container">
                <HeaderVariants className="header" mode="default" />

            <div className="personalization-1">
                <h2 className="question1">What music genre do you like to create or work on?</h2>

                <SearchBar 
                    variant={1}
                    onFilterChange={() => { }}
                    onResultsUpdate={() => { }}
                />

                <div className="tags">
                    {instruments.map((instrument) => (
                        <MusicTag key={instrument} text={`${instrument}`} colorIndex={2} isSelected={selectedInstruments.includes(instrument)} onClick={() => handleTagClick(instrument)} />
                    ))}
                </div>

                <div className="next-button-wrapper">
                    <Buttons type="default" text="Next" onClick={() => navigate("/personalisation2")} />
                </div>
            </div>
        </div>
    )
}

export default Personalization1;
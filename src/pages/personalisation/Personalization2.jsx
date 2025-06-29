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
    "Guitar",
    "Ukulele",
    "Piano",
    "Vocal",
    "Flute",
    "Violin",
    "Saxophone",
    "Drums",
    "Acoordion",
    "Lyre",
    "Tuba",
    "Balalaika",
    "Trombone",
    "Banjo",
];

const Personalization2 = () => {
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

                <h2 className="question1">What instruments do you play?</h2>

                <SearchBar
                    variant={1}
                    onFilterChange={() => { }}
                    onResultsUpdate={() => { }}
                />

                <div className="tags">
                    {instruments.map((instrument) => (
                        <MusicTag key={instrument} text={`${instrument}`} colorIndex={0} isSelected={selectedInstruments.includes(instrument)} onClick={() => handleTagClick(instrument)} />
                    ))}
                </div>

                <div className="next-button-wrapper">
                    <Buttons type="default" text="Next" onClick={() => navigate("/home")} />
                </div>
            </div>
        </div>
    )
}

export default Personalization2;
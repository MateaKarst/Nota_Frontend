import React from "react";
import PurpleTag from "../components/Tags/PurpleTag"
import Buttons from "../components/Buttons/BasicBtn"
import HeaderVariants from "../components/header-backarrow";

import "../styles/variables.css";
import "../styles/pages/personalization-1.css"

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
    return (
        <div className="container">
            <div>
                <HeaderVariants mode="black text" title="What music genre do you" />

                <div className="tags">
                    {genres.map((genre) => (
                        <PurpleTag key={genre} text={`#${genre}`} />
                    ))}
                </div>

                <div className="next-button-wrapper">
                    <Buttons type="default" text="Next" />
                </div>
            </div>
        </div>
    )
}

export default Personalization1;

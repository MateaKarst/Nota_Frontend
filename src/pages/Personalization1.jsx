import React from "react";
import "../styles/variables.css";
import PurpleTag from "../components/Tags/PurpleTag"
import { ReactComponent as BackArrowIcon } from "../assets/backarrow-icon.svg"
import Buttons from "../components/Buttons/BasicBtn"
import "../styles/pages/Personalization.css"
import HeaderVariants from "../components/header-backarrow";

const genres =[
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
                <HeaderVariants mode="black text" title="What music genre do you"/> 
               
            


            //space bar 

                <div className="tags">
                    {genres.map((genre) => (
                        <PurpleTag key={genre} text={`#${genre}`} />
                    ) )}
                </div>

            <div className="next-button-wrapper">
                <Buttons type="default" text="Next" />
            </div>
            </div>
        </div>
    )
}

export default Personalization1;

import React from "react";

import HeaderVariants from "../components/Headers/HeaderVariants";
import Timer from '../components/Editor/Timer'
import MultiTrackMixer from '../components/WorkingEditor/MultitrackMixer'
import Button from '../components/Buttons/BasicBtn' 

import '../styles/editor/editor2.css'


const Editor = () => {
    return (
        <div className="editor-container">
            <div className="header-block"><HeaderVariants mode="black text" /></div>
            {/*<div className="timer-block"><Timer variation={1} /></div>*/}
           <div className="mixer-block"> <MultiTrackMixer></MultiTrackMixer></div>
           <div className="button-block">
            <Button text="Cut" type="medium"></Button>
           <Button text="Split" type="medium"></Button>
           </div>
    
        </div>
    )
};

export default Editor;
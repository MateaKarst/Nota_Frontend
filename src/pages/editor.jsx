import React from "react";

//  import Waveform from "../components/Editor/Waveform";
//  import ringtone from '../assets/editor/iphone-ringtone.mp3';

import TimelineGrid from "../components/Editor/TimelineGrid";

//import MovementSoundwave from "../components/Editor/MovementSoundwave";

const Editor = () => {
  
  return(
    <div style={{ backgroundColor: "black", height: "100%" }}>
      
        <TimelineGrid/>
      {/* <Waveform audioUrl={ringtone} />  */}

      {/* <MovementSoundwave/>  */}

    </div>
  )
};

export default Editor;

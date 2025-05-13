import React from "react";

 //import Waveform from "../components/Editor/Waveform";
//  import ringtone from '../assets/editor/iphone-ringtone.mp3';
// import MultiTrackEditor from "../components/Editor/MultiTrackEditor";

// import TimelineGrid from "../components/Editor/TimelineGrid";
import AudioPlayer from "../components/Editor/LibraryMulti/AudioPlayer";

//import MovementSoundwave from "../components/Editor/MovementSoundwave";

const Editor = () => {
  
  return(
    <div style={{ backgroundColor: "pink", height: "100%" }}>
      
        {/* <TimelineGrid/> */}
      {/* <Waveform audioUrl={ringtone} />  */}

      {/* <MultiTrackEditor/>  */}

      <AudioPlayer/>
    </div>
  )
};

export default Editor;

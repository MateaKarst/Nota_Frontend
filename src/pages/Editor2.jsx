import React, { useState } from "react";

import HeaderVariants from "../components/Headers/HeaderVariants";
import Timer from '../components/Editor/Timer'
import MultiTrackMixer from '../components/WorkingEditor/MultitrackMixer'
import Button from '../components/Buttons/BasicBtn'
import LoadingProgress from "../components/progressbar";

import '../styles/editor/editor2.css'


const Editor = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePreviewClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="editor-container">
      <div className="header-block"><HeaderVariants mode="black text" /></div>
      {/*<div className="timer-block"><Timer variation={1} /></div>*/}
      <div className="mixer-block"> <MultiTrackMixer></MultiTrackMixer></div>

      <LoadingProgress label="Loading Preview..." isLoading={isLoading} />
      <div onClick={handlePreviewClick}>
        <Button text="Go to Preview" type="medium" />
      </div>
    </div>
  )
};

export default Editor;
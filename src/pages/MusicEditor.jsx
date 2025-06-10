import React, { useState } from "react";
import { useParams } from "react-router-dom";

import HeaderVariants from "../components/Headers/HeaderVariants";
import MultiTrackMixer from '../components/WorkingEditor/MultitrackMixer'
import Button from '../components/Buttons/BasicBtn'
import LoadingProgress from "../components/progressbar";

import '../styles/editor/editor2.css'

const MusicEditor = () => {
  const { id } = useParams();  // get song id from url param
  const [isLoading, setIsLoading] = useState(false);

  // You can pass the id down to MultitrackMixer if needed
  // or fetch song/tracks here and pass data to child
  return (
    <div className="editor-container">
      <div className="header-block"><HeaderVariants mode="black text" /></div>
      <div className="mixer-block">
        <MultiTrackMixer songId={id} />
      </div>

      <LoadingProgress label="Loading Preview..." isLoading={isLoading} />
      <div onClick={() => setIsLoading(true)}>
        <Button text="Go to Preview" type="medium" />
      </div>
    </div>
  );
};

export default MusicEditor;
import React, { useRef, useState } from "react";
import HeaderVariants from "../components/Headers/HeaderVariants";
import Buttons from "../components/Buttons/BasicBtn";
import HeadImage from "../components/SongDescription/HeadImage";
import SectionHeadImage from "../components/SongDescription/SectionHeadImage";
import TrackDropdown from "../components/Tracks/TrackDropdown";
import TagInput from "../components/Tags/TagInput";

import "../styles/pages/add-tracks-page.css";

const AddTracksPage = () => {
const audioPlayersRef = useRef([]);

  const fileInputRef = useRef();
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const maxDescriptionLength = 150;

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      console.log("Selected file:", file);
    }
  };

  const handleDescriptionChange = (event) => {
    const input = event.target.value;
    const words = input.trim().split(/\s+/);
    if (words.length <= maxDescriptionLength) {
      setDescription(input);
    } else {
      setDescription(words.slice(0, maxDescriptionLength).join(" "));
    }
  };

  const genres = [
    "Rock",
    "Hip Hop",
    "Jazz",
    "Electronic",
    "Pop",
    "Blues",
    "Reggae",
    "Classical",
  ];

  const instruments = [
    "Guitar",
    "Piano",
    "Drums",
    "Violin",
    "Bass",
    "Synth",
    "Trumpet",
    "Flute",
  ];

  const wordCount =
    description.trim() === "" ? 0 : description.trim().split(/\s+/).length;

  return (
    <div className="upload-song-container">
      <header>
        <HeaderVariants mode="text" title="Preview" />
      </header>

      <div className="add-picture-container">
       <SectionHeadImage
       title="Paris 2012"
       description="Future top track with musical harmony that brings new fresh electro vibes."
       showDescription={false}
       showTags={false}
       audioPlayersRef={audioPlayersRef}
       showInteractions={false}/>
      </div>

      <div className="criteria-container">
        <div>
          <p className="section-title">Tracks</p>
          <TrackDropdown audioPlayersRef={audioPlayersRef} />
        </div>

        <div className="song-info">

          <p className="section-title">Song description</p>
          <div className="textarea-wrapper">
            <textarea
              className="song-input"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Describe your song..."
              rows={4}
            />
            <span className="word-counter">{wordCount} / 150</span>
          </div>

          <p className="section-title">Genre tag</p>
          <TagInput
            suggestions={genres}
            placeholder="Add genres..."
            colorIndex={4}
          />

          <p className="section-title">Instrument tag</p>
          <TagInput
            suggestions={instruments}
            placeholder="Add instruments..."
            colorIndex={5}
          />
        </div>

        <div className="upload-song-btn">
          <Buttons type="main" text="Post" />
        </div>
      </div>
    </div>
  );
};

export default AddTracksPage;
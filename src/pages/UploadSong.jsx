import HeaderVariants from "../components/Headers/HeaderVariants";
import Buttons from "../components/Buttons/BasicBtn";
import UserTrack from "../components/Tracks/UserTrack";
import "../styles/pages/upload-song.css";

const UploadSong = () => {
  return (
    <div>
      <header>
        <HeaderVariants mode="text" title="Preview" />
      </header>
      <div className="criteria-container">
        <div>
          <h3 className="your-track">Your track</h3>
          <UserTrack isOwnTrack={false}/>
        </div>

        <div className="song-info" style={{ marginBottom: "20px" }}>
          <h3>Song name</h3>
          <input type="text" name="Name" id="name" className="song-input" />
          <h3>Song description</h3>
          <input
            type="text"
            name="Description"
            id="description"
            className="song-input"
          />
          <h3>Genre tag</h3>
          <input type="text" name="Genre" id="genre" className="song-input" />
          <h3>Instrument tag</h3>
          <input
            type="text"
            name="Instrument"
            id="instrument"
            className="song-input"
          />
        </div>

        <div className="upload-soong-btn">
          <Buttons type="main" text="Post" />
          {/* <FileUpload onUpload={() => {}} /> */}
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
